import { Link } from "react-router-dom"
import Icon from '../../assets/img/IconLogo.png'

function NavBar() {
    return (
        <div className='shadow-md print:hidden'>
            <div className='flex items-center justify-between overflow-hidden container mx-auto px-6 py-3 '>
                <Link to={'/'}>
                    <div className='flex items-center gap-3'>
                        <div className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-full">
                            <img src={Icon} alt="Logo" className="object-contain w-full h-full" />
                        </div>
                        <h1 style={{fontFamily: 'Montserrat, sans-serif' }} className='text-2xl font-normal'>
                            Miriane Sa</h1>
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