import { auth, db } from './config.js'
import { collection,
         onSnapshot, 
         doc
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

export const getEnvio = (callback) => {
  try {
    const envioRef = doc(db, 'envio', 'precio');
    
    const unsubscribe = onSnapshot(envioRef, (docSnap) => {
      if (docSnap.exists()) {
        callback({ id: docSnap.id, ...docSnap.data() });
      } else {
        callback(null); // o {} si preferís
      }
    });

    return unsubscribe;
  } catch (error) {
    console.error("⛔ Error al obtener el precio de envío:", error);
    callback(null);
  }
};
