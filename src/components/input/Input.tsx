import React from 'react'

interface InputProps {
    name: string
    label: string
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    unit?: string
}

function Input({ name, label, value, onChange, unit }: InputProps) {
    return (
        <div className="flex flex-col space-y-1">
            <label htmlFor={name} className="text-sm font-medium">
                {label}
            </label>
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
        </div>
    )
}

export default Input
