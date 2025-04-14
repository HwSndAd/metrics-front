import Input from '../../components/input/Input'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Mannequim from '../../assets/img/Mannequim.png'

function FormMedida() {
    return (
        <>
            <div className='mb-10  flex flex-col justify-center items-center gap-3 md:flex-row'>
                <div>
                    <h3 className='font-medium'>Nome</h3>
                    <input className='border bg-white font-light light tracking-tighter border-gray-400 p-1 rounded-lg text-md'
                        type="text" placeholder='Seu nome Completo' />
                </div>

                <div>
                    <h3 className='font-medium'>Manequim</h3>
                    <input className='border bg-white font-light tracking-tighter border-gray-400 p-1 rounded-lg text-md'
                        type="text" placeholder='Ex: 42, M, G...' />
                </div>

                <div>
                    <h3 className='font-medium'>Instituição</h3>
                    <input className='border bg-white font-light tracking-tighter border-gray-400 p-1 rounded-lg text-md'
                        type="text" placeholder='Nome da escola' />
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
                            <div className="grid grid-cols-3 gap-6 bg-gray-50 p-6 ">

                                <div className="space-y-4">
                                    <Input
                                        label="Busto Frente"
                                        name="compBustoF"
                                        value="42"
                                        unit="cm"
                                    />

                                    <Input
                                        label="Ombro"
                                        name="compOmbro"
                                        value="42"
                                        unit="cm"
                                    />
                                    <Input
                                        label="Comprimento do Tronco"
                                        name="compTronco"
                                        value="42"
                                        unit="cm"
                                    />
                                </div>

                                <div className="flex justify-center items-center">
                                    <div className="w-full min-h-80 border rounded-lg flex items-center justify-center text-gray-400">
                                        <img src={Mannequim} alt="Mannequim" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Input
                                        label="Comprimeto do Busto"
                                        name="compBusto"
                                        value="42"
                                        unit="cm"
                                    />
                                    <Input
                                        label="Comprimento do Braço"
                                        name="compBraco"
                                        value="42"
                                        unit="cm"
                                    />

                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="grid grid-cols-3 gap-6 bg-gray-50 p-6 ">

                                <div className="space-y-4">

                                    <Input
                                        label="Circunferencia do Pescoço"
                                        name="circPescoco"
                                        value="42"
                                        unit="cm"
                                    />
                                    <Input
                                        label="Circunferencia Busto"
                                        name="circBusto"
                                        value="42"
                                        unit="cm"
                                    />

                                    <Input
                                        label="Circunferencia Cintura"
                                        name="circCintura"
                                        value="42"
                                        unit="cm"
                                    />
                                    <Input
                                        label="Circunferencia da Cava"
                                        name="circCava"
                                        value="42"
                                        unit="cm"
                                    />

                                    <Input
                                        label="Circunferencia Biceps"
                                        name="circBiceps"
                                        value="42"
                                        unit="cm"
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
                                        value="42"
                                        unit="cm"
                                    />
                                    <Input
                                        label="Circunferencia com Punho Abertura"
                                        name="circPunhoAberto"
                                        value="42"
                                        unit="cm"
                                    />

                                    <Input
                                        label="Circunferencia cintura Média"
                                        name="circCinturaMed"
                                        value="42"
                                        unit="cm"
                                    />

                                    <Input
                                        label="Circunferencia cintura Baixa"
                                        name="circCinturaBaixa"
                                        value="42"
                                        unit="cm"
                                    />
                                </div>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </>
    )
}

export default FormMedida