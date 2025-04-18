interface CardUsuarioProps {
    nome: string
    escola: string
    data: string
    status?: string
}

function CardUsuario({ nome, escola, data, status }: CardUsuarioProps) {

    const bgColor = status === 'Concluído' ? 'bg-green-100' :
                    'bg-yellow-100'; // Qualquer outro estado será vermelho claro

    return (
        <div className={`flex items-center justify-between ${bgColor} py-2 
            border-b border-zinc-400 hover:bg-zinc-50 transition`}>
            <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-800">{nome}</span>
                <span className="text-sm font-light text-gray-800">{escola}</span>

            </div>

            <span className="text-sm font-medium bg-white border border-zinc-300 px-1.5 
                    py-0.5 rounded-full text-gray-700">
                {data}
            </span>
        </div>
    )
}

export default CardUsuario
