import React from 'react'

import Slideshow from './components/Slideshow'
import ImageBanner from '../../public/banner/banner-books.jpg'
import SliderLibros from './components/Slider'
const page = () => {
  return (
    <div>
      <div className='bg-[url("../../public/banner/banner-books2.jpg")] w-auto h-[15rem] lg:h-[25rem] bg-cover bg-center bg-no-repeat  '>
        <div className='bg-[#343a40] bg-opacity-75  h-[15rem] lg:h-[25rem] px-2 pt-[5rem] lg:pt-[10rem] text-center text-white '>
          <h1 className=' font-bold md:text-3xl uppercase text-center '>
            Tecnilibros
          </h1>
          <h3 className=' md:text-xl'>
            {
              '"La librería, donde te sumergirás en océanos de conocimiento y cada página es un viaje."'
            }
          </h3>
        </div>
      </div>
      <SliderLibros />
      <Slideshow />
    </div>
  )
}

export default page
