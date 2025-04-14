interface CardMedidaProps {
    titulo: string
    valor: string
}

function CardMedida({ titulo, valor }: CardMedidaProps) {
    return (
        <div className="border border-zinc-200 rounded-xl p-4 bg-white shadow-sm">
            <p className="text-sm text-zinc-500">{titulo}</p>
            <p className="text-2xl font-semibold text-zinc-900">{valor}</p>
        </div>
    )
}

export default CardMedida
