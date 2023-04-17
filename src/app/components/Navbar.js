import React from 'react'
import Link from 'next/link'

//Se crea el objeto rutas
const rutas = [
    {
        ruta: '/',
        label: "Inicio"
    },
    {
        ruta: '/about',
        label: "Infantil"
    },
    {
        ruta: '/servicios',
        label: "Servicios"
    }
    
    
]

const Navbar = () => {
    return (

        <nav className="px-2  bg-verde-bg">   
        <div className="container flex flex-wrap items-center justify-center mx-auto">
        <img className="rounded-full h-20 w-20 mr-2" src="https://synergyloyalty.net/img/card/tecnilibros_image-717.png" alt="Logo"></img>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul className=" flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-verde-bg md:bg-verde-bg ">
                    {/* //Se manda a mapear el rutas */}
                    {rutas.map(({ ruta, label }) => (
                        <li className='text-white' key={ruta}>
                            <Link href={ruta}>{label}</Link>
                        </li>
                    ))
                    }

                </ul>
            </div>
        </div>
    </nav>
      

    )
}

export default Navbar