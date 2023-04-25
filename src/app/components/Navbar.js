import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

//Se crea el objeto rutas
const rutas = [
  {
    ruta: '/',
    label: 'Inicio'
  },
  {
    ruta: '/infantil',
    label: 'Infantil'
  },
  {
    ruta: '/servicios',
    label: 'Servicios'
  },
  {
    ruta: '/',
    label: 'About'
  },
  {
    ruta: '/libros',
    label: 'Libros'
  }
]

const Navbar = () => {
  return (
    <nav className='bg-primary shadow-xl py-4 sticky top-0 z-50 '>
      <div className='flex flex-row justify-between max-w-[80rem] mx-auto'>
        <div className='flex items-center'>
          <div className='mr-2 md:mr-4 lg:mr-6'>
            <Link href='/'>
              <Image
                src='https://scontent.ftij2-1.fna.fbcdn.net/v/t1.18169-9/1441409_10152091536306639_2104613663_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SD8aLRSM4-IAX-yXF32&_nc_ht=scontent.ftij2-1.fna&oh=00_AfBToqqUnQ_22IWDfLn7oXJ4yPU5UMcLTCDTk40HMCrIug&oe=6469AC46'
                alt='Tecnilibros'
                className=' h-8 md:h-14 lg:h-20  rounded-full'
                width={80}
                height={0}
              />
            </Link>
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
                <Link
                  className='text-white text-[1.4justify-betweenrem]'
                  href={ruta}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
