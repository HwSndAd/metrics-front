function NavBar() {
    return (
        <div className='shadow-2xl'>
            <div className='flex items-center justify-between container mx-auto px-6 py-3 '>
                <div className='flex items-center gap-3'>
                    <a href="">
                        <img src="a" alt="Logo.png" />
                    </a>
                    <h1 className='text-xl font-medium'>Metrics</h1>
                </div>

                <div>
                    <button className='rounded-md px-3 py-2 bg-zinc-800 text-white border font-medium
                                        hover:bg-zinc-600 hover:scale-101'>
                        Administrador
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar