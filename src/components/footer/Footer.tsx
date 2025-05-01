import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='flex flex-col justify-center items-center p-2 gap-2'>
            <p>Entre em contato: </p>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col items-center justify-center'>
                    <Link to={"https://www.instagram.com/miri_sa.figurinista/"}>
                        <InstagramLogo size={28} />
                    </Link>
                    <p className='font-extralight text-sm text-zinc-600'>Instagram</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <Link to={"https://www.instagram.com/miri_sa.figurinista/"}>
                        <WhatsappLogo size={28} />
                    </Link>
                    <p className='font-extralight text-sm text-zinc-600'>Instagram</p>
                </div>
            </div>
        </div>
    )
}

export default Footer