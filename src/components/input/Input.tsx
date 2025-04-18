import { Question } from '@phosphor-icons/react'
import React, { useState } from 'react'
import CardDuvida from '../cardDuvida/CardDuvida'

interface InputProps {
    name: string
    label: string
    value: number | undefined
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    unit?: string
}

function Input({ name, label, value, onChange, unit }: InputProps) {
    {/*Controle do Pop-Up*/ }
    const [isCardOpen, setIsCardOpen] = useState(false);

    return (
        <div className="flex flex-col space-y-1">
            <div className='flex items-center'>
                <label htmlFor={name} className="text-sm font-medium mr-auto">
                    {label}
                </label>
                <Question
                    size={18}
                    onClick={() => setIsCardOpen(true)}
                    className='mr-7 hover:text-zinc-600 cursor-pointer'
                />
            </div>
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="border border-gray-300 bg-white h-10 px-2 py-1 rounded-md w-full"
                />
                {unit && <span className="text-xs text-gray-500">{unit}</span>}
            </div>
            {/* Pop-up Card */}
            {isCardOpen && <CardDuvida campo={label} onClose={() => setIsCardOpen(false)} />}
        </div>
    )
}

export default Input
