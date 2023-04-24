'use client'
import Image from 'next/image'

import { Card } from '@nextui-org/react'

const CardServices = ({ imagen, titulo, descripcion }) => {
  return (
    <Card
      isHoverable
      css={{
        mw: '600px',
        mh: '500px'
      }}
      className='bg-white'
    >
      <Card.Body>
        <h2 className='text-2xl font-bold my-2 text-center '>{titulo}</h2>
        <Image
          className='mx-auto my-2'
          src={imagen}
          alt='Icono servicios'
          width={300}
          height={300}
        />
      </Card.Body>
      <Card.Footer>
        <p className='my-2 p-5 text-justify'>{descripcion}</p>
      </Card.Footer>
    </Card>
  )
}

export default CardServices
