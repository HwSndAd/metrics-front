import React from 'react'
import FichaTecnica from '../assets/img/FICHATCNICA.jpg'

function ExportarFicha() {
    return (
        <div className="relative w-[850px] mx-auto border shadow-xl">
            {/* Imagem como base */}
            <img src={FichaTecnica} alt="Ficha Técnica" className="w-full" />

            {/* Inputs posicionados */}
            <input
                type="text"
                placeholder="Nome"
                className="absolute top-[25px] left-[120px] w-[300px] px-2 py-1 text-sm "
            />
            <input
                type="text"
                placeholder="Altura"
                className="absolute top-[60px] left-[130px] w-[150px] px-2 py-1 text-sm"
            />
            <input
                type="text"
                placeholder="Manequim"
                className="absolute top-[90px] left-[160px] w-[150px] px-2 py-1 text-sm"
            />

            <input
                type="text"
                placeholder="Busto"
                className="absolute top-[150px] left-[250px] w-[120px] px-2 py-1"
            />
            <input
                type="text"
                placeholder="Altura Busto"
                className="absolute top-[130px] left-[490px] w-[120px] px-2 py-1 "
            />

            <input
                type="text"
                placeholder="Ombro"
                className="absolute top-[217px] left-[540px] w-[120px] px-2 py-1 "
            />

            <input
                type="text"
                placeholder="Circ.Cava"
                className="absolute top-[275px] left-[570px] w-[120px] px-2 py-1 "
            />

            <input
                type="text"
                placeholder="Largura Braço"
                className="absolute top-[340px] left-[560px] w-[120px] px-2 py-1 "
            />

            <input
                type="text"
                placeholder="Punho Abertura"
                className="absolute top-[435px] left-[540px] w-[130px] px-2 py-1 "
            />

            <input
                type="text"
                placeholder="Punho s/ Abertura"
                className="absolute top-[535px] left-[540px] w-[130px] px-2 py-1 "
            />

            <input
                type="text"
                placeholder="Quadril"
                className="absolute top-[530px] left-[170px] w-[130px] px-2 py-1 "
            />
            <input
                type="text"
                placeholder="Cintura"
                className="absolute top-[425px] left-[150px] w-[130px] px-2 py-1 "
            />
            <input
                type="text"
                placeholder="Comp.Braco"
                className="absolute top-[340px] left-[140px] w-[130px] px-2 py-1 "
            />
            <input
                type="text"
                placeholder="Altura Corpo"
                className="absolute top-[240px] left-[170px] w-[130px] px-2 py-1 "
            />

            {/*Altura Pernas*/}
            <input
                type="text"
                placeholder="AltMeioCoxa"
                className="absolute top-[760px] left-[80px] w-[130px] px-2 py-1 "
            />
            <input
                type="text"
                placeholder="AltMeioJoelho"
                className="absolute top-[830px] left-[70px] w-[130px] px-2 py-1 "
            />

            <input
                type="text"
                placeholder="AltMeioPantu"
                className="absolute top-[930px] left-[70px] w-[130px] px-2 py-1 "
            />

            <input
                type="text"
                placeholder="AltoTotalPerna"
                className="absolute top-[1055px] left-[310px] w-[130px] px-2 py-1 "
            />

            {/*Circunferencias Pernas */}

            <input
                type="text"
                placeholder="CircCanela"
                className="absolute top-[1005px] left-[660px] w-[130px] px-2 py-1 "
            />
            <input
                type="text"
                placeholder="CircPanturrilha"
                className="absolute top-[895px] left-[665px] w-[130px] px-2 py-1 "
            />
            <input
                type="text"
                placeholder="CircJoelho"
                className="absolute top-[775px] left-[675px] w-[130px] px-2 py-1 "
            />
            <input
                type="text"
                placeholder="CircJoelho"
                className="absolute top-[655px] left-[690px] w-[130px] px-2 py-1 "
            />
            {/* Gancho */}
            <input
                type="text"
                placeholder="Gancho"
                className="absolute bottom-[80px] right-[50px] w-[120px] px-2 py-1"
            />

            {/* Adicione mais campos conforme necessário */}
        </div>
    );
}

export default ExportarFicha