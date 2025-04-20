import { ArrowRight, Ruler } from "@phosphor-icons/react";
import FormMedida from "../../components/formMedida/FormMedida";
import { FormEvent, useState } from "react";
import Medidas from "../../models/Medidas";
import { cadastrar } from "../../service/service";
import CardDuvida from "../../components/cardDuvida/CardDuvida";

function Home() {

    const estadoInicial: Medidas = {
        nome: '',
        manequim: '',
        escola: '',
        dataAtual: '', // ou undefined
        status: 'Recebido', // ou undefined
        altura: 0, //adicionado

        compBustoFrente: 0,
        compOmbro: 0,
        compAlturaTronco: 0,
        compBraco: 0,
        compBusto: 0,

        circBusto: 0,
        circCintura: 0,
        circCava: 0,
        circBiceps: 0,
        circPunhoFechado: 0,
        circPunhoAbertura: 0,
        circPescoco: 0,
        circCinturaMedia: 0,
        circCinturaBaixa: 0,
        circQuadril: 0, //adicionado

        compMeioCoxa: 0,
        compJoelho: 0,
        compPanturrilha: 0,
        compTotalPerna: 0,

        circCoxa: 0,
        circJoelho: 0,
        circPanturrilha: 0,
        circTornozelo: 0,
        gancho: 0,

        comentario: '',
    };

    const [dados, setDados] = useState<Medidas>(estadoInicial);
    
    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {

        const dataAtual = new Date().toISOString().split('T')[0]; // Formato 'yyyy-mm-dd'
        const formDataComAtual ={
            ...dados,
            dataAtual,
        }

        try {
            console.log("Dados que serão enviados:", formDataComAtual);
            await cadastrar('/medidas', formDataComAtual, setDados);
            alert('Dados enviados com sucesso');

            // Resetando o formulário
            setDados(estadoInicial);
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar os dados');
        }
    }


    return (
        <div className='max-w-5xl mx-auto pt-6'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-light mb-2'>Medidas Corporais</h1>
                <h2 className='text-xl font-light'>Insira suas medidas para o figurino perfeito!</h2>
            </div>

            <FormMedida dados={dados} setDados={setDados} />

            <div className='flex flex-col items-center justify-center pt-6'>
                <button
                    onClick={handleSubmit}
                    className=' flex flex-row items-center gap-2 border py-2 px-6 
                    rounded-md text-white font-medium  bg-zinc-900 hover:scale-101'>
                    Enviar Medidas
                    <ArrowRight size={26} />
                </button>
                <div className='flex flex-row font-light gap-2 text-zinc-400 py-2'>
                    <Ruler size={18} />
                    <h3>Todas as medidas são enviadas em cm.</h3>
                </div>
            </div>
        </div>
    )
}

export default Home