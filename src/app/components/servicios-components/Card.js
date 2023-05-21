'use client'
import Image from 'next/image'

import { Card } from '@nextui-org/react'

const CardServices = ({ imagen, titulo, descripcion }) => {
  return (
    <Card isHoverable className='max-w-[450px] bg-white max-h-[450px]'>
      <Card.Body>
        <h2 className='text-2xl font-bold my-2 text-center '>{titulo}</h2>
        <Image
          className='mx-auto my-2'
          src={imagen}
          alt='Icono servicios'
          width={150}
          height={150}
        />
        <p className='my-2 p-5 text-justify'>{descripcion}</p>
      </Card.Body>
    </Card>
  )
}

export default CardServices
