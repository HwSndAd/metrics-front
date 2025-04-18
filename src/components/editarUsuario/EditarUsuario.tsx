import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Medidas from '../../models/Medidas';
import CardInputMedida from '../cardMedida/cardInputMedida';
import { ArrowRight } from '@phosphor-icons/react';
import { atualizar } from '../../service/service';
import { AuthContext } from '../../contexts/AuthContext';

function EditarUsuario() {
    const location = useLocation();
    const navigate = useNavigate();
    const { usuario } = location.state as { usuario: Medidas } ?? {};
    const { usuario: authUsuario } = useContext(AuthContext);  // Obtém o usuário do contexto
    const token = authUsuario.token;  // Agora, o token é acessado dentro de usuario

    const [form, setForm] = useState({
        id: usuario?.id ?? '',
        nome: usuario?.nome ?? '',
        escola: usuario?.escola ?? '',
        manequim: usuario?.manequim ?? '',
        compBustoFrente: usuario?.compBustoFrente ?? 0,
        compOmbro: usuario?.compOmbro ?? 0,
        compAlturaTronco: usuario?.compAlturaTronco ?? 0,
        compBraco: usuario?.compBraco ?? 0,
        compBusto: usuario?.compBusto ?? 0,
        circBusto: usuario?.circBusto ?? 0,
        circCava: usuario?.circCava ?? 0,
        circBiceps: usuario?.circBiceps ?? 0,
        circPunhoFechado: usuario?.circPunhoFechado ?? 0,
        circPunhoAbertura: usuario?.circPunhoAbertura ?? 0,
        circPescoco: usuario?.circPescoco ?? 0,
        circCintura: usuario?.circCintura ?? 0,
        compMeioCoxa: usuario?.compMeioCoxa ?? 0,
        compJoelho: usuario?.compJoelho ?? 0,
        compPanturrilha: usuario?.compPanturrilha ?? 0,
        compTotalPerna: usuario?.compTotalPerna ?? 0,
        circCoxa: usuario?.circCoxa ?? 0,
        circJoelho: usuario?.circJoelho ?? 0,
        circPanturrilha: usuario?.circPanturrilha ?? 0,
        circTornozelo: usuario?.circTornozelo ?? 0,
        gancho: usuario?.gancho ?? 0,
        comentario: usuario?.comentario ?? '',
        dataAtual: usuario?.dataAtual ?? '2025-04-04', // A data padrão ou undefined
        status: usuario?.status ?? 'Recebido', // A status padrão ou undefined
    });

    // Validação do token no useEffect
    useEffect(() => {
        if (!token) {
            alert('Você precisa estar logado!');
            navigate('/login');
        }
    }, [token, navigate]);  // Verifique sempre a mudança do token

    async function handleSubmit() {
        try {
            console.log("Dados que serão enviados:", form);
            console.log("Token:", token);  // Verifique se o token está sendo passado corretamente

            await atualizar(`/medidas`, form, setForm, {
                headers: {
                    Authorization: token,  // Agora usa o token do contexto
                },
            });

            alert('Dados atualizados com sucesso');
            navigate('/admin');
        } catch (error) {
            console.error('Erro ao atualizar:', error);
            alert('Erro ao enviar os dados');
        }
    }

    function parseInput(val: string): number {
        const num = parseFloat(val);
        return isNaN(num) ? 0 : num;
    }


    return (
        <div className="space-y-6 p-6">
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div className='bg-white px-6 border border-zinc-200 rounded-xl pb-6'>
                    <div className="py-4 mb-4 rounded-xl">
                        <h2 className="text-lg font-semibold mb-2">Nome</h2>
                        <input
                            type="text"
                            value={form.nome}
                            onChange={(e) => setForm({ ...form, nome: e.target.value })}
                            className="w-full bg-white border border-zinc-300 rounded-lg p-2"
                        />

                        <h2 className="text-lg font-semibold mt-4 mb-2">Escola</h2>
                        <input
                            type="text"
                            value={form.escola}
                            onChange={(e) => setForm({ ...form, escola: e.target.value })}
                            className="w-full border border-zinc-300 bg-white rounded-lg p-2"
                        />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Medidas Superiores</h2>
                        <div className="grid gap-4 grid-cols-2 items-center md:grid-cols-6">
                            <CardInputMedida titulo="Manequim" valor={form.manequim} onChange={val => setForm({ ...form, manequim: val })} />
                            <CardInputMedida titulo="Busto Frente" valor={form.compBustoFrente} onChange={val => setForm({ ...form, compBustoFrente: parseInput(val) })} />
                            <CardInputMedida titulo="Ombro" valor={form.compOmbro} onChange={val => setForm({ ...form, compOmbro: parseInput(val) })} />
                            <CardInputMedida titulo="Altura Tronco" valor={form.compAlturaTronco} onChange={val => setForm({ ...form, compAlturaTronco: parseInput(val) })} />
                            <CardInputMedida titulo="Braço" valor={form.compBraco} onChange={val => setForm({ ...form, compBraco: parseInput(val) })} />
                            <CardInputMedida titulo="Comprimento Busto" valor={form.compBusto} onChange={val => setForm({ ...form, compBusto: parseInput(val) })} />
                            <CardInputMedida titulo="Circunferência Busto" valor={form.circBusto} onChange={val => setForm({ ...form, circBusto: parseInput(val) })} />
                            <CardInputMedida titulo="Circunferência Cava" valor={form.circCava} onChange={val => setForm({ ...form, circCava: parseInput(val) })} />
                            <CardInputMedida titulo="Circunferência Bíceps" valor={form.circBiceps} onChange={val => setForm({ ...form, circBiceps: parseInput(val) })} />
                            <CardInputMedida titulo="Circunferência Punho Fechado" valor={form.circPunhoFechado} onChange={val => setForm({ ...form, circPunhoFechado: parseInput(val) })} />
                            <CardInputMedida titulo="Circunferência Punho Aberto" valor={form.circPunhoAbertura} onChange={val => setForm({ ...form, circPunhoAbertura: parseInput(val) })} />
                            <CardInputMedida titulo="Circunferência Pescoço" valor={form.circPescoco} onChange={val => setForm({ ...form, circPescoco: parseInput(val) })} />
                            <CardInputMedida titulo="Circunferência Cintura" valor={form.circCintura} onChange={val => setForm({ ...form, circCintura: parseInput(val) })} />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2 mt-8">Medidas Inferiores</h2>
                        <div className="grid gap-4 grid-cols-2 items-center md:grid-cols-6">
                            <CardInputMedida titulo="Comprimento Meio da Coxa" valor={form.compMeioCoxa} onChange={val => setForm({ ...form, compMeioCoxa: parseInput(val) })} />
                            <CardInputMedida titulo="Comprimento até Joelho" valor={form.compJoelho} onChange={val => setForm({ ...form, compJoelho: parseInput(val) })} />
                            <CardInputMedida titulo="Comprimento até Panturrilha" valor={form.compPanturrilha} onChange={val => setForm({ ...form, compPanturrilha: parseInput(val) })} />
                            <CardInputMedida titulo="Comprimento Perna" valor={form.compTotalPerna} onChange={val => setForm({ ...form, compTotalPerna: parseInput(val) })} />
                            <CardInputMedida titulo="Circunferência Coxa" valor={form.circCoxa} onChange={val => setForm({ ...form, circCoxa: parseInput(val) })} />
                            <CardInputMedida titulo="Circunferência Joelho" valor={form.circJoelho} onChange={val => setForm({ ...form, circJoelho: parseInput(val) })} />
                            <CardInputMedida titulo="Circunferência Panturrilha" valor={form.circPanturrilha} onChange={val => setForm({ ...form, circPanturrilha: parseInput(val) })} />
                            <CardInputMedida titulo="Circunferência Tornozelo" valor={form.circTornozelo} onChange={val => setForm({ ...form, circTornozelo: parseInput(val) })} />
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold mt-8 mb-2'>Comentario</p>
                        <input
                            type="text"
                            name="comentario"
                            id="comentario"
                            value={form.comentario}
                            onChange={(e) => setForm({ ...form, comentario: e.target.value })} // Atualizando o estado
                            className='border border-zinc-300 align-text-top rounded-xl p-4 bg-white shadow-sm w-full h-24'
                        />
                    </div>

                    <div className='flex justify-center items-center pt-6'>
                        <button
                            type="submit"
                            className='flex flex-row items-center gap-2 border py-2 px-6 
                                rounded-md text-white font-medium bg-zinc-900 hover:scale-105 transition'>
                            Atualizar Medidas
                            <ArrowRight size={26} />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditarUsuario;
