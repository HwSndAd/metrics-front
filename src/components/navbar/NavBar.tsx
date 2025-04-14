import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className='shadow-md'>
            <div className='flex items-center justify-between container mx-auto px-6 py-3 '>
                <Link to={'/'}>
                    <div className='flex items-center gap-3'>
                        <img src="a" alt="Logo.png" />
                        <h1 className='text-xl font-medium'>Metrics</h1>
                    </div>
                </Link>

                <div>
                    <Link to={'/admin'}>
                        <p className='rounded-md px-3 py-2 bg-zinc-800 text-white border font-medium
                                        hover:bg-zinc-600 hover:scale-101'>
                            Administrador
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar