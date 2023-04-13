import Image from 'next/image'

import ImageBanner1 from '../../../../public/img/facebook.png'

const Card = () => {
  return (
    <div className='bg-gray-200 flex flex-col text-center p-5 m-2 shadow-md max-w-[22rem]'>
      <div className=''>
        <Image
          className='mx-auto my-2'
          src={ImageBanner1}
          alt='Icono servicios'
          width={100}
          height={100}
        />
        <h2 className='text-2xl font-bold my-2'>Servicio de apartado</h2>
        <p className=' my-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, unde.
        </p>
      </div>
    </div>
  )
}

export default Card
