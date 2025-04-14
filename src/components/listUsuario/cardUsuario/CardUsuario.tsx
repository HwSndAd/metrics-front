interface CardUsuarioProps {
    nome: string
    data: string
}

function CardUsuario({ nome, data }: CardUsuarioProps) {
    return (
        <div className="flex items-center justify-between bg-white py-2 
            border-b border-zinc-400 hover:bg-zinc-50 transition">
            <span className="text-sm font-medium text-gray-800">{nome}</span>

            <span className="text-sm font-medium bg-white border border-zinc-300 px-1.5 
                    py-0.5 rounded-full text-gray-700">
                {data}
            </span>
        </div>
    )
}

export default CardUsuario
