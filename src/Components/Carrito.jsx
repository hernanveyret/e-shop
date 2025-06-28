import React, { useState, useEffect} from 'react'
import './carrito.css'

const Carrito = ({setIsCarrito, setIsHome}) => {
  return (
    <div className="container-carrito">
      <h4 style={{color:'grey'}}>Tu carrito esta vacio</h4>
     <main>
      <p>Productos en tu carrito</p>
     </main>
    </div>
  )
};
export default Carrito;