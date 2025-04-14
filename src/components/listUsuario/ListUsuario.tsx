import { MagnifyingGlass } from "@phosphor-icons/react"
import CardUsuario from "./cardUsuario/CardUsuario"

function ListUsuario() {
    return (
        <div className="flex flex-col w-full">
            <div className="pt-4 px-4 pb-2 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <h1 className="text-lg font-medium mb-3">Usuários</h1>

                <div className="flex items-center gap-2 bg-white 
                    border border-zinc-300 rounded-md px-4 py-2 mb-4">
                    <MagnifyingGlass className="text-gray-500" size={20} />
                    <input
                        type="text"
                        placeholder="Buscar usuários..."
                        className="bg-transparent outline-none w-full text-md"
                    />
                </div>

                <div className="flex flex-col">
                    <CardUsuario nome="Emma Wilson" data="15/05/2023" />
                    <CardUsuario nome="Michael Chen" data="10/05/2023" />
                    <CardUsuario nome="Sophia Rodriguez" data="18/05/2023" />
                </div>
            </div>
        </div>
    )
}

export default ListUsuario
