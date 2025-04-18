import React from 'react'


interface CardInputMedidaProps {
    titulo: string;
    valor: string | number;
    onChange: (novoValor: string) => void;
}

function CardInputMedida({ titulo, valor, onChange }: CardInputMedidaProps) {
    return (
        <div className="flex flex-col text-center h-24 justify-center items-center 
                border border-zinc-200 rounded-xl p-4 bg-white shadow-sm ">
            <p className="text-sm text-zinc-500">{titulo}</p>
            <input
                type="number"
                value={valor}
                onChange={(e) => onChange(e.target.value)}
                className="text-center text-2xl items-center font-semibold text-zinc-900 w-full bg-transparent outline-none"
            />
        </div>
    )
}

export default CardInputMedida