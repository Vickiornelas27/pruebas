import cardList from '../data';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Libros  = () => {
  return (
    <>
 <div>
              <h2>NextJs Carousel - GeeksforGeeks</h2>
              <Carousel>
                  <div>
                      <img src="/1.png" alt="image1"/>
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                      <img src="/2.png" alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <img src="/3.png" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="/4.png" alt="image4"/>
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="/5.png" alt="image5"/>
                      <p className="legend">Image 5</p>
  
                  </div>
              </Carousel>
</div>
    
        {/*  <h1 className='font-bold text-5xl text-center my-5'>Nuestra colección</h1>
        <div className='mx-auto'>
        <h1 className='font-bold text-3xl text-center'>Drama</h1>      
        <div className='grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5  gap-6 align-middle justify-items-center m-10 '>
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
        <div className='grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5  gap-6 align-middle justify-items-center m-10 '>
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
        <div className='grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5  gap-6 align-middle justify-items-center m-10 '>
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
        </div>
                
        </div>  */}
  </>

  )
}
export default Libros 