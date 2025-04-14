import {
    Tab as HeadlessTab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels
} from "@headlessui/react"
import CardMedida from "../cardMedida/CardMedida"
import { DownloadSimple } from "@phosphor-icons/react"

const abas = ['Comprimento Parte Superior', 'Diametro Parte Superior',
    'Comprimento Parte Inferior', 'Diametro Parte Inferior']

function ViewUsuario() {
    return (
        <div className="w-full max-w-5xl  bg-white py-4 border border-zinc-200 rounded-lg shadow-sm">
            <div className="border-b border-zinc-300 px-4 pb-4">
                <h1 className="text-2xl font-semibold text-zinc-800">Emma Wilson</h1>
            </div>

            <TabGroup className={`px-4`}>
                <TabList className="flex flex-col w-full md:flex-row md:w-fit gap-1 px-2 py-2 mt-4 rounded-md bg-zinc-100 ">
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
                            <CardMedida titulo="Manequim" valor="38" />
                            <CardMedida titulo="Altura" valor="168 cm" />
                            <CardMedida titulo="Peso" valor="62 kg" />
                            <CardMedida titulo="Tórax" valor="92 cm" />
                            <CardMedida titulo="Cintura" valor="74 cm" />
                            <CardMedida titulo="Quadril" valor="92 cm" />
                            <CardMedida titulo="Largura dos Ombros" valor="42 cm" />
                        </div>
                    </TabPanel>

                    <TabPanel>
                        {/* Parte Superior */}
                    </TabPanel>

                    <TabPanel>
                        {/* Parte Inferior */}
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
    )
}

export default ViewUsuario
