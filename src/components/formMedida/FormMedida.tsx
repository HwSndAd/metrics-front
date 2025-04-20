import Input from '../../components/input/Input'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Mannequim from '../../assets/img/Mannequim.png'
import { CaretDown } from '@phosphor-icons/react'
import { useState } from 'react';
import Medidas from '../../models/Medidas';

interface FormMedidasProps {
    dados: Medidas;
    setDados: React.Dispatch<React.SetStateAction<Medidas>>;
}

function FormMedida({ dados, setDados }: FormMedidasProps) {
    const [mostrarComentario, setMostrarComentario] = useState(false);

    // Função para atualizar os dados com base no campo
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, campo: keyof Medidas) => {
        setDados({
            ...dados,
            [campo]: e.target.value,
        });
    };

    return (
        <>
            <div className="mb-10 flex flex-col justify-center items-center gap-3 md:flex-row">
                <div>
                    <h3 className="font-medium">Nome</h3>
                    <input
                        className="border bg-white font-light tracking-tighter border-gray-400 p-1 rounded-lg text-md"
                        type="text"
                        placeholder="Seu nome Completo"
                        value={dados.nome} // Vincula o valor do input ao estado
                        onChange={(e) => handleInputChange(e, "nome")} // Atualiza o estado
                    />
                </div>

                <div>
                    <h3 className="font-medium">Manequim</h3>
                    <input
                        className="border bg-white font-light tracking-tighter border-gray-400 p-1 rounded-lg text-md"
                        type="text"
                        placeholder="Ex: 42, M, G..."
                        value={dados.manequim} // Vincula o valor do input ao estado
                        onChange={(e) => handleInputChange(e, "manequim")} // Atualiza o estado
                    />
                </div>
                <div>
                    <h3 className="font-medium">Altura</h3>
                    <input
                        className="border bg-white font-light tracking-tighter border-gray-400 p-1 rounded-lg text-md"
                        type="number"
                        placeholder="1.65"
                        value={dados.altura} // Vincula o valor do input ao estado
                        onChange={(e) => handleInputChange(e, "altura")} // Atualiza o estado
                    />
                </div>

                <div>
                    <h3 className="font-medium">Instituição</h3>
                    <input
                        className="border bg-white font-light tracking-tighter border-gray-400 p-1 rounded-lg text-md"
                        type="text"
                        placeholder="Nome da escola"
                        value={dados.escola} // Vincula o valor do input ao estado
                        onChange={(e) => handleInputChange(e, "escola")} // Atualiza o estado
                    />
                </div>
            </div>

            <div className='bg-gray-50 border border-zinc-300 shadow rounded-xl overflow-hidden'>
                <TabGroup >
                    <TabList className="flex justify-center mb-6 pt-6">
                        {['Comprimento Parte Superior', 'Diametro Parte Superior',
                            'Comprimento Parte Inferior', 'Diametro Parte Inferior'].map((tab) => (
                                <Tab
                                    key={tab}
                                    className={({ selected }) =>
                                        `px-4 py-2 text-sm font-medium cursor-pointer ${selected ? 'bg-white text-black' : 'bg-gray-100 text-gray-800'}`
                                    }
                                >
                                    {tab}
                                </Tab>
                            ))}
                    </TabList>

                    <TabPanels className={'pb-4'}>
                        {/*Comprimento Superior*/}
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-6 bg-gray-50 p-6">
                                <div className="space-y-4">
                                    <Input
                                        label="Busto Frente"
                                        name="compBustoFrente"
                                        value={dados.compBustoFrente} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compBustoFrente")} // Atualizando o estado
                                    />

                                    <Input
                                        label="Ombro"
                                        name="compOmbro"
                                        value={dados.compOmbro} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compOmbro")} // Atualizando o estado
                                    />

                                    <Input
                                        label="Comprimento do Tronco"
                                        name="compAlturaTronco"
                                        value={dados.compAlturaTronco} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compAlturaTronco")} // Atualizando o estado
                                    />
                                </div>

                                <div className="flex justify-center items-center">
                                    <div className="w-full min-h-80 border rounded-lg flex items-center justify-center text-gray-400">
                                        <img src={Mannequim} alt="Mannequim" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Input
                                        label="Comprimento do Busto"
                                        name="compBusto"
                                        value={dados.compBusto} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compBusto")} // Atualizando o estado
                                    />

                                    <Input
                                        label="Comprimento do Braço"
                                        name="compBraco"
                                        value={dados.compBraco} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compBraco")} // Atualizando o estado
                                    />
                                </div>
                            </div>

                        </TabPanel>
                        {/*Circunferencia Superior*/}
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-6 bg-gray-50 p-6">
                                <div className="space-y-4">
                                    <Input
                                        label="Circunferencia do Pescoço"
                                        name="circPescoco"
                                        value={dados.circPescoco} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circPescoco")} // Atualizando o estado
                                    />

                                    <Input
                                        label="Circunferencia Busto"
                                        name="circBusto"
                                        value={dados.circBusto} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circBusto")} // Atualizando o estado
                                    />

                                    <Input
                                        label="Circunferencia Cintura"
                                        name="circCintura"
                                        value={dados.circCintura} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circCintura")} // Atualizando o estado
                                    />

                                    <Input
                                        label="Circunferencia da Cava"
                                        name="circCava"
                                        value={dados.circCava} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circCava")} // Atualizando o estado
                                    />

                                    <Input
                                        label="Circunferencia Biceps"
                                        name="circBiceps"
                                        value={dados.circBiceps} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circBiceps")} // Atualizando o estado
                                    />
                                </div>

                                <div className="flex justify-center items-center">
                                    <div className="w-full min-h-80 h-full border rounded-lg flex items-center justify-center text-gray-400">
                                        Foto
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Input
                                        label="Circunferencia Punho Fechado"
                                        name="circPunhoFechado"
                                        value={dados.circPunhoFechado} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circPunhoFechado")} // Atualizando o estado
                                    />

                                    <Input
                                        label="Circunferencia com Punho Abertura"
                                        name="circPunhoAberto"
                                        value={dados.circPunhoAbertura} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circPunhoAbertura")} // Atualizando o estado
                                    />

                                    <Input
                                        label="Circunferencia cintura Média"
                                        name="circCinturaMedia"
                                        value={dados.circCinturaMedia} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circCinturaMedia")} // Atualizando o estado
                                    />

                                    <Input
                                        label="Circunferencia cintura Baixa"
                                        name="circCinturaBaixa"
                                        value={dados.circCinturaBaixa} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circCinturaBaixa")} // Atualizando o estado
                                    />
                                </div>
                            </div>

                        </TabPanel>
                        {/*Comprimento Inferior*/}
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-6 bg-gray-50 p-6 ">
                                <div className="space-y-4">
                                    <Input
                                        label="Altura até Meio da Coxa"
                                        name="compMeioCoxa"
                                        value={dados.compMeioCoxa} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compMeioCoxa")} // Atualizando o estado
                                    />

                                    <Input
                                        label="Altura até Joelho"
                                        name="compJoelho"
                                        value={dados.compJoelho} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compJoelho")} // Atualizando o estado
                                    />
                                </div>

                                <div className="flex justify-center items-center">
                                    <div className="w-full min-h-80 border rounded-lg flex items-center justify-center text-gray-400">
                                        <img src={Mannequim} alt="Mannequim" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Input
                                        label="Altura até Panturrilha"
                                        name="compPanturrilha"
                                        value={dados.compPanturrilha} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compPanturrilha")} // Atualizando o estado
                                    />
                                    <Input
                                        label="Altura Total Perna"
                                        name="compTotalPerna"
                                        value={dados.compTotalPerna} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compTotalPerna")} // Atualizando o estado
                                    />
                                </div>
                            </div>

                        </TabPanel>
                        {/*Circunferencia Inferior*/}
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-6 bg-gray-50 p-6 ">
                                <div className="space-y-4">
                                    <Input
                                        label="Circunferencia Coxa"
                                        name="circCoxa"
                                        value={dados.circCoxa} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circCoxa")} // Atualizando o estado
                                    />

                                    <Input
                                        label="Circunferencia Joelho"
                                        name="circJoelho"
                                        value={dados.circJoelho} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circJoelho")} // Atualizando o estado
                                    />
                                    <Input
                                        label="Circunferencia Panturrilha"
                                        name="circPanturrilha"
                                        value={dados.circPanturrilha} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circPanturrilha")} // Atualizando o estado
                                    />
                                </div>

                                <div className="flex justify-center items-center">
                                    <div className="w-full min-h-80 border rounded-lg flex items-center justify-center text-gray-400">
                                        <img src={Mannequim} alt="Mannequim" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Input
                                        label="Circunferencia Quadril"
                                        name="circQuadril"
                                        value={dados.circQuadril} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circQuadril")} // Atualizando o estado
                                    />
                                    <Input
                                        label="Circunferencia Tornozelo"
                                        name="circTornozelo"
                                        value={dados.circTornozelo} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circTornozelo")} // Atualizando o estado
                                    />
                                    <Input
                                        label="Gancho"
                                        name="gancho"
                                        value={dados.gancho} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "gancho")} // Atualizando o estado
                                    />
                                </div>
                            </div>

                        </TabPanel>
                    </TabPanels>
                </TabGroup>


                <div className='p-2 border-t border-zinc-400'>
                    <div
                        className='flex justify-between items-center mx-4 cursor-pointer select-none'
                        onClick={() => setMostrarComentario(!mostrarComentario)}
                    >
                        <p className='font-medium'>Comentário</p>
                        <CaretDown
                            size={28}
                            className={`transition-transform duration-300 ${mostrarComentario ? 'rotate-180' : ''}`}
                        />
                    </div>

                    <div
                        className={`mx-4 mt-1 overflow-hidden transition-all duration-500 ease-in-out ${mostrarComentario ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <input
                            type="text"
                            name="comentario"
                            id="comentario"
                            value={dados.comentario}
                            onChange={(e) => handleInputChange(e, "comentario")} // Atualizando o estado
                            className='bg-white border border-zinc-600 rounded-sm w-full h-24 my-1'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormMedida