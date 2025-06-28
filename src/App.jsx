import React,{ useState, useEffect, useRef} from 'react';
import { getData, getDataCategorias } from './firebase/auth.js'
import './App.css'

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
      <header ref={miRefScroll}>
        <img src="./logo.png" alt="Imagen logo " /> e-shop
      </header>

      <nav>
        {/* Boton Home*/}
        <button 
          className="btn btn-menu"
          onClick={() => { 
          setIsCarrito((prev) => !prev);
          setIsHome((prev) => !prev);
        }}
          >
          <svg xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="32px" 
            fill="#000000">
            <path d="M240-200h156v-234h168v234h156v-360L480-742 240-560v360Zm-28 28v-402l268-203 268 203v402H536v-234H424v234H212Zm268-299Z"/>
          </svg>
        </button>
        {/* Boton Carrito*/}
        <button 
         className="btn btn-menu"
         onClick={() => { 
          setIsHome((prev) => !prev);
          setIsCarrito((prev) => !prev);
         }}
         >
          <svg xmlns="http://www.w3.org/2000/svg" 
            height="32px" 
            viewBox="0 -960 960 960" width="24px" 
            fill="#000000">
            <path d="M296-126q-23 0-38.5-15.5T242-180q0-23 15.5-38.5T296-234q23 0 38.5 15.5T350-180q0 23-15.5 38.5T296-126Zm368 0q-23 0-38.5-15.5T610-180q0-23 15.5-38.5T664-234q23 0 38.5 15.5T718-180q0 23-15.5 38.5T664-126ZM232-746l110 232h261q9 0 16-4.5t12-12.5l103-187q6-11 1-19.5t-17-8.5H232Zm-14-28h500q27 0 40.5 21.5T760-708L654-514q-8 13-20.5 20.5T606-486H324l-50 92q-8 12-.5 26t22.5 14h422v28H296q-32 0-47.5-26.5T248-406l62-110-148-310H92v-28h88l38 80Zm124 260h280-280Z"/>
          </svg>
        </button>
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
          <p>Dino Studio WD</p>
          <img src="./img/logo-dino-studio.webp" alt="Logo programador" />
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
