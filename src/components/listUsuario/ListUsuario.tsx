import { MagnifyingGlass, Funnel } from "@phosphor-icons/react";
import CardUsuario from "./cardUsuario/CardUsuario";
import Medidas from "../../models/Medidas";
import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface ListUsuarioProps {
    usuarios: Medidas[];
    onSelecionarUsuario: (usuario: Medidas) => void;
    atualizarUsuarios: () => void;
}


function ListUsuario({ usuarios, onSelecionarUsuario, atualizarUsuarios }: ListUsuarioProps) {
    const [busca, setBusca] = useState("");
    const [filtroStatus, setFiltroStatus] = useState<'Todos' | 'Recebido' | 'Concluído'>('Todos');

    // 🔍 Filtra por nome e status
    const usuariosFiltrados = usuarios.filter((u) => {
        const nomeMatch = u.nome.toLowerCase().includes(busca.toLowerCase());
        const statusMatch = filtroStatus === 'Todos' || u.status === filtroStatus;
        return nomeMatch && statusMatch;
    });

    return (
        <div className="flex flex-col w-full h-full">
            <div className="pt-4 px-4 pb-2 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <h1 className="text-lg font-medium">Usuários</h1>

                    {/* Botão de Filtro */}
                    <Menu as="div" className="relative inline-block text-left">
                        <MenuButton className="flex items-center bg-white gap-1 hover:scale-102 hover:bg-zinc-50
                            border border-zinc-300 px-3 py-2 rounded-md text-sm">
                            <Funnel size={18} />
                            {filtroStatus === 'Todos' ? 'Filtrar' : filtroStatus}
                        </MenuButton>

                        <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right bg-white border border-zinc-200 rounded-md shadow-lg focus:outline-none z-10">
                            {['Todos', 'Recebido', 'Concluído'].map((status) => (
                                <MenuItem key={status}>
                                    {({ active }) => (
                                        <button
                                            onClick={() => setFiltroStatus(status as any)}
                                            className={`${
                                                active ? 'bg-zinc-100' : ''
                                            } w-full text-left px-4 py-2 text-sm text-zinc-800`}
                                        >
                                            {status}
                                        </button>
                                    )}
                                </MenuItem>
                            ))}
                        </MenuItems>
                    </Menu>
                </div>

                {/* Campo de busca */}
                <div className="flex items-center gap-2 bg-white border border-zinc-300 rounded-md px-4 py-2 mb-4">
                    <MagnifyingGlass className="text-gray-500" size={20} />
                    <input
                        type="text"
                        placeholder="Buscar usuários..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        className="bg-transparent outline-none w-full text-md"
                    />
                </div>

                {/* Lista de usuários */}
                <div className="flex flex-col max-h-83 overflow-y-scroll">
                    {usuariosFiltrados.map((usuario) => (
                        <div
                            key={usuario.id}
                            onClick={() => onSelecionarUsuario(usuario)}
                            className="cursor-pointer"
                        >
                            <CardUsuario
                                nome={usuario.nome}
                                escola={usuario.escola}
                                data={usuario.dataAtual ?? "Sem data"}
                                status={usuario.status}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListUsuario;
