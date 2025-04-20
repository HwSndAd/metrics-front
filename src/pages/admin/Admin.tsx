import { DownloadSimple, Funnel } from '@phosphor-icons/react'
import ListUsuario from '../../components/listUsuario/ListUsuario'
import ViewUsuario from '../../components/viewUsuario/ViewUsuario'
import { useContext, useEffect, useState } from 'react'
import Medidas from '../../models/Medidas'
import { AuthContext } from '../../contexts/AuthContext'
import { buscar } from '../../service/service'
import { useNavigate } from 'react-router-dom'

import { generatePrintHTML } from '../../util/ExportarTodos'

function Admin() {
    const navigate = useNavigate();
    const [medidas, setMedidas] = useState<Medidas[]>([]);
    const [filtro, setFiltro] = useState<string>(''); // Estado para o filtro
    const { usuario, handleLogout } = useContext(AuthContext);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState<Medidas | null>(null);

    const token = usuario.token;

    const handleExport = () => {
        const html = generatePrintHTML(medidas);
        const janela = window.open('', '_blank');
        if (janela) {
            janela.document.write(`
                <html>
                    <head>
                        <title>Relatório de Medidas</title>
                        <style>
                            body { font-family: Arial, sans-serif; padding: 20px; }
                            h2 { text-align: center; }
                            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                            th, td { border: 1px solid #ccc; padding: 4px; text-align: center; font-size: 12px; }
                            th { background-color: #f5f5f5; }
                        </style>
                    </head>
                    <body>${html}</body>
                </html>
            `);
            janela.document.close();
            janela.print();
        }
    };

    async function buscarMedidas() {
        try {
            await buscar('/medidas', setMedidas, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        buscarMedidas();
    }, []);

    const medidasFiltradas = medidas.filter((item) =>
        item.nome?.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div className='container mx-auto px-6 py-3'>
            <div className='flex flex-col justify-around md:flex-row md:justify-between print:hidden'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-light tracking-tight mb-1'>Painel Administrativo</h1>
                    <h3 className='text-zinc-400'>Visualize e gerencie as medidas corporais dos usuários</h3>
                </div>

                <div className='flex flex-row items-center font-medium gap-4'>
                    {/* Botão Exportar todos */}
                    <button
                        className='flex items-center gap-1 bg-white hover:scale-102 hover:bg-zinc-50 border border-zinc-300 px-3 py-2 rounded-md'
                        onClick={handleExport}>
                        <DownloadSimple size={18} />
                        Exportar
                    </button>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4'>
                <div className='pt-4 min-w-80 print:hidden'>
                    {/* Lista filtrada de usuários */}
                    <ListUsuario
                        usuarios={medidasFiltradas}
                        onSelecionarUsuario={setUsuarioSelecionado}
                        atualizarUsuarios={buscarMedidas}
                    />
                </div>

                <div className='pt-4 w-full'>
                    <ViewUsuario
                        usuario={usuarioSelecionado}
                        setUsuario={setUsuarioSelecionado}
                        atualizarListaUsuarios={buscarMedidas}
                    />
                </div>
            </div>
        </div>
    );
}

export default Admin;
