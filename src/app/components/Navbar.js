'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {useState} from 'react'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

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
    ruta: '/about',
    label: 'About'
  },
  {
    ruta: '/libros',
    label: 'Libros'
  }
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className='bg-primary shadow-xl py-4 sticky top-0 z-50'>
    <div className='flex flex-row justify-between max-w-[80rem] mx-auto'>
      <div className='flex items-center'>
        <button
          type='button'
          className='text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 mr-4'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars size={20}  />
        </button>
        <div className='mr-2 md:mr-4 lg:mr-6'>
          <Link href='/'>
            <Image
              src='https://scontent.ftij2-1.fna.fbcdn.net/v/t1.18169-9/1441409_10152091536306639_2104613663_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SD8aLRSM4-IAX-yXF32&_nc_ht=scontent.ftij2-1.fna&oh=00_AfBToqqUnQ_22IWDfLn7oXJ4yPU5UMcLTCDTk40HMCrIug&oe=6469AC46'
              alt='Tecnilibros'
              className=' h-8 md:h-14 lg:h-20  rounded-full hidden md:flex  '
              width={80}
              height={0}
            />
          </Link>
        </div>
      </div>
      <div className='hidden md:flex  items-center'>
        <ul className='flex items-center'>
          {rutas.map(({ ruta, label }) => (
            <li
              className='text-black font-medium text-sm md:text-base lg:text-lg hover:text-gray-900 mr-4'
              key={ruta}
            >
              <Link
                className='text-white text-[1.4rem]'
                href={ruta}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    {isMenuOpen && (
      <div className='  absolute top-0 left-0 w-full h-screen bg-primary '>
        <div className='flex flex-col items-start h-full py-4'>
          <button
            type='button'
            className='text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 ml-4 mb-4'
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes size={20} />
          </button>
          <ul className='p-4'>
            {rutas.map(({ ruta, label }) => (
              <li
                className='text-black font-medium text-base hover:text-gray-900 mb-4'
                key={ruta}
              >
                <Link
                  className='text-white'
                  href={ruta}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </nav>
  );
}

export default Navbarr
