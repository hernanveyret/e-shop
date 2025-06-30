import React,{ useState, useEffect, useRef} from 'react';
import { getData, getDataCategorias } from './firebase/auth.js'
import './App.css'

import InstallPrompt from './Components/InstallPrompt.jsx';
import Home from './Components/Home.jsx';
import Carrito from './Components/Carrito.jsx';

function App() {

  const favoritosLocal = localStorage.getItem('e-shop-favoritos');
  

  const [ productos, setProductos ] = useState([]);
  const [ categorias, setCategorias ] = useState([])
  const [ favoritos, setFavoritos ] = useState(favoritosLocal ? JSON.parse(favoritosLocal) : [])
  const [ productosSeleccionados, setProductosSeleccionados] = useState([])

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

  const manejarScrollArriba = () => {
    miRefScroll.current?.scrollIntoView({behavior:'smooth'})
  }

  const addFavorito = (e) => {
    const checkFavorito = favoritos.find(check => check.id === e);
    if (!checkFavorito) {
      const filter = productos.find(fav => fav.id === e)
      setFavoritos([...favoritos, filter]);
    }else {
      // si ya esta el producto en favoritos lo elimina
      const filterCopy = favoritos.filter(fav => fav.id !== e)
      setFavoritos(filterCopy)
    }
  }

  useEffect(() => {
    localStorage.setItem('e-shop-favoritos',JSON.stringify(favoritos)); 
  },[favoritos])
  
  return (
    <div className="container-app">
      <InstallPrompt /> { /* Pregunta para instalar la app*/}
      <header ref={miRefScroll}>
        <img src="./logo.png" alt="Imagen logo " /> e-shop
        <div className="btn-menu-header">
          <svg xmlns="http://www.w3.org/2000/svg" 
          height="24px" 
          viewBox="0 -960 960 960"
          width="24px" 
          fill="#000000"><path d="M160-269.23v-40h640v40H160ZM160-460v-40h640v40H160Zm0-190.77v-40h640v40H160Z"/>
          </svg>
        </div>
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
          addFavorito={addFavorito}
          setFavoritos={setFavoritos}
          favoritos={favoritos}
          productosSeleccionados={productosSeleccionados}
          setProductosSeleccionados={setProductosSeleccionados}
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
