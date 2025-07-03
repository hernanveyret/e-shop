import React, { useEffect } from 'react';
import './carrito.css';

const Carrito = ({ setIsCarrito, setIsHome, productosEnCarrito }) => {
  useEffect(() => {
    console.log(productosEnCarrito);
  }, [productosEnCarrito]);

  const subtotal = productosEnCarrito.reduce((acc, prod) => acc + prod.precio, 0);
  const envio = subtotal > 10000 ? 0 : 1500; // ejemplo: envío gratis si pasa $10.000
  const total = subtotal + envio;

  return (
    <div className="container-carrito">
      {productosEnCarrito.length > 0 ? (
        <>
          <div className="carrito-izquierda">
            {productosEnCarrito.map((pro) => (
              <section className="contenedor-productos-carrito" key={pro.id}>
                <div className="card-carrito">
                  <div className="img-carrito">
                    <img src={pro.urlImg} alt={pro.titulo} />
                  </div>
                  <div className="info-carrito">
                    <div>
                      <p className="titulo">{pro.titulo}</p>
                      <p className="precio">${pro.precio}</p>
                    </div>
                    <div className="btn-nav">
                      
                      { /* boto +*/}
                      <button 
                      className="btn-carrito"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" 
                          height="24px"
                          viewBox="0 -960 960 960" 
                          width="24px" fill="#000000">
                            <path d="M466-466H252v-28h214v-214h28v214h214v28H494v214h-28v-214Z"/>
                        </svg>
                      </button>
                      <p>{pro.cant}</p>
                        { 
                          productosEnCarrito.length === 1 ?
                           // boton tacho de basura
                            <button
                              className="btn-carrito"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" 
                                height="24px" 
                                viewBox="0 -960 960 960" width="24px" 
                                fill="#000000">
                                <path d="M312-172q-25 0-42.5-17.5T252-232v-488h-40v-28h148v-28h240v28h148v28h-40v488q0 26-17 43t-43 17H312Zm368-548H280v488q0 14 9 23t23 9h336q12 0 22-10t10-22v-488ZM402-280h28v-360h-28v360Zm128 0h28v-360h-28v360ZM280-720v520-520Z"/>
                              </svg>
                            </button>
                          :
                            // boton restar cantidad de producto unitario
                          <button
                            className="btn-carrito"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" 
                              height="24px" 
                              viewBox="0 -960 960 960" 
                              width="24px" 
                              fill="#000000">
                                <path d="M252-466v-28h456v28H252Z"/>
                            </svg>
                          </button>

                        }
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <aside className="contenedor-importe">
            <h3>Resumen de compra</h3>
            <p><strong>Subtotal:</strong> ${subtotal.toLocaleString()}</p>
            <p><strong>Envío:</strong> ${envio.toLocaleString()}</p>
            <p>Total Pro: {productosEnCarrito.length}</p>
            <p><strong>Total:</strong> ${total.toLocaleString()}</p>
            <button
                              className="btn-vaciar-carrito"
                            >
                              VACIAR CARRITO
                              <svg xmlns="http://www.w3.org/2000/svg" 
                                height="24px" 
                                viewBox="0 -960 960 960" width="24px" 
                                fill="white">
                                <path d="M312-172q-25 0-42.5-17.5T252-232v-488h-40v-28h148v-28h240v28h148v28h-40v488q0 26-17 43t-43 17H312Zm368-548H280v488q0 14 9 23t23 9h336q12 0 22-10t10-22v-488ZM402-280h28v-360h-28v360Zm128 0h28v-360h-28v360ZM280-720v520-520Z"/>
                              </svg>
                            </button>
            <button className="btn-pagar">PAGAR</button>
          </aside>
        </>
      ) : (
        <img src="./img/carritoVacio.webp" alt="Logo carrito vacío" className="carrito-vacio" />
      )}
    </div>
  );
};

export default Carrito;
