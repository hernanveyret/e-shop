import { auth, db } from './config.js'
import { collection,
         onSnapshot, 
        } from "firebase/firestore";

// Escuchar cambios en tiempo real y descargarlos
export const getData = (callback) => {
  try {
    const unsubscribe = onSnapshot(collection(db,'productos'), snapshot => {
      const usuarios = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    callback(usuarios);
  })
  return unsubscribe;
  } catch (error) {
    callback([]);
  }
};

//Escuchar en tiempo real y ver las categorias
export const getDataCategorias = (callback) => {
  try {
    const unsubscribe = onSnapshot(collection(db,'categorias'), snapshot => {
      const usuarios = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    callback(usuarios);
    //console.log(usuarios)
  })
  return unsubscribe;
  } catch (error) {
    callback([]);
  }
};