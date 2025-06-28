import React, { useState, useEffect} from 'react'
import './carrito.css'

const Carrito = ({setIsCarrito, setIsHome}) => {
  const [ productosCarrito, setProductosCarrito ] = useState([])
  return (
    <div className="container-carrito">     
      {
        productosCarrito.length < 0 ? 
          <p>Tus productos</p>
        :
        <img src="./img/carritoVacio.webp" alto="Logo carrito vacio" />
      }
    </div>
  )
};
export default Carrito;