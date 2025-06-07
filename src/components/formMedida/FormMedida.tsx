import Input from '../../components/input/Input'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Mannequim from '../../assets/img/Mannequim.png'
import { CaretDown } from '@phosphor-icons/react'
import { useState } from 'react';
import Medidas from '../../models/Medidas';

import Superior from '../../assets/img/Superior.png'
import InferiorComp from '../../assets/img/Inferior_Comprimento.png'
import InferiorCirc from '../../assets/img/Inferior_Circ.png'

const abas = ['Diametro Parte Superior', 'Comprimento Parte Superior',
    'Comprimento Parte Inferior', 'Diametro Parte Inferior'];

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

                <div>
                    <h3 className="font-medium">Evento</h3>
                    <input
                        className="border bg-white font-light tracking-tighter border-gray-400 p-1 rounded-lg text-md"
                        type="text"
                        placeholder="Nome do evento"
                        value={dados.evento} // Vincula o valor do input ao estado
                        onChange={(e) => handleInputChange(e, "evento")} // Atualiza o estado
                    />
                </div>
            </div>

            <div className='bg-gray-50 border border-zinc-300 shadow rounded-xl overflow-hidden'>
                <TabGroup >
                    <TabList className="flex flex-col md:flex-row justify-center mb-6  py-1 rounded-md bg-neutral-900">
                        {abas.map((tab) => (
                            <Tab
                                key={tab}
                                className={({ selected }) =>
                                    `px-4 py-2 text-sm font-medium rounded-sm bg-neutral-900 cursor-pointer ${selected ? 'bg-white text-black' : ' text-white'}`
                                }
                            >
                                {tab}
                            </Tab>
                        ))}
                    </TabList>

                    <TabPanels className={'pb-4'}>

                        {/*Circunferencia Superior*/}
                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-6 bg-gray-50 p-6">
                                {/*Tela Pequena*/}
                                <div className='block md:hidden'>
                                    <div className="flex justify-center items-center">
                                        <div className="w-full max-h-auto overflow-hidden border rounded-lg flex items-center justify-center text-gray-400">
                                            <img src={Superior} alt="Mannequim" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Input
                                        label="Circunferencia do Pescoço"
                                        regiao='circPescoco'
                                        name="circPescoco"
                                        value={dados.circPescoco} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circPescoco")} // Atualizando o estado
                                        instrucao='Meça ao redor da base do pescoço, onde se encaixa a gola da camisa. 
                                        A fita deve ficar justa, mas confortável, sem afundar na pele.'
                                    />

                                    <Input
                                        label="Circunferencia Busto"
                                        name="circBusto"
                                        regiao='circBusto'
                                        value={dados.circBusto} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circBusto")} // Atualizando o estado
                                        instrucao='Meça ao redor da parte mais cheia do busto/peito, passando a fita 
                                        pelas costas (linha do sutiã ou mamilo), mantendo-a reta e nivelada.'
                                    />

                                    <Input
                                        label="Circunferencia Cintura"
                                        regiao='circCintura'
                                        name="circCintura"
                                        value={dados.circCintura} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circCintura")} // Atualizando o estado
                                        instrucao='Meça ao redor da menor parte da cintura, geralmente 2 a 3 cm acima do umbigo. 
                                        A fita deve estar ajustada, mas não apertada.'
                                    />

                                    <Input
                                        label="Circunferencia da Cava"
                                        regiao='cava'
                                        name="circCava"
                                        value={dados.circCava} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circCava")} // Atualizando o estado
                                        instrucao='Com o braço ligeiramente levantado, meça ao redor da articulação do ombro, 
                                        contornando a axila, como se a fita fosse a borda de uma manga.'
                                    />

                                    <Input
                                        label="Circunferencia Biceps"
                                        name="circBiceps"
                                        regiao='circBiceps'
                                        value={dados.circBiceps} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circBiceps")} // Atualizando o estado
                                        instrucao='Com o braço relaxado ao lado do corpo (ou levemente flexionado, se preferir), 
                                        meça ao redor da parte mais larga do braço superior, entre ombro e cotovelo.'
                                    />
                                </div>

                                {/*Tela Media*/}
                                <div className='hidden md:block'>
                                    <div className="flex justify-center items-center">
                                        <div className="w-full min-h-80 border rounded-lg overflow-hidden flex items-center justify-center text-gray-400">
                                            <img src={Superior} alt="Mannequim" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Input
                                        label="Circunferencia Punho Fechado"
                                        name="circPunhoFechado"
                                        regiao='punhoFechado'
                                        value={dados.circPunhoFechado} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circPunhoFechado")} // Atualizando o estado
                                        instrucao='Com a mão fechada, meça ao redor da base do punho (acima da mão), 
                                        incluindo a mão levemente para simular a passagem da manga por ela.'
                                    />

                                    <Input
                                        label="Circunferencia com Punho Abertura"
                                        name="circPunhoAberto"
                                        regiao='circPunho'
                                        value={dados.circPunhoAbertura} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circPunhoAbertura")} // Atualizando o estado
                                        instrucao='Com a mão relaxada e aberta, meça apenas ao redor do osso do punho. 
                                        Essa medida é usada para ajustes justos, como punhos de camisas.'
                                    />

                                    <Input
                                        label="Circunferencia cintura Média"
                                        name="circCinturaMedia"
                                        regiao='x'
                                        value={dados.circCinturaMedia} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circCinturaMedia")} // Atualizando o estado
                                        instrucao='Meça ao redor da linha do umbigo, normalmente 2–3 cm abaixo da cintura natural. 
                                        Útil para peças de cintura média (como jeans ou bermudas).'
                                    />

                                    <Input
                                        label="Circunferencia cintura Baixa"
                                        name="circCinturaBaixa"
                                        regiao='x'
                                        value={dados.circCinturaBaixa} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circCinturaBaixa")} // Atualizando o estado
                                        instrucao='Meça cerca de 7 a 10 cm abaixo da cintura natural, onde normalmente se apoia uma 
                                        calça de cintura baixa, passando pela parte mais saliente do quadril.'
                                    />
                                </div>
                            </div>

                        </TabPanel>

                        {/*Comprimento Superior*/}
                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-6 bg-gray-50 p-6">
                                {/*Tela Pequena*/}
                                <div className='block md:hidden'>
                                    <div className="flex justify-center items-center">
                                        <div className="w-full max-h-auto overflow-hidden border rounded-lg flex items-center justify-center text-gray-400">
                                            <img src={Superior} alt="Mannequim" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Input
                                        label="Busto Frente"
                                        name="compBustoFrente"
                                        regiao='frenteBusto'
                                        value={dados.compBustoFrente} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compBustoFrente")} // Atualizando o estado
                                        instrucao='Meça em linha reta da lateral de uma axila até a lateral da outra, passando pelo centro do busto (peito).'
                                    />

                                    <Input
                                        label="Ombro"
                                        name="compOmbro"
                                        regiao='ombro'
                                        value={dados.compOmbro} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compOmbro")} // Atualizando o estado
                                        instrucao='Meça da base do pescoço até a ponta do ombro (onde o braço começa).'
                                    />

                                    <Input
                                        label="Comprimento do Tronco"
                                        name="compAlturaTronco"
                                        regiao='altTronco'
                                        value={dados.compAlturaTronco} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compAlturaTronco")} // Atualizando o estado
                                        instrucao='Meça do ombro (ponto mais alto) até a linha da cintura, passando pelo meio do peito.'
                                    />
                                </div>

                                {/*Tela Media*/}
                                <div className='hidden md:block'>
                                    <div className="flex justify-center items-center">
                                        <div className="w-full min-h-80 border overflow-hidden rounded-lg flex items-center justify-center text-gray-400">
                                            <img src={Superior} alt="Mannequim" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Input
                                        label="Comprimento do Busto"
                                        name="compBusto"
                                        regiao='altBusto'
                                        value={dados.compBusto} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compBusto")} // Atualizando o estado
                                        instrucao='Meça do ombro (ponto mais alto) até a parte mais saliente do busto (geralmente o mamilo).'
                                    />

                                    <Input
                                        label="Comprimento do Braço"
                                        name="compBraco"
                                        regiao='compBraco'
                                        value={dados.compBraco} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compBraco")} // Atualizando o estado
                                        instrucao='Meça do ombro até o osso do pulso, com o braço levemente dobrado.'
                                    />
                                </div>
                            </div>

                        </TabPanel>

                        {/*Comprimento Inferior*/}
                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-6 bg-gray-50 p-6 ">
                                {/*Tela Pequena*/}
                                <div className='block md:hidden'>
                                    <div className="flex justify-center items-center">
                                        <div className="w-full max-h-auto  border rounded-lg overflow-hidden flex items-center justify-center text-gray-400">
                                            <img src={InferiorComp} alt="Mannequim" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Input
                                        label="Altura até Meio da Coxa"
                                        name="compMeioCoxa"
                                        regiao='meioCoxa'
                                        value={dados.compMeioCoxa} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compMeioCoxa")} // Atualizando o estado
                                        instrucao='Meça do ponto mais alto do quadril (cintura natural) até o meio da coxa, 
                                        aproximadamente onde a mão repousa quando você está em pé com o braço estendido ao lado do corpo.'
                                    />

                                    <Input
                                        label="Altura até Joelho"
                                        name="compJoelho"
                                        regiao='compJoelho'
                                        value={dados.compJoelho} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compJoelho")} // Atualizando o estado
                                        instrucao='Meça da cintura natural até o centro da patela (joelho), mantendo a fita reta ao longo da lateral da perna.'
                                    />
                                </div>

                                {/*Tela Media*/}
                                <div className='hidden md:block'>
                                    <div className="flex justify-center items-center">
                                        <div className="w-full min-h-80 border rounded-lg overflow-hidden flex items-center justify-center text-gray-400">
                                            <img src={InferiorComp} alt="Mannequim" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Input
                                        label="Altura até Panturrilha"
                                        name="compPanturrilha"
                                        regiao='panturrilha'
                                        value={dados.compPanturrilha} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compPanturrilha")} // Atualizando o estado
                                        instrucao='Meça da cintura natural até a parte mais larga da panturrilha, que fica entre o 
                                        joelho e o tornozelo. A fita deve seguir a lateral externa da perna'
                                    />
                                    <Input
                                        label="Altura Total Perna"
                                        name="compTotalPerna"
                                        regiao='tornozelo'
                                        value={dados.compTotalPerna} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "compTotalPerna")} // Atualizando o estado
                                        instrucao='Meça da cintura natural até o chão, passando pela lateral externa da perna, com 
                                        você em pé e descalço. Essa é a medida usada para calças compridas.'
                                    />
                                </div>
                            </div>

                        </TabPanel>
                        {/*Circunferencia Inferior*/}
                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-6 bg-gray-50 p-6 ">
                                {/*Tela Pequena*/}
                                <div className='block md:hidden'>
                                    <div className="flex justify-center items-center">
                                        <div className="w-full max-h-auto  border rounded-lg overflow-hidden flex items-center justify-center text-gray-400">
                                            <img src={InferiorCirc} alt="Mannequim" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Input
                                        label="Circunferencia Coxa"
                                        name="circCoxa"
                                        regiao='circCoxa'
                                        value={dados.circCoxa} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circCoxa")} // Atualizando o estado
                                        instrucao='Meça ao redor da parte mais larga da coxa, geralmente 3 a 5 cm abaixo da virilha. 
                                        Mantenha a fita nivelada e confortável ao redor da perna.'
                                    />

                                    <Input
                                        label="Circunferencia Joelho"
                                        name="circJoelho"
                                        regiao='circJoelho'
                                        value={dados.circJoelho} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circJoelho")} // Atualizando o estado
                                        instrucao='Meça ao redor da articulação do joelho, com a perna levemente dobrada (15° a 20°). 
                                        A fita deve passar pelo centro da patela.'
                                    />
                                    <Input
                                        label="Circunferencia Panturrilha"
                                        name="circPanturrilha"
                                        regiao='circPanturrilha'
                                        value={dados.circPanturrilha} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circPanturrilha")} // Atualizando o estado
                                        instrucao='Meça a parte mais larga da panturrilha, geralmente localizada entre 10 a 15 cm abaixo do joelho. 
                                        A fita deve estar nivelada e ajustada, sem apertar.'
                                    />
                                </div>

                                {/*Tela Media*/}
                                <div className='hidden md:block'>
                                    <div className="flex justify-center items-center">
                                        <div className="w-full min-h-80 border overflow-hidden rounded-lg flex items-center justify-center text-gray-400">
                                            <img src={InferiorCirc} alt="Mannequim" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Input
                                        label="Circunferencia Quadril"
                                        name="circQuadril"
                                        regiao='circQuadril'
                                        value={dados.circQuadril} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circQuadril")} // Atualizando o estado
                                        instrucao='Meça ao redor da parte mais saliente do bumbum, geralmente 18 a 22 cm abaixo da cintura natural. 
                                        Mantenha a fita paralela ao chão.'
                                    />
                                    <Input
                                        label="Circunferencia Tornozelo"
                                        name="circTornozelo"
                                        regiao='circTornozelo'
                                        value={dados.circTornozelo} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "circTornozelo")} // Atualizando o estado
                                        instrucao='Meça ao redor da base da perna, logo acima do osso do tornozelo.'
                                    />
                                    <Input
                                        label="Gancho"
                                        name="gancho"
                                        regiao='gancho'
                                        value={dados.gancho} // Vinculando ao estado
                                        unit="cm"
                                        onChange={(e) => handleInputChange(e, "gancho")} // Atualizando o estado
                                        instrucao='Sente-se em uma cadeira reta e firme. Meça do ponto da cintura natural (na frente), 
                                        passando entre as pernas, até o mesmo ponto da cintura nas costas.'
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