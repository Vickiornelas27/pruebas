'use client';

import React from 'react';
import { Text, Button, Divider } from '@nextui-org/react';
import Iframe from 'react-iframe';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const page = () => {
  return (
    <>
      <div className='pt-2 px-3'>
        <div>
          <h1 className='font-bold'>SUCURSAL RAMIREZ</h1>
          <Divider />
          <div className='text-center flex flex-row gap-10 justify-center pt-3'>
            <div className='w-1/4'>
              <h2 className='font-semibold'>INFORMACION DE CONTACTO</h2>
              <div className=' flex flex-row gap-10 justify-start pt-2'>
                <BsTelephone />
                <h3>(646) 152 12 69</h3>
              </div>
              <div className=' flex flex-row gap-10 justify-start pt-2 '>
                <HiOutlineMail />
                <h3>sucursaltecnilibros@yahoo.com.mx</h3>
              </div>
            </div>
            <div className='w-1/4'>
              <h2 className='font-semibold'>HORARIO</h2>

              <h3>Lunes-Viernes 10:00-19:00</h3>
              <h3>Sabado 10:00-15:00</h3>
              <h3>Domingo CERRADO</h3>
            </div>
            <div className=' '>
              <h2 className='font-semibold'>UBICACION</h2>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.786160899406!2d-116.6066733259017!3d31.858033730384573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88d8be4933c01%3A0xe5a6357edeb8506!2sSucursal%20Tecnilibros!5e0!3m2!1ses!2smx!4v1683353128834!5m2!1ses!2smx'
                width='400'
                height='300'
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <h1 className='font-bold'>SUCURSAL MATRIZ CENTRO</h1>
          <Divider />
          <div className='text-center flex flex-row gap-10 justify-center pt-3'>
            <div className='w-1/4'>
              <h2 className='font-semibold'>INFORMACION DE CONTACTO</h2>
              <div className=' flex flex-row gap-10 justify-start pt-2'>
                <BsTelephone />
                <h3>(646) 178 1408</h3>
              </div>
              <div className=' flex flex-row gap-10 justify-start pt-2'>
                <HiOutlineMail />
                <h3>contacto@tecnilibros.com.mx</h3>
              </div>
            </div>
            <div className='w-1/4'>
              <h2 className='font-semibold'>HORARIO</h2>
              <h3>Lunes-Sabado 10:00-19:00</h3>
              <h3>Domingo CERRADO</h3>
            </div>
            <div>
              <h2 className='font-semibold'>UBICACION</h2>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.43894063306!2d-116.6281610259012!3d31.8674794299134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d8928f4f9f7803%3A0xc45cb2c0cd8f12d4!2sLibrer%C3%ADa%20Tecnilibros!5e0!3m2!1ses!2smx!4v1683352868819!5m2!1ses!2smx'
                width='400'
                height='300'
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
