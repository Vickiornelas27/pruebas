'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import { EffectCreative } from 'swiper'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Libro1 from '../../../public/libros/castillo.png'
import Libro2 from '../../../public/libros/cumbres.png'
import Libro3 from '../../../public/libros/harry-potter.png'
import Libro4 from '../../../public/libros/ladrona.png'
import Libro5 from '../../../public/libros/las-ventajas.png'
import Libro6 from '../../../public/libros/principito.png'

// Import Swiper styles
import 'swiper/swiper.min.css'

import Image from 'next/image'
import { useState } from 'react'

const SliderLibros = () => {
  SwiperCore.use([Autoplay])

  const [slideIndex, setSlideIndex] = useState(0)

  const libros = [Libro1, Libro2, Libro3, Libro4, Libro5, Libro6]

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    swipe: false,
    beforeChange: (current, next) => setSlideIndex(next)
  }
  return (
    <div className='w-[100%] h-[50rem] mt-10 mb-5 block p-10  mx-auto'>
      <h1 className='text-5xl font-bold text-center uppercase'>
        Los más vendidos
      </h1>
      <Slider {...setting}>
        {libros.map((libro, index) => (
          <div key={index}>
            <Image
              className={
                index === slideIndex
                  ? 'mx-auto w-[25rem] h-[12rem] sm:w-[20rem] sm:h-[20rem] md:w-[20rem]   md:h-[35rem] xl:w-[30rem] xl:h-[45rem] rounded-md opacity-100 scale-[1]  sm:scale-[0.9] blur-[0] my-5'
                  : 'mx-auto w-[25rem] h-[12rem] sm:w-[20rem] sm:h-[20rem] md:w-[20rem]  md:h-[35rem] xl:w-[30rem]  xl:h-[45rem] rounded-md opacity-50 scale-[0.7] transition-[0.5s] blur-[5px] my-5'
              }
              src={libro}
              alt={`Libro Slider ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderLibros
