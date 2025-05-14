import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Admin Login */}
                <div className="text-center md:text-left">
                    <Link
                        to="/admin"
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                    >
                        Área do Administrador
                    </Link>
                </div>

                {/* Instagram Button */}
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                        Siga no Instagram:
                    </span>
                    <Link
                        to="https://www.instagram.com/miri_sa.figurinista/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full shadow-lg transform transition hover:scale-110"
                    >
                        <InstagramLogo size={24} className="text-white" />
                    </Link>
                </div>

            </div>
        </footer>
    );
}

export default Footer