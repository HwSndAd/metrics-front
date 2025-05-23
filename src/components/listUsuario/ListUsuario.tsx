import { MagnifyingGlass, Funnel, CaretDown, Building, CoatHanger, Broom } from "@phosphor-icons/react";
import CardUsuario from "./cardUsuario/CardUsuario";
import Medidas from "../../models/Medidas";
import { useState, useEffect, useContext } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { filtro } from "../../service/service"; // ajuste o path se necessário
import { AuthContext } from "../../contexts/AuthContext";

interface ListUsuarioProps {
    usuarios: Medidas[];
    onSelecionarUsuario: (usuario: Medidas) => void;
    atualizarUsuarios?: () => void; // se você quiser usar
}

function ListUsuario({ usuarios, onSelecionarUsuario }: ListUsuarioProps) {
    // estados de UI
    const [busca, setBusca] = useState("");
    const [mostrarFiltro, setMostrarFiltro] = useState(false);
    const [filtroStatus, setFiltroStatus] = useState<"Todos" | "Recebido" | "Concluído">("Todos");

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    // filtros compostos
    const [instituicaoFiltro, setInstituicaoFiltro] = useState("");
    const [eventoFiltro, setEventoFiltro] = useState("");

    // lista que será renderizada
    const [listaUsuarios, setListaUsuarios] = useState<Medidas[]>(usuarios);

    useEffect(() => {
        setListaUsuarios(usuarios);
    });

    // filtro simples de nome + status
    const usuariosFiltrados = listaUsuarios.filter((u) => {
        const nomeMatch = u.nome.toLowerCase().includes(busca.toLowerCase());
        const statusMatch = filtroStatus === "Todos" || u.status === filtroStatus;
        return nomeMatch && statusMatch;
    });
    //limpar filtro
    const limparFiltros = () => {
        setEventoFiltro("");
        setInstituicaoFiltro("");
        setListaUsuarios(usuarios); // volta para os dados originais
        setMostrarFiltro(false);
    };

    const handleFiltroComposto = async () => {
        console.log("Botão de filtro clicado!"); // DEBUG
        const url = `/medidas/${encodeURIComponent(eventoFiltro)}/${encodeURIComponent(instituicaoFiltro)}`;
        try {
            await filtro(url, setListaUsuarios, {
                headers: { Authorization: token }
            });
            setMostrarFiltro(false);
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    };


    return (
        <div className="flex flex-col w-full h-full">
            <div className="pt-4 px-4 pb-2 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <h1 className="text-lg font-medium">Usuários</h1>

                    {/* Filtro por status */}
                    <Menu as="div" className="relative inline-block text-left">
                        <MenuButton className="flex items-center bg-white gap-1 hover:scale-102 hover:bg-zinc-50
                border border-zinc-300 px-3 py-2 rounded-md text-sm">
                            <Funnel size={18} />
                            {filtroStatus === "Todos" ? "Filtrar" : filtroStatus}
                        </MenuButton>
                        <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right bg-white border border-zinc-200 rounded-md shadow-lg z-10">
                            {["Todos", "Recebido", "Concluído"].map((status) => (
                                <MenuItem key={status}>
                                    {({ active }) => (
                                        <button
                                            onClick={() => setFiltroStatus(status as any)}
                                            className={`${active ? "bg-zinc-100" : ""} w-full text-left px-4 py-2 text-sm`}
                                        >
                                            {status}
                                        </button>
                                    )}
                                </MenuItem>
                            ))}
                        </MenuItems>
                    </Menu>
                </div>

                {/* Busca por nome */}
                <div className="flex items-center gap-2 bg-white border border-zinc-300 rounded-md px-4 py-2 mb-1">
                    <MagnifyingGlass className="text-gray-500" size={20} />
                    <input
                        type="text"
                        placeholder="Buscar usuários..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        className="bg-transparent outline-none w-full text-md"
                    />
                </div>

                {/* Toggle filtro composto */}
                <div className="flex justify-center items-center">
                    <button className="p-0.5 mb-1" onClick={() => setMostrarFiltro(!mostrarFiltro)}>
                        <CaretDown
                            size={16}
                            className={`transition-transform duration-300 ${mostrarFiltro ? "rotate-180" : "rotate-0"}`}
                        />
                    </button>
                </div>

                {/* Painel de filtro composto */}
                {mostrarFiltro && (
                    <div className="flex flex-col items-center gap-1 bg-white mb-3" id="filtroComp">
                        <div className="flex w-full items-center gap-1 border border-zinc-300 rounded-md px-4 py-2">
                            <Building size={18} />
                            <input
                                type="text"
                                placeholder="Buscar por Instituição..."
                                value={instituicaoFiltro}
                                onChange={(e) => setInstituicaoFiltro(e.target.value)}
                                className="bg-transparent outline-none w-full text-md"
                            />
                        </div>
                        <div className="flex w-full items-center gap-1 border border-zinc-300 rounded-md px-4 py-2">
                            <CoatHanger size={18} />
                            <input
                                type="text"
                                placeholder="Buscar por evento..."
                                value={eventoFiltro}
                                onChange={(e) => setEventoFiltro(e.target.value)}
                                className="bg-transparent outline-none w-full text-md"
                            />
                        </div>
                        <div className="flex justify-end w-full">
                            <button
                                onClick={limparFiltros}
                                className="flex items-center justify-center gap-1 border border-zinc-300 rounded-md px-2 py-1 hover:scale-102 hover:bg-zinc-50"
                            >
                                <Broom size={16} />
                                Limpar
                            </button>
                            <button
                                onClick={handleFiltroComposto}
                                className="flex items-center justify-center gap-1 border border-zinc-300 rounded-md px-2 py-1 hover:scale-102 hover:bg-zinc-50"
                                disabled={!eventoFiltro && !instituicaoFiltro}
                            >
                                <MagnifyingGlass size={16} />
                                Buscar
                            </button>
                        </div>
                    </div>
                )}

                {/* Lista renderizada */}
                <div className="flex flex-col max-h-80 overflow-y-auto">
                    {usuariosFiltrados.map((usuario) => (
                        <div
                            key={usuario.id}
                            onClick={() => onSelecionarUsuario(usuario)}
                            className="cursor-pointer"
                        >
                            <CardUsuario
                                nome={usuario.nome}
                                escola={usuario.escola}
                                evento={usuario.evento}
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
