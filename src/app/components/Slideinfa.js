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
import { red } from '@nextui-org/react'

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
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    swipe: false,
    beforeChange: (current, next) => setSlideIndex(next)
  }

  return (
    <div className='w-[95%] h-[50rem] mt-5 mb-5 block p-2 mx-auto' style={{ justifyContent: "center" }}>
      <h1 className='mx-auto w-[90%] text-3xl font-bold text-center uppercase' style={{ color: red }}>
        !Los cuentos mas populares!
      </h1>
      <Slider {...setting}>
        {libros.map((libro, index) => (
          <div key={index}>
            <Image
              className={
                index === slideIndex
                  ? 'mx-auto my-auto w-[25rem] h-[12rem] xs:w-[15rem] xs:h-[10rem] sm:w-[20rem] sm:h-[18rem] md:w-[23rem]  md:h-[28rem] xl:w-[30rem] xl:h-[45rem] rounded-md opacity-100 scale-[1]  sm:scale-[0.9] blur-[0] '
                  : 'mx-auto my-auto w-[25rem] h-[12rem] xs:w-[15rem] xs:h-[10rem] sm:w-[20rem] sm:h-[18rem] md:w-[23rem]  md:h-[28rem] xl:w-[30rem]  xl:h-[45rem] rounded-md opacity-50 scale-[0.7] transition-[0.5s] blur-[5px]'
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
