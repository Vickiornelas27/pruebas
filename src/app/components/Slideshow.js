'use client'
import { Modal } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
//f88633 Color primario

let productsp = [
  {
    id: 1,
    name: 'Hunger Games',
    brand: 'Suzanne Collins',
    //url: "products-number-1",
    image: '/img/testest1.jpg',
    description:
      'Los juegos del hambre es el primer libro de la trilogía homónima escrita por la autora estadounidense Suzanne Collins. La editorial Scholastic Press lo publicó el 14 de septiembre de 2008.'
  },
  {
    id: 2,
    name: 'Un capitan de 15 años',
    brand: 'Julio Verne',
    //url: "products-number-1",
    image: '/img/testest3.jpg',
    description:
      "Un capitán de quince años es una novela del escritor francés Julio Verne, prepublicada por entregas en la Magasin d'Éducation et de Récréation desde el 1 de enero hasta el 15 de diciembre de 1878, publicada en dos volúmenes y en volumen doble el 18 de noviembre de ese mismo año."
  },
  {
    id: 3,
    name: 'A teaspoon of earth and sea',
    brand: 'Dina Nayeri',
    //url: "products-number-1",
    image: '/img/testest2.jpg',
    description:
      "''A Teaspoon of Earth and Sea is pure magic: lyrical, captivating, funny, and heartbreaking. Entering the world of the intriguing Saba Hafezi and her friends in a seaside village in northern Iran, I lost my heart.''"
  }
]
var $ = require('jquery')
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
})

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slideshow = () => {
  const [modalShow, setModalShow] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setModalShow(true)
  }

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    //dots: true,
    autoplay: true,
    smartSpeed: 1000,
    navClass: ['owl-prev', 'owl-next'],
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>'
    ],
    //Modicar resoluciones
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      600: {
        items: 2
      },
      700: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  }

  return (
    <div className='row no-gutters'>
      <h1 className='text-5xl font-bold text-center uppercase'>Novedades</h1>
      <div
        className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-1 pb-2 bg-white'
        id='owl-carousel-products'
      >
        <ul id='owl-carousel-ul' className='owl-carousel owl-loaded owl-drag'>
          <OwlCarousel
            className='owl-theme'
            loop
            margin={4}
            nav={true}
            navText={[
              '<img src="/img/Arrow_left.png" />',
              '<img src="/img/Arrow_right.png" />'
            ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            {productsp && productsp.length > 0
              ? productsp.map((product) => {
                  return (
                    <>
                      <div
                        id='featuredProducts'
                        className='item float-left w-100'
                        key={product.name}
                      >
                        <div className='productListing col-lg-5th col-md-4 col-sm-6 col-xs-12'>
                          <button
                            className='product float-left'
                            onClick={() => handleProductClick(product)}
                          >
                            {/* contenido del botón */}
                            <span className='image text-center'>
                              <img
                                id={'img' + product.id}
                                src={product.image}
                                alt={product.name}
                                title={product.name}
                              />
                            </span>
                            <span className='w-100 text-center mt-1 '>
                              <h5 className='brand text-capitalize float-left'>
                                {product.brand}
                              </h5>
                              <span className='name'>{product.name}</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </>
                  )
                })
              : ''}
          </OwlCarousel>
        </ul>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            maxWidth: '90vw',
            maxHeight: '90vh',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: 20
          }}
        >
          <div style={{ display: 'flex', flex: 1 }}>
            <div style={{ marginRight: 20 }}>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  height: '300',
                  width: '300',
                  objectFit: 'contain',
                  borderRadius: 20
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 10,
                  whiteSpace: 'nowrap'
                }}
              >
                {selectedProduct.name}
              </p>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginBottom: 5
                }}
              >
                Autor: {selectedProduct.brand}
              </p>
              <p style={{ fontSize: 14 }}>{selectedProduct.description}</p>
              <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                <button onClick={() => setModalShow(false)}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
//Modal esquinas redondas, boton que no sea tan grande y que sea ovalado
//
export default Slideshow
