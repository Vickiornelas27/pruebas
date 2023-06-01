'use client'
import { Modal } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useRef } from "react";
//f88633 Color primario

// Array de productos
let productsp = [
  {
    id: 1,
    name: "Hunger Games",
    brand: "Suzanne Collins",
    image: "/img/testest1.jpg",
    description: "Los juegos del hambre es el primer libro de la trilogía homónima escrita por la autora estadounidense Suzanne Collins. La editorial Scholastic Press lo publicó el 14 de septiembre de 2008.",
    quantity: 1,
    price: 100,
  },
  {
    id: 2,
    name: "Tigerman",
    brand: "Nick Harkaway",
    image: "/img/testest3.jpg",
    description: "El sargento británico Lester Ferris, veterano de Iraq y Afganistán, es un buen hombre y está a punto de retirarse. Por ello, es destinado a la isla de Mancreu, una antigua colonia inglesa remota y tranquila en un limbo legal que descansa sobre nubes tóxicas de desechos y que se enfrenta a una destrucción inminente.",
    quantity: 1,
    price: 100,  
  },
  {
    id: 3,
    name: "A teaspoon of earth and sea",
    brand: "Dina Nayeri",
    image: "/img/testest2.jpg",
    description: "''A Teaspoon of Earth and Sea is pure magic: lyrical, captivating, funny, and heartbreaking. Entering the world of the intriguing Saba Hafezi and her friends in a seaside village in northern Iran, I lost my heart.''",
    quantity: 1,
    price: 100,
  },
];

// Importaciones de bibliotecas y componentes
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// Este código es para Next.js. En React JS, se debe eliminar esta línea
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// Este código es para React JS. Eliminar esta línea en Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slideshow = () => {
  const [modalShow, setModalShow] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState({
    id: null,
    name: '',
    brand: '',
    price: 0,
    quantity: 1, // Valor predeterminado de la cantidad
  });
  
  const [cartItems, setCartItems] = useState([]);
  const [cartModalShow, setCartModalShow] = useState(false);
   // Función para guardar el carrito en una cookie
   const saveCartToCookie = (cartItems) => {
    // Convertir el carrito a una cadena JSON
    const cartItemsJSON = JSON.stringify(cartItems);

    // Guardar la cadena JSON en una cookie con nombre "cart"
    document.cookie = `cart=${cartItemsJSON}; expires=Thu, 31 Dec 2023 23:59:59 GMT; path=/`;
  };

  // Función para recuperar el carrito desde una cookie
  const getCartFromCookie = () => {
    // Obtener el valor de la cookie con nombre "cart"
    const cookieValue = document.cookie.match('(^|;)\\s*cart\\s*=\\s*([^;]+)');

    if (cookieValue) {
      // Si se encuentra la cookie, obtener la cadena JSON del carrito
      // el 2 se refiere al indice xd
      const cartItemsJSON = decodeURIComponent(cookieValue[2]);

      // Convertir la cadena JSON a un objeto de JavaScript
      const cartItems = JSON.parse(cartItemsJSON);

      return cartItems;
    }

    // Si no se encuentra la cookie o está vacía, retornar un carrito vacío
    return [];
  };

  useEffect(() => {
    // Recuperar el carrito desde la cookie al cargar la página
    const retrievedCartItems = getCartFromCookie();
    
    setCartItems(retrievedCartItems);
  }, []);

  // Actualizar el carrito en la cookie cada vez que cambie
  useEffect(() => {
    saveCartToCookie(cartItems);
  }, [cartItems]);

  // Controlador para abrir el modal y establecer el producto seleccionado
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalShow(true);
  };
  const [showCookieModal, setShowCookieModal] = useState(true);
  
  const addToCart = () => {
    const existingItem = cartItems.find((item) => item.id === selectedProduct.id);
  
    if (existingItem) {
      // Si el producto ya existe en el carrito, actualizar su cantidad
      const updatedItem = { ...existingItem };
      updatedItem.quantity += selectedProduct.quantity;
      updatedItem.totalPrice = updatedItem.price * updatedItem.quantity;
  
      const updatedCartItems = cartItems.map((item) =>
        item.id === selectedProduct.id ? updatedItem : item
      );
  
      setCartItems(updatedCartItems);
    } else {
      // Si el producto no existe en el carrito, agregarlo
      const updatedProduct = {
        ...selectedProduct,
        totalPrice: selectedProduct.price * selectedProduct.quantity,
      };
  
      setCartItems([...cartItems, updatedProduct]);
    }
  
    setCartModalShow(true);
    setModalShow(false);
    setSelectedProduct({
      id: null,
      name: "",
      brand: "",
      price: 0,
      quantity: 1,
    });
  };
  const total = cartItems.reduce((accumulator, item) => accumulator + item.totalPrice, 0);
  const totalQuantity = cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0);

  const removeItemFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };
  
  const updateQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        const updatedItem = { ...item, quantity: newQuantity };
        updatedItem.totalPrice = updatedItem.price * updatedItem.quantity;
        return updatedItem;
      }
      return item;
    });
  
    const newTotalQuantity = updatedCartItems.reduce((total, item) => total + item.quantity, 0);
    const newTotal = updatedCartItems.reduce((total, item) => total + item.totalPrice, 0);
  
    setCartItems(updatedCartItems);
  };
  

  // Opciones de configuración del carrusel de Owl Carousel
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div className="row no-gutters">
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
        id="owl-carousel-products"
      >
        <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
          {/* Componente Owl Carousel */}
          <OwlCarousel
            className="owl-theme"
            loop
            margin={4}
            nav={true}
            navText={[
              '<img src="/img/Arrow_left.png" />',
              '<img src="/img/Arrow_right.png" />',
            ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            {/* Mapeo de los productos */}
            {productsp && productsp.length > 0
              ? productsp.map((product) => {
                  return (
                    <>
                      <div
                        id="featuredProducts"
                        className="item float-left w-100"
                        key={product.name}
                      >
                        <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                          <button
                            className="product float-left"
                            onClick={() => handleProductClick(product)}
                          >
                            <span className="image text-center">
                              <img
                                id={"img" + product.id}
                                src={product.image}
                                alt={product.name}
                                title={product.name}
                              />
                            </span>
                            <span className="w-100 text-center mt-1">
                              <h5 className="brand text-capitalize float-left">
                                {product.brand}
                              </h5>
                              <span className="name">{product.name}</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })
              : ""}
          </OwlCarousel>
        </ul>
      </div>
      {/* Modal de aceptación de cookies */}
<Modal
  show={showCookieModal}
  onHide={() => setShowCookieModal(false)}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <div
    style={{
      backgroundColor: "white",
      borderRadius: 20,
      maxWidth: "90vw",
      maxHeight: "90vh",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: 20,
    }}
  >
    <h2 style={{ textAlign: "center" }}>Aceptación de cookies</h2>
    <p>Este sitio web utiliza cookies para mejorar su experiencia de navegación. Al hacer clic en 'Aceptar', usted acepta el uso de cookies de acuerdo con nuestra Política de Cookies. Para obtener más información sobre cómo utilizamos las cookies y cómo puede gestionarlas, consulte nuestra Política de Privacidad.</p>
    <div style={{ marginTop: "auto", textAlign: "center" }}>
      <button onClick={() => setShowCookieModal(false)}>Aceptar</button>
    </div>
  </div>
</Modal>
      {/* Modal para mostrar detalles del producto */}
      <Modal
  show={modalShow}
  onHide={() => setModalShow(false)}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <div
    style={{
      backgroundColor: "white",
      borderRadius: 20,
      maxWidth: "90vw",
      maxHeight: "90vh",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: 20,
    }}
  >
    <div style={{ display: "flex", flex: 1 }}>
      <div style={{ marginRight: 20 }}>
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            height: 300,
            width: 300,
            objectFit: "contain",
            borderRadius: 20,
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <p
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
            whiteSpace: "nowrap",
          }}
        >
          {selectedProduct.name}
        </p>
        <p
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          Autor: {selectedProduct.brand}
        </p>
        <p style={{ fontSize: 14 }}>{selectedProduct.description}</p>
        <div style={{ marginTop: "auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label style={{ marginRight: 10 }}>Cantidad:</label>
            <input
              type="number"
              min="1"
              value={selectedProduct.quantity}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,
                  quantity: parseInt(e.target.value),
                })
              }
              style={{ width: 50, marginRight: 10 }}
            />
          </div>
          <button onClick={() => addToCart(selectedProduct)}>
            Agregar al carrito
          </button>
          <button onClick={() => setModalShow(false)}>Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</Modal>
<div style={{ display: "flex", justifyContent: "center" }}>
  <button 
    onClick={() => setCartModalShow(true)}
    style={{
      border: 'none',
      borderRadius: '50px',
      padding: '5px 10px',
      background: '#f7f7f7',
      color: '#333',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '14px',
      width: 'fit-content',
    }}
  >
    Ver carrito
  </button>
</div>
{/* Modal del carrito de compras */}
<Modal
  show={cartModalShow}
  onHide={() => {
    setModalShow(false);
    setCartModalShow(false);
  }}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <div
    style={{
      backgroundColor: "white",
      borderRadius: 20,
      maxWidth: "90vw",
      maxHeight: "90vh",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: 20,
    }}
  >
    <h2 style={{ textAlign: "center" }}>Carrito de compras</h2>
    {/* Renderizar los elementos del carrito de compras */}
    {cartItems.map((item) => (
      <div
        key={item.id}
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={item.image} alt={item.name} style={{ maxWidth: 100, marginRight: 20 }} />
          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p>Autor: {item.brand}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label style={{ marginRight: 10 }}>Cantidad:</label>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                style={{ width: 50, marginRight: 10 }}
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => removeItemFromCart(item.id)}
          style={{ fontSize: "12px", padding: "5px 10px", width: "60px" }}
        >
          Eliminar
        </button>
      </div>
    ))}
    <p>Cantidad total de libros: {totalQuantity}</p>
    <p>Total : {total}</p>
    <div style={{ marginTop: "auto", textAlign: "center" }}>
      <button onClick={() => setCartModalShow(false)}>Cerrar</button>
    </div>
  </div>
</Modal>
    </div>
  );
};

export default Slideshow;
