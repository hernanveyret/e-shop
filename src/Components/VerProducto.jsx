import React, { useState, useEffect} from 'react'
import './verProducto.css'

const VerProducto = () => {  

  return (
    <div className="container-ver-producto">      
      <div className="card" >
        <div className="imagen"></div>
        <div className="info"></div>
      <nav className="btn-ver-producto">
        <button>+</button>
        <button>F</button>
        <button>X</button>
      </nav>
      </div>
      
    </div>
  )
};
export default VerProducto;