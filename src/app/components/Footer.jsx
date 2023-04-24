'use client';

import Link from 'next/link';
import React from 'react';
import { Collapse, Text, Button } from '@nextui-org/react';

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

const rutas_redes = [
  {
    ruta: 'https://www.facebook.com/Tecnilibros/?locale=es_LA',

    imagen: '../../img/facebook.png',
  },
  {
    ruta: 'https://twitter.com/Tecnilibros',

    imagen: '../../img/twitter.png',
  },
  {
    ruta: 'https://www.instagram.com/tecnilibros/?hl=es',

    imagen: '../../img/instagram.png',
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
      <Collapse.Group>
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
          <div className='xl: w-1/6 p-3'>
            <nav>
              <ul className='  text-l p-5 '>
                {rutas_conocenos.map(({ ruta, label }, key) => (
                  <li key={key}>
                    <Link href={ruta}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Collapse>
        <Collapse title='VISITANOS'>
          <div className=' text-center xl: w-2/6 '>
            <div>
              <h1>SUCURSAL RAMIREZ</h1>
              <h2>Bulevar Ramírez Méndez # 268 Fraccionamiento Bahía</h2>

              <Button
                auto
                color='secondary'
                rounded
                flat
                onClick={() =>
                  window.open(
                    'https://maps.app.goo.gl/B46oXopwyZjttAph6?g_st=iw',
                    '_blank'
                  )
                }
              >
                <h1>Ver Mapa</h1>
              </Button>
            </div>
            <div>
              <h1>SUCURSAL MATRIZ CENTRO</h1>
              <h2>Av.Ruiz # 488 Entre Juarez y Cuarta. Zona Centro</h2>
              <Button
                auto
                color='secondary'
                rounded
                flat
                onClick={() =>
                  window.open(
                    'https://maps.app.goo.gl/H7QSBWx6kLsfn8jm7?g_st=iw',
                    '_blank'
                  )
                }
              >
                <h1>Ver Mapa</h1>
              </Button>
            </div>
          </div>
        </Collapse>
        <Collapse title='CONTACTO'>
          <div>
            <h1>SUCURSAL RAMIREZ</h1>
            <h2>Tel (646) 152 12 69</h2>
            <h2>sucursaltecnilibros@yahoo.com.mx</h2>
          </div>
          <div>
            <h1>SUCURSAL MATRIZ CENTRO</h1>
            <h2>Tel. (646) 178 1408</h2>
            <h2>contacto@tecnilibros.com.mx</h2>
          </div>
        </Collapse>
        <Collapse title='AVISO DE PRIVACIDAD'>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Collapse>
      </Collapse.Group>
      <div className=' bg-[#90BE6D]p-8   sm:columns-2  md:columns-3 xl:flex columns:4  '>
        <div className=' xl: w-2/6 p-3'>
          <div className='text-center text-l'>
            <label>Siguenos en nuestra redes sociales</label>
          </div>
          <nav className='column columns-3'>
            <ul className='  font-serif font-thin  text-l p-1 '>
              {rutas_redes.map(({ ruta, imagen }, key) => (
                <li key={key} className='text-center'>
                  <Link href={ruta}>
                    {' '}
                    <img src={imagen} alt='' />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <h3>2023 TECNILIBROS</h3>
      </div>
    </>
  );
};

export default Footer;
