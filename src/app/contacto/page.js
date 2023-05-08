'use client'

import React from 'react'
import { Text, Button, Divider } from '@nextui-org/react'
import Iframe from 'react-iframe'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

const page = () => {
  return (
    <>
      <div className='pt-2 px-3'>
        <div>
          <h1 className='font-bold uppercase text-xl'>Sucursal Ramirez</h1>
          <Divider />
          <div className='grid ch:grid-cols-2 lgn:grid-cols-3 gap-5 justify-items-center text-center p-5'>
            <div className='flex flex-col mt-5'>
              <h2 className='font-semibold uppercase '>
                Informacion de contacto
              </h2>
              <div className='flex justify-center gap-2 my-2'>
                <BsTelephone />
                <h3>(646) 152 12 69</h3>
              </div>
              <div className='flex justify-center gap-2'>
                <HiOutlineMail />
                <h3>sucursaltecnilibros@yahoo.com.mx</h3>
              </div>
            </div>

            <div className='flex flex-col ch:mt-5 chx:my-5'>
              <h2 className='font-semibold uppercase'>Horario</h2>
              <h3>Lunes-Viernes 10:00-19:00</h3>
              <h3>Sabado 10:00-15:00</h3>
              <h3>Domingo CERRADO</h3>
            </div>

            <div className='chx:mx-auto chx:px-5 lgx:col-span-2 '>
              <h2 className='font-semibold uppercase'>Ubicacion</h2>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.786160899406!2d-116.6066733259017!3d31.858033730384573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88d8be4933c01%3A0xe5a6357edeb8506!2sSucursal%20Tecnilibros!5e0!3m2!1ses!2smx!4v1683353128834!5m2!1ses!2smx'
                width='400'
                height='300'
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className='font-bold text-xl uppercase'>
            Sucursal Matriz centro
          </h1>
          <Divider />
          <div className='text-center grid ch:grid-cols-2 lgn:grid-cols-3 justify-items-center p-5'>
            <div className='mt-5 flex flex-col '>
              <h2 className='font-semibold uppercase'>
                Informacion de contacto
              </h2>
              <div className=' flex flex-row gap-5 justify-center my-2'>
                <BsTelephone />
                <h3>(646) 178 1408</h3>
              </div>
              <div className=' flex flex-row gap-5 justify-center '>
                <HiOutlineMail />
                <h3>contacto@tecnilibros.com.mx</h3>
              </div>
            </div>

            <div className=' ch:mt-5 chx:my-5'>
              <h2 className='font-semibold uppercase'>Horario</h2>
              <h3>Lunes-Sabado 10:00-19:00</h3>
              <h3>Domingo CERRADO</h3>
            </div>
            <div className='chx:mx-auto chx:px-5 lgx:col-span-2'>
              <h2 className='font-semibold uppercase'>Ubicacion</h2>
              <iframe
                className=''
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
  )
}

export default page
