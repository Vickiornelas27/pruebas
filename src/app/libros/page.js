'use client'
import { librosDrama, librosFantasia, librosTerror } from "../data";
//import cardList from '../data';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SimpleSlider from './carousel';


const Libros = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>

        <h1 className='font-bold text-5xl text-center my-5 '>Nuestra colección</h1>
        <div className='mx-auto'>
        <Slider {...settings}>
          <section className="slider-grid">
            <h2>Drama</h2>
            <div className="slider">
              {librosDrama.map((libro) => (
                <div className="card" key={libro.id}>
                  <img className="card-image" src={libro.imagen} alt={libro.titulo} />
                  <div className="card-details">
                    <h3>{libro.titulo}</h3>
                    <p>{libro.autor}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Slider>
       <Slider {...settings}> 
      <section className="slider-grid">
        <h2>Fantasía</h2>
        <div className="slider">
          {librosFantasia.map((libro) => (
            <div className="card" key={libro.id}>
              <img className="card-image" src={libro.imagen} alt={libro.titulo} />
              <div className="card-details">
                    <h3>{libro.titulo}</h3>
                    <p>{libro.autor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
        </Slider>
        <Slider {...settings}>      
          <section className="slider-grid">
            <h2>Terror</h2>
            <div className="slider">
              {librosTerror.map((libro) => (
                <div className="card" key={libro.id}>
                  <img className="card-image" src={libro.imagen} alt={libro.titulo} />
                  <div className="card-details">
                        <h3>{libro.titulo}</h3>
                        <p>{libro.autor}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
      </Slider>
      <style jsx>{`
        .slider {
            justify-content: center;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            padding: 16px;
        }
        h1{
          justify-content: center;
        }

        .card {
            justify-content: flex-start;
            display: flex;
            flex-direction: column;
            align-items: center;

            background-color: #f4f4f4;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            height: 400px;
            position: relative;
            
        }
        .card-image {
          width: 100%;
          height: 84.3%;
          object-fit: cover;
          border-radius: 5%;
          }

        section {
          margin-bottom: 40px;
        }

        h2 {
          margin-bottom: 16px;
        }
        @media (min-width: 320px) and (max-width: 767px) {
          .slider-grid {
            grid-template-columns: repeat(3, minmax(200px, 1fr));
            grid-gap: 20px; /* Espaciado entre tarjetas */
          }
          .card {
            width: 200px; /* Ancho de la tarjeta en resoluciones aún más pequeñas */
            height: 300px; /* Altura de la tarjeta en resoluciones aún más pequeñas */
          }
        }
        .card-details {
          margin-top: auto;
          position: absolute;
          bottom: 0;
          padding: 10px;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Color de fondo para los detalles de la tarjeta */
          color: white; /* Color del texto para los detalles de la tarjeta */
        }
        
        /* Tablets */
        @media (min-width: 768px) and (max-width: 1023px) {
          .slider-grid {
            grid-template-columns: repeat(2, minmax(230px, 1fr));
            grid-gap: 20px; /* Espaciado entre tarjetas */
          }
          .card {
            width: 230px; /* Ancho de la tarjeta en resoluciones de tablet */
            height: 345px; /* Altura de la tarjeta en resoluciones de tablet */
          }
        }
        
        /* Desktops y laptops */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .slider-grid {
            grid-template-columns: repeat(3, minmax(200px, 1fr));
            grid-gap: 20px; /* Espaciado entre tarjetas */
          }
          .card {
            width: 200px; /* Ancho de la tarjeta en resoluciones de escritorio y laptops */
            height: 360px; /* Altura de la tarjeta en resoluciones de escritorio y laptops */
          }
        }
        
        /* Pantallas grandes */
        @media (min-width: 1440px) and (max-width: 1919px) {
          .slider-grid {
            grid-template-columns: repeat(4, minmax(200px, 1fr));
            grid-gap: 20px; /* Espaciado entre tarjetas */
          }
          .card {
            width: 290px; /* Ancho de la tarjeta en resoluciones de pantallas grandes */
            height: 430px; /* Altura de la tarjeta en resoluciones de pantallas grandes */
          }
        }
        
        /* Pantallas extra grandes */
        @media (min-width: 1920px) {
          /* Estilos para pantallas extra grandes */
        }
        @media (min-width: 768px) {
            
            }
            
          }
          @media (max-width: 480px) {
            
          }
      
          @media (min-width: 1024px) {
           

          }

      `}</style>

        {/* <h1 className='font-bold text-3xl text-center'>Drama</h1>      
            <div className='grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4  gap-6 align-middle justify-items-center m-10 '>
                {cardList.map(card=>(
                    card.category  == 'Drama' ? 
                        <div className='shadow-lg rounded-lg bg-white' style={{width: '300px'}}>
                            <img className='rounded-t-lg' src={card.img} alt="" style={{width: '500px', height: '300px'}} />
                            <div className='p-5' width="50">
                                <h3 className='text 3xl font-bold mb-3 '>{card.title}</h3>
                                <p className='text-lg font-normal'>{card.text}</p>
                            </div>
                        </div>
                        : ""
                ))}
            </div>

        <h1 className='font-bold text-3xl text-center '>Terror</h1>      
        <div className='grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4  gap-6 align-middle justify-items-center m-10 '>
        {cardList.map(card=>(
                card.category  == 'Terror' ? 
                    <div className='shadow-lg rounded-lg bg-white' style={{width: '300px'}}>
                        <img className='rounded-t-lg' src={card.img} alt="" style={{width: '500px', height: '300px'}} />
                        <div className='p-5' width="50">
                            <h3 className='text 3xl font-bold mb-3 '>{card.title}</h3>
                            <p className='text-lg font-normal'>{card.text}</p>
                        </div>
                    </div>
                    : ""
            ))}
        </div>
        <h1 className='font-bold text-3xl text-center '>Fantasía</h1>      
        <div className='grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4  gap-6 align-middle justify-items-center m-10 '>
        {cardList.map(card=>(
                card.category  == 'Fantasia' ? 
                    <div className='shadow-lg rounded-lg bg-white' style={{width: '300px'}}>
                        <img className='rounded-t-lg' src={card.img} alt="" style={{width: '500px', height: '300px'}} />
                        <div className='p-5' width="50">
                            <h3 className='text 3xl font-bold mb-3 '>{card.title}</h3>
                            <p className='text-lg font-normal'>{card.text}</p>
                        </div>
                    </div>
                    : ""
            ))}
        </div> */}
                
        </div> 
  </>

  )
}
export default Libros