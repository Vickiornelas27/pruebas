'use client'

// Import Swiper React components
import SwiperCore, { Autoplay } from 'swiper'
//import { EffectCreative } from 'swiper'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Libro1 from '../../../public/libros_niños/Adivina-quiero_SanMcBratney.jpg'
import Libro2 from '../../../public/libros_niños/AQueSabeLaLuna_MichaelGrajniec.jpg'
import Libro3 from '../../../public/libros_niños/Buscadora-Tesoros_MontserratBalada.jpg'
import Libro4 from '../../../public/libros_niños/DeMayorQuieroSer_Feliz_AnnaMoratoGarcia.jpg'
import Libro5 from '../../../public/libros_niños/Elmer_DavidMckee.jpg'
import Libro6 from '../../../public/libros_niños/FrayPericoySuBorrico_JuanMuñozMartin.jpg'
import Libro7 from '../../../public/libros_niños/MATILDA_RoaldDahl.jpg'
import Libro8 from '../../../public/libros_niños/monstruo-colores_Ana.jpg'
import Libro9 from '../../../public/libros_niños/Principito_AntoinedeSaint-Exupery.jpg'

// Import Swiper styles
import 'swiper/swiper.min.css'

import Image from 'next/image'
import { useState } from 'react'

const Slideinfa = () => {
  SwiperCore.use([Autoplay])

  const [slideIndex, setSlideIndex] = useState(0)

  const libros = [
    Libro1,
    Libro2,
    Libro3,
    Libro4,
    Libro5,
    Libro6,
    Libro7,
    Libro8,
    Libro9
  ]

  const setting = {
    dots: true,
    infinite: true,
    responsiveClass: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    swipe: false,
    /*responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],*/
    beforeChange: (current, next) => setSlideIndex(next)
  }

  return (
    <div className='w-[92%] h-[48rem] my-[5rem] block p-5 pb-0 mx-auto'>
      <h1 className='text-5xl font-bold text-center uppercase'>
        Los libros mas populares!
      </h1>
      <Slider {...setting}>
        {libros.map((libro, index) => (
          <div key={index}>
            <Image
              className={
                index === slideIndex
                  ? 'w-[100%] h-[40rem] rounded-md opacity-90 scale-[0.85] blur-[0]'
                  : 'w-[100%] h-[40rem] rounded-md opacity-40 scale-[0.7] transition-[0.5s] blur-[5px]'
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
export default Slideinfa
