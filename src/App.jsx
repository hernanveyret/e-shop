import React,{ useState, useEffect, useRef} from 'react';
import { getData, getDataCategorias } from './firebase/auth.js'
import './App.css'

import InstallPrompt from './Components/InstallPrompt.jsx';
import Home from './Components/Home.jsx';
import Carrito from './Components/Carrito.jsx';

function App() {
  const [ productos, setProductos ] = useState([]);
  const [ categorias, setCategorias ] = useState([])

  const [ isLoading, setIsLoading ] = useState(true);
  const [ isHome, setIsHome ] = useState(true);
  const [ isCarrito, setIsCarrito ] = useState(false);

  const miRefScroll = useRef(null);

  useEffect(() => {    
  const unsubscribeProductos = getData(setProductos);
  const unsubscribeCategorias = getDataCategorias(setCategorias);
    
  return () => {
    if (unsubscribeProductos) unsubscribeProductos();
    if (unsubscribeCategorias) unsubscribeCategorias();
  };
}, []);

useEffect(() => {
  // Cuando ambas listas se cargan, sale del loading
  if (productos.length > 1 && categorias.length > 1 ) {
    setIsLoading(false);
  }
}, [productos, categorias]);

  useEffect(() => {
    console.log('productos: ', productos)
    console.log('Categorias: ', categorias)    
  })

  const manejarScrollArriba = () => {
    miRefScroll.current?.scrollIntoView({behavior:'smooth'})
  }
  
  return (
    <div className="container-app">
      <InstallPrompt /> { /* Pregunta para instalar la app*/}
      <header ref={miRefScroll}>
        <img src="./logo.png" alt="Imagen logo " /> e-shop
      </header>

      <nav>
        {/* Boton Home*/}
        {
          isHome ? 
            <button 
            className="btn btn-menu"
            onClick={() => { 
            setIsCarrito(false);
            setIsHome(true);
            }}
          >
            < img src="./img/shopOn.webp" alt="Icono shop" />
          </button>
          : 
          <button 
            className="btn btn-menu"
            onClick={() => { 
            setIsCarrito(false);
            setIsHome(true);
            }}
          >
            < img src="./img/shopOff.webp" alt="Icono shop" />
          </button>
        }
        

        {/* Boton Carrito*/}
       {
          isCarrito ? 
            <button 
            className="btn btn-menu"
            onClick={() => { 
            setIsCarrito(false);
            setIsHome(true);
            }}
          >
            < img src="./img/carritoOn.webp" alt="Icono shop" />
          </button>
          : 
          <button 
            className="btn btn-menu"
            onClick={() => { 
            setIsCarrito(true);
            setIsHome(false);
            }}
          >
            < img src="./img/carritoOf.webp" alt="Icono shop" />
          </button>
        }
      </nav>
       <main>
        {
        isHome && 
          <Home 
          productos={productos}
          categorias={categorias}
          isLoading={isLoading}
          setIsHome={setIsHome}
          setIsCarrito={setIsCarrito}
      />
      }
      {
        isCarrito &&
          <Carrito 
          setIsHome={setIsHome}
          setIsCarrito={setIsCarrito}
          />
      }
       </main>  
      
      <footer>
        <section className="footer-info">
          <p>e-shop</p>
          <p>America 617</p>
          <p>1134025499</p>
          <p>Lunes a Lunes 8 a 22h</p>
        </section>
        <section className="footer-programador-info">
          <div>
          <p>Dino Studio</p>
          <p>Web Development</p>
          </div>
          <img src="./img/dino.png" alt="Logo programador" />
        </section>
        </footer>
      <button className="btn-flecha-arriba" onClick={manejarScrollArriba}>
        <svg xmlns="http://www.w3.org/2000/svg" 
        height="40px" 
        viewBox="0 -960 960 960" 
        width="40px" 
        fill="white">
          <path d="M446.67-160v-513l-240 240L160-480l320-320 320 320-46.67 47-240-240v513h-66.66Z"/>
        </svg>
      </button>
      <button className="btn-whatsapp">
        <img src="./img/whatsapplogo.webp" alt='logo' />
      </button>
    </div>
  )
}

export default App
