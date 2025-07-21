import React from 'react';
import './sharedConfirm.css'

const SharedConfirm = ({ texto, setIsShared, setIsSharedConfirm }) => {
  
  return (
    <section className="container-shared">
      <div className="container-shared-text">      
        <p>{`${texto} Copiado al portapapeles`}</p>
          <button 
            type="button"
            className="btn-carrito"
            onClick={() => {
              if (typeof setIsSharedConfirm === 'function') {
                setIsSharedConfirm(false);
              } else if (typeof setIsShared === 'function') {
                setIsShared(false);
              }
            }}
            > ✕</button>
      </div>
    </section>
  )
}
export default SharedConfirm;