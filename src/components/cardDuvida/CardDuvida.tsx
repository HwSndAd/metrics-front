import React from 'react';
import Mannequim from '../../assets/img/Mannequim.png';

interface CardDuvidaProps {
    campo: string;
    onClose: () => void;
}

function CardDuvida( { campo,onClose }: CardDuvidaProps) {
    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 md:p-8 flex flex-col gap-6">
                
                {/* Imagem */}
                <div className="flex items-center justify-center">
                    <img src={Mannequim} alt="Mannequim" className="object-contain h-52 md:h-64 rounded-xl" />
                </div>

                {/* Texto */}
                <div className="text-zinc-800 flex flex-col  items-center justify-center">
                    <h2 className="text-lg font-semibold mb-3">Dúvida sobre {campo}</h2>
                    <p className="text-sm leading-relaxed items-center text-zinc-600">
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, 
                        utilizado desde o século XVI, quando um impressor desconhecido embaralhou tipos para criar um livro de amostras.
                    </p>
                </div>

                {/* Botão de Fechar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 transition-colors text-2xl font-bold"
                    aria-label="Fechar"
                >
                    &times;
                </button>
            </div>
        </div>
    );
}

export default CardDuvida;
