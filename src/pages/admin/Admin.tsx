import { DownloadSimple, Funnel } from '@phosphor-icons/react'
import ListUsuario from '../../components/listUsuario/ListUsuario'
import ViewUsuario from '../../components/viewUsuario/ViewUsuario'

function Admin() {
    return (
        <>
            <div className='container mx-auto px-6 py-3'>
                <div className='flex flex-col justify-around md:flex-row md:justify-between'>

                    <div className='flex flex-col'>
                        <h1 className='text-3xl font-light tracking-tight mb-1'>Painel Administrativo</h1>
                        <h3 className='text-zinc-400'>Visualize e gerencie as medidas corporais dos usuários</h3>
                    </div>

                    <div className='flex flex-row items-center font-medium gap-4'>
                        <button className='flex items-center  bg-white gap-1 hover:scale-102 hover:bg-zinc-50
                                border border-zinc-300 px-3 py-2 rounded-md'>
                            <Funnel size={18} />
                            Filtrar
                        </button>

                        <button className='flex items-center gap-1 bg-white hover:scale-102 hover:bg-zinc-50
                                border border-zinc-300 px-3 py-2 rounded-md'>
                            <DownloadSimple size={18} />
                            Exportar
                        </button>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='pt-4 min-w-80'>
                        <ListUsuario />
                    </div>

                    <div className='pt-4 w-full'>
                        <ViewUsuario />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin