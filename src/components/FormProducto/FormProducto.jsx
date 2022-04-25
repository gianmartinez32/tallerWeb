import React, { useEffect, useState } from "react";
import {firebase} from '../../firebase'


const FormProducto = () => {
  
  const [nombre, setnombre] = useState('')
  const [proveedor, setproveedor] = useState('')
  const [precio, setprecio] = useState('')
  const [cantidad, setcantidad] = useState('')
  const [fecha, setfecha] = useState('')
  const [descripcion, setdescripcion] = useState('')
  const [codigo, setcodigo] = useState('')
  const [producto, setproducto] = useState(null)

  useEffect(() => {
  
    setproducto({
      nombre: nombre,
      proveedor: proveedor,
      precio: precio,
      cantidad: cantidad,
      fecha: fecha,
      descripcion: descripcion,
      codigo: codigo
    })


    
  })
  

  const guardarProduc = async () => {
    
    try{
     
      const db = firebase.firestore()
     
      
      const data = await db.collection('Productos').add(producto)
      console.log(producto);

      


  }catch(error){
      console.log(error)
  }
  }

  return (
    <>
      <div className="form-control">
      <label  className="form-label">CREAR PRODUCTO</label>
        <div className="row">
          <div className="col 3">
            <label htmlFor="nombreProducto" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreProducto"
              placeholder="Pera"
              onChange={e => {setnombre(e.target.value)
              console.log(nombre);
              }}
            ></input>
          </div>
          <div className="col 3">
            <label htmlFor="descripcionProducto" className="form-label">
              Proveedor
            </label>
            <input
              type="text"
              className="form-control"
              id="descripcionProducto"
              placeholder="EMPRESA"
              onChange={e => (setproveedor(e.target.value))}
            ></input>
          </div>
          <div className="col 3">
            <label htmlFor="precio" className="form-label">
              Precio
            </label>
            <input
              type="number"
              className="form-control"
              id="precio"
              placeholder="8"
              onChange={e => (setprecio(e.target.value))}
            ></input>
          </div>
        </div>
        <div className="row">
        <div className="col 3">
            <label htmlFor="cantidad" className="form-label">
              Cantidad
            </label>
            <input
              type="number"
              className="form-control"
              id="cantidad"
              placeholder="8"
              onChange={e => (setcantidad(e.target.value))}
            ></input>
          </div>
          <div className="col 3">
            <label htmlFor="precio" className="form-label">
              FECHA VENCIMIENTO
            </label>
            <input
              type="date"
              className="form-control"
              id="fecha"
              placeholder="8"
              onChange={e => {setfecha(e.target.value)
              
              }}
            ></input>
          </div>
          <div className="col 3">
            <label htmlFor="codigo" className="form-label">
              CODIGO PRODUCTO
            </label>
            <input
              type="number"
              className="form-control"
              id="codigo"
              placeholder="8"
              onChange={e => (setcodigo(e.target.value))}
            ></input>
          </div>
        </div>
        <div className="row">
        <div className="col 3"><label htmlFor="Descripcion" className="form-label">Descripcion</label>
    <textarea className="form-control" id="Descripcion" onChange={e => (setdescripcion(e.target.value))}></textarea>
        </div>
        </div>
        <div className="d-flex justify-content-evenly">
        <button type="button" className="btn btn-success" onClick={guardarProduc}>Guardar</button>
        <button type="button" className="btn btn-danger">Cancelar</button>
        </div>
      </div>
    </>
  );
};

export default FormProducto;
