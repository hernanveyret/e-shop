import React from 'react';
import './sharedConfirm.css'

const SharedConfirm = ({ texto, setIsShared }) => {
  console.log(texto)
  return (
    <section className="container-shared">
      <div className="container-shared-text">      
        <p>{`${texto} Copiado al portapapeles`}</p>
          <button 
            type="button"
            className="btn-carrito"
          onClick={() => setIsShared(false)}> ✕</button>
      </div>
    </section>
  )
}
export default SharedConfirm;