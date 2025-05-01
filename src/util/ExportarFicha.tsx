import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useLocation } from 'react-router-dom';
import './export.css';
import FichaTecnica from '../assets/img/FICHATCNICA.jpg';
import Medidas from '../models/Medidas';

// Componente de classe que renderiza a ficha preenchida
class ComponentToPrint extends React.Component<{ usuario: Medidas }> {
    render() {
        const { usuario } = this.props;
        if (!usuario) return <p className='text-2xl text-center font-bold'>Usuário não encontrado</p>;

        return (
            <div className="relative w-[794px] h-[1123px] mx-auto bg-white">
                <img
                    src={FichaTecnica}
                    alt="Ficha Técnica"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Exibe cada campo com value vindo de usuario */}
                <input
                    type="text"
                    value={usuario.nome}
                    readOnly
                    className="absolute top-[25px] left-[120px] w-[300px] px-2 py-1 text-sm"
                />
                <input
                    type="text"
                    value={usuario.escola}
                    readOnly
                    className="absolute border-b border-dashed top-[55px] left-[330px] w-[335px] text-sm"
                />
                <input
                    type="text"
                    value={usuario.altura}
                    readOnly
                    className="absolute top-[55px] left-[130px] w-[150px] px-2 py-1 text-sm"
                />
                <input
                    type="text"
                    value={usuario.manequim ?? ''}
                    readOnly
                    className="absolute top-[80px] left-[160px] w-[150px] px-2 py-1 text-sm"
                />
                <input
                    type="text"
                    value={usuario.compBustoFrente ?? ''}
                    readOnly
                    className="absolute top-[140px] left-[250px] w-[120px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.compBusto ?? ''}
                    readOnly
                    className="absolute top-[125px] left-[460px] w-[120px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.compOmbro ?? ''}
                    readOnly
                    className="absolute top-[207px] left-[520px] w-[120px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.circCava ?? ''}
                    readOnly
                    className="absolute top-[260px] left-[550px] w-[120px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.circBiceps ?? ''} 
                    readOnly
                    className="absolute top-[320px] left-[535px] w-[120px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.compBraco ?? ''}
                    readOnly
                    className="absolute top-[320px] left-[155px] w-[120px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.circPunhoAbertura ?? ''}
                    readOnly
                    className="absolute top-[415px] left-[500px] w-[130px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.circPunhoFechado ?? ''}
                    readOnly
                    className="absolute top-[500px] left-[520px] w-[130px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.circQuadril ?? ''}
                    readOnly
                    className="absolute top-[490px] left-[170px] w-[130px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.circCintura ?? ''}
                    readOnly
                    className="absolute top-[400px] left-[150px] w-[130px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.compAlturaTronco ?? ''}
                    readOnly
                    className="absolute top-[225px] left-[170px] w-[130px] px-2 py-1"
                />

                {/* Pernas */}
                <input
                    type="text"
                    value={usuario.compMeioCoxa ?? ''}
                    readOnly
                    className="absolute top-[710px] left-[80px] w-[130px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.compJoelho ?? ''}
                    readOnly
                    className="absolute top-[780px] left-[70px] w-[130px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.compPanturrilha ?? ''}
                    readOnly
                    className="absolute top-[870px] left-[70px] w-[130px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.compTotalPerna ?? ''}
                    readOnly
                    className="absolute top-[990px] left-[290px] w-[130px] px-2 py-1"
                />

                {/* Pernas Circunferencia*/}
                <input
                    type="text"
                    value={usuario.circCoxa ?? ''}
                    readOnly
                    className="absolute bottom-[480px] right-[-10px] w-[130px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.circJoelho ?? ''}
                    readOnly
                    className="absolute bottom-[365px] right-[2px] w-[130px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.circPanturrilha ?? ''}
                    readOnly
                    className="absolute bottom-[255px] right-[2px] w-[130px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.circTornozelo ?? ''}
                    readOnly
                    className="absolute bottom-[150px] right-[2px] w-[130px] px-2 py-1"
                />
                <input
                    type="text"
                    value={usuario.gancho ?? ''}
                    readOnly
                    className="absolute bottom-[75px] right-[2px] w-[130px] px-2 py-1"
                />

                <p
                    className="absolute bottom-[40px] right-[7px] w-[780px] px-2 py-1">
                    Comentario</p>
                <input
                    type="text"
                    value={usuario.comentario ?? ''}
                    readOnly
                    className="absolute border bottom-[7px] right-[7px] w-[780px] px-2 py-1"
                />
            </div>
        );
    }
}

export default function ExportarFicha() {
    const location = useLocation();
    const state = location.state as { usuario?: Medidas } | undefined;
    const usuario = state?.usuario;

    if (!usuario) {
        return <p className='text-2xl text-center font-bold pt-6'>Nenhum usuário selecionado <br /> para  Visualização.</p>;
    }

    const componentRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: 'Ficha Técnica',
    });

    return (
        <div className='flex flex-col px-6'>
            <button
                onClick={() => handlePrint()}
                className="print:hidden border py-1 px-6 mr-8 mt-4 items-end ml-auto
                    rounded-md text-white font-medium bg-zinc-900 hover:scale-101"
            >
                Imprimir
            </button>

            <div ref={componentRef}>
                <ComponentToPrint usuario={usuario} />
            </div>
        </div>
    );
}
