import React,{ useState, useEffect} from 'react';
import './enviarPedido.css';
import { useForm } from 'react-hook-form'

const EnviarPedido = ({productosEnCarrito, setOnEnviarPedido, costoEnvio}) => {
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const enviar = () => {
    const totalProductos = productosEnCarrito.reduce((ac, prod) => ac + prod.cant, 0);
  const subTotal = productosEnCarrito.reduce((ac, prod) => ac + (prod.cant * prod.precio), 0);
  const importeTotal = Number(subTotal) + Number(costoEnvio.envio.envio)
  console.log(costoEnvio)
  
    console.log('productos en carrito: ', productosEnCarrito)
    let pedido = 'Hola, Quiero Hacer un pedido:\n';
    productosEnCarrito.forEach((pro, index) => {
      pedido += `*Producto: ${index+1}*\n`;
      pedido += `${pro.titulo}\n`
      pedido += `Cant: ${pro.cant}\n`
      pedido += `$ ${pro.precio}\n`
      pedido += `*-------------------*\n`
    })
     pedido += `Cant. Productos: ${totalProductos}\n`;
     pedido += `Total a pagar: ${importeTotal}\n`;
     pedido += `*Nombre: ${watch('nombre')}*\n`;
     pedido += `Direccion: ${watch('direccion')}\n`;
     
    
    handleEnviarWhatsApp(pedido)
  }
  
  const handleEnviarWhatsApp = (pedido) => {  
  //const mensaje = crearMensajeWhatsApp(carrito, nombre, direccion, telefono);
  
  const numeroVendedor = "541134025499"; // con código país, sin +
  const url = `https://wa.me/${numeroVendedor}?text=${encodeURIComponent(pedido)}`;
  window.open(url, "_blank");
};
  
  return (
    <div className="container-envio">
  <form 
    onSubmit={handleSubmit(enviar)}
  className="formulario-envio">
  <h4>Ingrese sus datos</h4>
    <button
      type="button"
      className="btn-cerrar"
      onClick={() => setOnEnviarPedido(false)}
    >
      ✕
    </button>

    <input type="text" placeholder="Ingrese su nombre" 
      {...register('nombre', {
        required: {
          value: true,
          message: 'Campo obligatorio'
        }
      })}
      />
      { errors.nombre?.message && <p style={{color: 'red', fontSize:'14px', marginLeft:'5px'}}>{errors.nombre.message}</p>}
    <input type="text" placeholder="Ingrese domicilio" 
    {...register('direccion', {
        required: {
          value: true,
          message: 'Campo obligatorio'
        }
      })}
      />
      { errors.direccion?.message && <p style={{color: 'red', fontSize:'14px', marginLeft:'5px'}}>{errors.direccion.message}</p>}
    <select>
      <option>Medio de pago</option>
      <option value="efectivo">Efectivo</option>
      <option value="transferencia">Transferencia</option>
      <option value="otros">Otros</option>
    </select>

    <button type="submit" className="btn-enviar">
      ENVIAR
    </button>
  </form>
</div>

  )
};
export default EnviarPedido;