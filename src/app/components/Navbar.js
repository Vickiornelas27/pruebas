import React from 'react'
import Link from 'next/link'

//Se crea el objeto rutas
const rutas = [
    {
        ruta: '/',
        label: "Inicio"
    },
    {
        ruta: '/infantil',
        label: "Infantil"
    },
    {
        ruta: '/servicios',
        label: "Servicios"
    },
    {
        ruta: '/about',
        label: "About"
    },
    {
        ruta: '/libros',
        label: "Libros"
    }
] 
    
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-primary  border-b  py-4 md:py-0 sticky top-0 z-50'>
      <div className='flex items-center'>
        <div className='mr-2 md:mr-4 lg:mr-6'>
          <img
            src='https://scontent.ftij2-1.fna.fbcdn.net/v/t1.18169-9/1441409_10152091536306639_2104613663_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SD8aLRSM4-IAX-yXF32&_nc_ht=scontent.ftij2-1.fna&oh=00_AfBToqqUnQ_22IWDfLn7oXJ4yPU5UMcLTCDTk40HMCrIug&oe=6469AC46'
            alt='Tecnilibros'
            className='h-8 md:h-12 lg:h-16 rounded-full'
          />
        </div>
      </div>
      <div className='hidden md:flex items-center'>
        <ul className='flex items-center'>
          {/* //Se manda a mapear el rutas */}
          {rutas.map(({ ruta, label }) => (
            <li
              className='text-black font-medium text-sm md:text-base lg:text-lg hover:text-gray-900 mr-4'
              key={ruta}
            >
              <Link href={ruta}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center'></div>
    </nav>
  )
}

export default Navbar
