import { ArrowRight, Ruler } from "@phosphor-icons/react";
import FormMedida from "../../components/formMedida/FormMedida";

function Home() {
    return (
        <div className='max-w-5xl mx-auto pt-6'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-light mb-2'>Medidas Corporais</h1>
                <h2 className='text-xl font-light'>Insira suas medidas para o figurino perfeito!</h2>
            </div>

            <FormMedida />

            <div className='flex flex-col items-center justify-center pt-6'>
                <button className=' flex flex-row items-center gap-2 border py-2 px-6 
                    rounded-md text-white font-medium  bg-zinc-900 hover:scale-101'>
                    Enviar Medidas
                    <ArrowRight size={26}/>
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