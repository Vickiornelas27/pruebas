'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image'


const Slideinfa = () => {
    SwiperCore.use([Autoplay])
    return (
        <div className="container ">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                autoplay={{ delay: 1900 }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    type: "progressbar",
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                momdules={[EffectCoverflow, Pagination, Navigation]}
                className='swiper_container'
            >
                <SwiperSlide >
                    <Image src="/img/libros_niños/Adivina-quiero_SanMcBratney.jpg" alt='Imagen1  Slider' width={300} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/img/libros_niños/Buscadora-Tesoros_MontserratBalada.jpg" alt='Imagen2 Slider' width={400} height={700} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/img/libros_niños/AQueSabeLaLuna_MichaelGrajniec.jpg" alt='Imagen3  Slider' width={300} height={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/img/libros_niños/DeMayorQuieroSer_Feliz_AnnaMoratoGarcia.jpg" alt='Imagen4  Slider' width={300} height={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/img/libros_niños/Elmer_DavidMckee.jpg" alt='Imagen5  Slider' width={300} height={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/img/libros_niños/LaOvejitaQueVinoACenar_SS_JD.jpg" alt='Imagen6  Slider' width={300} height={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/img/libros_niños/MATILDA_RoaldDahl.jpg" alt='Imagen7  Slider' width={300} height={200} />
                </SwiperSlide>

                <div className='slider-controler'>
                    <div className='swiper-button-prev slider-arrow'>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className='swiper-button-next slider-arrow'>
                        <ion-icon name="arrow-foward-outline"></ion-icon>
                    </div>
                    <div className='swiper-pagination'>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}
export default Slideinfa