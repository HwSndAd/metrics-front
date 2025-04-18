import { useState, useEffect } from 'react';
import { atualizar } from '../../service/service'; // Importe a função de atualização
import {
    Tab as HeadlessTab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels
} from "@headlessui/react";
import CardMedida from "../cardMedida/CardMedida";
import { DownloadSimple, NotePencil } from "@phosphor-icons/react";
import Medidas from "../../models/Medidas";
import { useNavigate } from 'react-router-dom';

const abas = ['Comprimento Parte Superior', 'Diametro Parte Superior',
    'Comprimento Parte Inferior', 'Diametro Parte Inferior'];

interface ViewUsuarioProps {
    usuario: Medidas | null;
    setUsuario: React.Dispatch<React.SetStateAction<Medidas | null>>; // Função para atualizar o estado do usuário
    atualizarListaUsuarios: () => void; // Função para atualizar/recarregar a lista de usuários
}

function ViewUsuario({ usuario, setUsuario, atualizarListaUsuarios }: ViewUsuarioProps) {
    if (!usuario) {
        return <div className="bg-white p-4 rounded shadow">Selecione um usuário para visualizar os dados.</div>;
    }

    const token = usuario.token;

    const [usuarioStatus, setUsuarioStatus] = useState(usuario.status);

    // UseEffect para atualizar o estado quando o usuario muda
    useEffect(() => {
        if (usuario) {
            setUsuarioStatus(usuario.status); // Atualiza o status quando o usuário mudar
        }
    }, [usuario]);

    const bgColor = usuarioStatus === 'Concluído' ? 'bg-green-100' : 'bg-yellow-100';

    const handleStatusChange = async () => {
        const novoStatus = 'Concluído';

        try {
            // Atualizando o status localmente
            setUsuarioStatus(novoStatus);

            // Criando um novo objeto com o status atualizado
            const usuarioAlterado = { ...usuario, status: novoStatus };

            // Enviando a requisição PUT com o objeto atualizado
            await atualizar(`/medidas`, usuarioAlterado, setUsuario, { headers: { Authorization: token } });

            // Atualizando o estado global com os dados atualizados do usuário
            setUsuario(usuarioAlterado);

            // Recarregando a lista de usuários após a alteração do status
            atualizarListaUsuarios(); // Função que recarrega a lista de usuários

        } catch (error) {
            console.error('Erro ao atualizar status:', error);
        }
    };

    const navigate = useNavigate();

    return (
        <div className="w-full max-w-5xl bg-white py-4 border border-zinc-200 rounded-lg shadow-sm">
            <div className='flex justify-end px-4'>
                {/*Botão de Editar*/}
                <button onClick={() => navigate('/editar-usuario', { state: { usuario } })}>
                    <NotePencil size={16} />
                </button>
            </div>
            <div className="flex justify-between border-b border-zinc-300 px-4 pb-4">
                <div>
                    <h1 className="text-2xl font-semibold text-zinc-800">{usuario.nome}</h1>
                    <h1 className="text-md text-zinc-800">{usuario.escola}</h1>
                </div>
                <div className='flex justify-items-end items-end'>
                    <p
                        className={`border border-zinc-700 px-1.5 font-bold text-sm py-0.5 ${bgColor} rounded-full`}
                        onClick={handleStatusChange} // Alterar o status ao clicar
                    >
                        {usuarioStatus}
                    </p>
                </div>
            </div>

            <TabGroup className={`px-4`}>
                <TabList className="flex flex-col w-full md:flex-row md:w-fit gap-1 px-2 py-2 mt-4 rounded-md bg-zinc-100">
                    {abas.map((tab) => (
                        <HeadlessTab
                            key={tab}
                            className={({ selected }) =>
                                `px-4 py-2 text-sm font-medium rounded-md transition
                                ${selected ? 'bg-white text-black shadow-sm' : 'text-gray-600'}`
                            }
                        >
                            {tab}
                        </HeadlessTab>
                    ))}
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 px-2">
                            <CardMedida titulo="Manequim" valor={`${usuario.manequim ?? 'N/A'}cm`} />
                            <CardMedida titulo="Busto Frente" valor={`${usuario.compBustoFrente ?? 'N/A'} cm`} />
                            <CardMedida titulo="Ombro" valor={`${usuario.compOmbro ?? 'N/A'} cm`} />
                            <CardMedida titulo="Altura Tronco" valor={`${usuario.compAlturaTronco ?? 'N/A'} cm`} />
                            <CardMedida titulo="Braço" valor={`${usuario.compBraco ?? 'N/A'} cm`} />
                            <CardMedida titulo="Comprimento Busto" valor={`${usuario.compBusto ?? 'N/A'} cm`} />
                        </div>
                    </TabPanel>

                    <TabPanel>
                        {/* Parte Superior Circunferencia */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 px-2">
                            <CardMedida titulo="Circunferencia Busto" valor={`${usuario.circBusto ?? 'N/A'}cm`} />
                            <CardMedida titulo="Circunferencia Cava" valor={`${usuario.circCava ?? 'N/A'} cm`} />
                            <CardMedida titulo="Circunferencia Biceps" valor={`${usuario.circBiceps ?? 'N/A'} cm`} />
                            <CardMedida titulo="Circunferencia Punho Fechado" valor={`${usuario.circPunhoFechado ?? 'N/A'} cm`} />
                            <CardMedida titulo="Circunferencia Punho Aberto" valor={`${usuario.circPunhoAbertura ?? 'N/A'} cm`} />
                            <CardMedida titulo="Circunferencia Pescoço" valor={`${usuario.circPescoco ?? 'N/A'} cm`} />
                            <CardMedida titulo="Circunferencia Cintura" valor={`${usuario.circCintura ?? 'N/A'} cm`} />
                            <CardMedida titulo="Circunferencia Cintura Média" valor={`${usuario.circCinturaBaixa ?? 'N/A'} cm`} />
                            <CardMedida titulo="Circunferencia Cintura Baixa" valor={`${usuario.circCinturaMedia ?? 'N/A'} cm`} />

                        </div>
                    </TabPanel>

                    <TabPanel>
                        {/* Parte Comprimento Inferior */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 px-2">
                            <CardMedida titulo="Comprimento Meio da Coxa" valor={`${usuario.compMeioCoxa ?? 'N/A'}cm`} />
                            <CardMedida titulo="Comprimento até Joelho" valor={`${usuario.compJoelho ?? 'N/A'} cm`} />
                            <CardMedida titulo="Comprimento até Puntirrilha" valor={`${usuario.compPanturrilha ?? 'N/A'} cm`} />
                            <CardMedida titulo="Comprimento Perna" valor={`${usuario.compTotalPerna ?? 'N/A'} cm`} />
                        </div>
                    </TabPanel>

                    <TabPanel>
                        {/* Parte Comprimento Inferior */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 px-2">
                            <CardMedida titulo="Circunferencia Coxa" valor={`${usuario.circCoxa ?? 'N/A'}cm`} />
                            <CardMedida titulo="Circunferencia Joelho" valor={`${usuario.circJoelho ?? 'N/A'} cm`} />
                            <CardMedida titulo="Circunferencia Puntirrilha" valor={`${usuario.circPanturrilha ?? 'N/A'} cm`} />
                            <CardMedida titulo="Circunferencia Tornozelo" valor={`${usuario.circTornozelo ?? 'N/A'} cm`} />
                            <CardMedida titulo="Circunferencia Cava" valor={`${usuario.circCava ?? 'N/A'} cm`} />
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>

            <div className="flex justify-end pt-4 w-full mt-4 px-4 border-t border-zinc-300">
                <button className="flex items-center gap-1 bg-white hover:bg-zinc-50 
                    hover:scale-101 border border-zinc-300 px-3 py-1.5 rounded-md">
                    <DownloadSimple size={18} />
                    Exportar
                </button>
            </div>
        </div>
    );
}

export default ViewUsuario;
