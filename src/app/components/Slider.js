'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import { EffectCreative } from 'swiper'

import ImageBanner1 from '../../../public/img/4.png'
import ImageBanner2 from '../../../public/img/2.png'
import ImageBanner3 from '../../../public/img/3.png'

// Import Swiper styles
import 'swiper/swiper.min.css'

import Image from 'next/image'

const Slider = () => {
  SwiperCore.use([Autoplay])
  return (
    <Swiper
      allowTouchMove={false}
      slidesPerView={1}
      autoplay={{
        delay: 2000
      }}
    >
      <SwiperSlide>
        <Image src={ImageBanner1} alt='Imagen1  Slider' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={ImageBanner2} alt='Imagen2 Slider' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={ImageBanner3} alt='Imagen3  Slider' />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
