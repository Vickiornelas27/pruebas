'use client';

import Link from 'next/link';
import React from 'react';
import { Collapse, Text, Button } from '@nextui-org/react';
import Image from 'next/image';

const rutas_explora = [
  {
    ruta: '/',
    label: 'Inicio',
  },
  {
    ruta: '/',
    label: 'Servicios',
  },
  {
    ruta: '/',
    label: 'Infantil',
  },
];
const rutas_conocenos = [
  {
    ruta: '/',
    label: '¿Quienes somos?',
  },
];
const rutas_visitanos = [
  {
    ruta: '/contacto',
    label: 'Sucursales',
  },
];
const rutas_contactanos = [
  {
    ruta: '/contacto',
    label: 'Contactanos',
  },
];
const rutas_privacidad = [
  {
    ruta: '/',
    label: 'Aviso de privacidad',
  },
];

const rutas_redes = [
  {
    ruta: 'https://www.facebook.com/Tecnilibros/?locale=es_LA',

    imagen: '/img/facebook.png',
  },
  {
    ruta: 'https://twitter.com/Tecnilibros',

    imagen: '/img/twitter.png',
  },
  {
    ruta: 'https://www.instagram.com/tecnilibros/?hl=es',

    imagen: '/img/instagram.png',
  },
];
// const rutas_direccion = [
//   {
//     ruta: 'https://maps.app.goo.gl/B46oXopwyZjttAph6?g_st=iw',
//     nombre: 'SUCURSAL RAMIREZ',
//     direccion: 'Bulevar Ramírez Méndez # 268 Fraccionamiento Bahía',
//     telefono: 'Tel (646) 152 12 69',
//     correo: 'sucursaltecnilibros@yahoo.com.mx',
//   },
//   {
//     ruta: 'https://maps.app.goo.gl/H7QSBWx6kLsfn8jm7?g_st=iw',
//     nombre: 'SUCURSAL MATRIZ CENTRO',
//     direccion: 'Av.Ruiz # 488 Entre Juarez y Cuarta. Zona Centro',
//     telefono: 'Tel. (646) 178 1408',
//     correo: 'contacto@tecnilibros.com.mx',
//   },
// ];

const Footer = () => {
  return (
    <>
      <Collapse.Group className=' bg-primary '>
        <Collapse title='EXPLORA'>
          <div className=' xl: w-1/6 p-3'>
            <nav>
              <ul className='  text-l p-5 '>
                {rutas_explora.map(({ ruta, label }, key) => (
                  <li key={key}>
                    <Link href={ruta}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Collapse>
        <Collapse title='CONOCENOS'>
          <nav>
            <ul className='  text-l p-5 '>
              {rutas_conocenos.map(({ ruta, label }, key) => (
                <li key={key}>
                  <Link href={ruta}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
        <Collapse title='VISITANOS'>
          <nav>
            <ul className='  text-l p-5 '>
              {rutas_visitanos.map(({ ruta, label }, key) => (
                <li key={key}>
                  <Link href={ruta}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
        <Collapse title='CONTACTO'>
          <nav>
            <ul className='  text-l p-5 '>
              {rutas_contactanos.map(({ ruta, label }, key) => (
                <li key={key}>
                  <Link href={ruta}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
        <Collapse title='AVISO DE PRIVACIDAD'>
          <nav>
            <ul className='  text-l p-5 '>
              {rutas_privacidad.map(({ ruta, label }, key) => (
                <li key={key}>
                  <Link href={ruta}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
      </Collapse.Group>
      <div className='   bg-primary p-8 '>
        <div className=''>
          <h2 className='font-bold text-xl text-center'>
            Siguenos en nuestra redes sociales
          </h2>
          <div className='flex flex-row justify-between max-w-[18rem] mx-auto py-6'>
            {rutas_redes.map(({ ruta, imagen }, key) => (
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
        </div>
        <h2 className='font-bold text-lg text-center'>2023 TECNILIBROS</h2>
      </div>
    </>
  );
};

export default Footer;
