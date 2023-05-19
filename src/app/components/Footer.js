'use client'

import Link from 'next/link'
import React from 'react'
import { Collapse, Text, Button } from '@nextui-org/react'
import Image from 'next/image'

const rutasExplora = [
  {
    ruta: '/',
    label: 'Inicio'
  },
  {
    ruta: '/',
    label: 'Servicios'
  },
  {
    ruta: '/',
    label: 'Infantil'
  },
  {
    ruta: '/',
    label: '¿Quienes somos?'
  }
]
const rutasVisitanos = [
  {
    ruta: '/contacto',
    label: 'Sucursales'
  }
]

const rutasRedes = [
  {
    ruta: 'https://www.facebook.com/Tecnilibros/?locale=es_LA',

    imagen: '/img/facebook.png'
  },
  {
    ruta: 'https://twitter.com/Tecnilibros',

    imagen: '/img/twitter.png'
  },
  {
    ruta: 'https://www.instagram.com/tecnilibros/?hl=es',

    imagen: '/img/instagram.png'
  }
]
const rutasDireccion = [
  {
    ruta: 'https://maps.app.goo.gl/B46oXopwyZjttAph6?g_st=iw',
    nombre: 'SUCURSAL RAMIREZ',
    direccion: 'Bulevar Ramírez Méndez # 268 Fraccionamiento Bahía',
    telefono: 'Tel (646) 152 12 69',
    correo: 'sucursaltecnilibros@yahoo.com.mx'
  },
  {
    ruta: 'https://maps.app.goo.gl/H7QSBWx6kLsfn8jm7?g_st=iw',
    nombre: 'SUCURSAL MATRIZ CENTRO',
    direccion: 'Av.Ruiz # 488 Entre Juarez y Cuarta. Zona Centro',
    telefono: 'Tel. (646) 178 1408',
    correo: 'contacto@tecnilibros.com.mx'
  }
]

const Footer = () => {
  return (
    <>
      <div className='bg-primary py-4'>
        <div className='grid grid-cols-3  w-[100%] mx-auto'>
          {/* <div className=''>
            <h1 className='font-bold text-3xl  text-white'>Explora</h1>
            {rutasExplora.map(({ ruta, label }, key) => (
              <Link className='block hover:text-white' key={key} href={ruta}>
                {label}
              </Link>
            ))}
          </div> */}

          <div className='text-center w-[80%] mx-auto'>
            <h1 className='text-3xl font-bold '>Visitanos</h1>
            <div className='grid grid-cols-2 pt-2 text-xl'>
              {rutasDireccion.map(({ ruta, nombre }, key) => (
                <Link
                  className='hover:text-white hover:font-bold '
                  key={key}
                  href={ruta}
                >
                  {nombre}
                </Link>
              ))}
            </div>
          </div>

          <div className=''>
            <h2 className='font-bold text-3xl text-center'>
              Siguenos en nuestra redes sociales
            </h2>
            <div className='flex flex-row justify-between max-w-[18rem] mx-auto py-6'>
              {rutasRedes.map(({ ruta, imagen }, key) => (
                <Link key={key} href={ruta}>
                  <Image
                    src={imagen}
                    alt='Imagen red social'
                    width={80}
                    height={80}
                  />
                </Link>
              ))}
            </div>
            <h2 className='font-bold text-lg text-center'>2023 TECNILIBROS</h2>
          </div>

          <div>
            <h1 className='text-3xl font-bold text-center '>Contactanos</h1>
            <div className='grid grid-cols-2 text-lg text-center mt-2'>
              {rutasDireccion.map(({ nombre, telefono, correo }, key) => (
                <div key={key}>
                  <h1 className='font-bold'>{nombre}</h1>
                  <p>{telefono}</p>
                  <p>{correo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
