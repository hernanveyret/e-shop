import React from 'react';

const BannerRepetido = () => {
  return (
    <div className="contenedor-add-producto">
      <div classname="card-add-producto">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill="#000000">
              <path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/>
          </svg>
        </button>
        <p>Producto ya agregado</p>
      </div>
    </div>
  )
};
export default BannerRepetido;