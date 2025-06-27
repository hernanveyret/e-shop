import { useState, useEffect } from 'react'
import { getData, getDataCategorias } from './firebase/auth.js'
import './App.css'

import Home from './Components/Home.jsx';

function App() {
  const [ productos, setProductos ] = useState([]);
  const [ categorias, setCategorias ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true);

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
  
  return (
    <div className="container-app">
      <Home 
        productos={productos}
        categorias={categorias}
        isLoading={isLoading}
      />
    </div>
  )
}

export default App
