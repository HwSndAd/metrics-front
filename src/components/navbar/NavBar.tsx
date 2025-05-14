import { Link } from "react-router-dom"
import Icon from '../../assets/img/IconImg.png'
import IconText from '../../assets/img/LogoText.png'

function NavBar() {
    return (
        <div className='shadow-md print:hidden'>
            <div className='flex items-center justify-center overflow-hidden container mx-auto px-6 py-2 '>
                <Link to={'/'}>
                    <div className='flex items-center gap-3'>
                        <div className="h-26 flex items-center justify-center overflow-hidden">
                            <img src={Icon} alt="Logo" className="object-contain w-full h-full" />
                        </div>
                        <div className="h-12 flex items-center justify-center overflow-hidden">
                            <img src={IconText} alt="Miriane Sa Figurinos" className="object-contain w-full h-full" />
                        </div>
                    </div>
                </Link>
            </div>

            {/* <div>
                <div>
                    <Link to={'/admin'}>
                        <p className='rounded-md px-3 py-2 bg-zinc-800 text-white border font-medium
                                        hover:bg-zinc-600 hover:scale-101'>
                            Administrador
                        </p>
                    </Link>
                </div>
            </div> */}
        </div>
    )
}

export default NavBar