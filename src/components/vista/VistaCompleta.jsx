import React, { useState } from 'react'
import FormProducto from '../FormProducto/FormProducto'
import ListProductos from '../ListProductos/ListProductos'

const VistaCompleta = () => {

    const [creacion, setcreacion] = useState(false)
  return (
    <>
        <div className='container container-fluid'>
            <header className='d-flex'>PRODUCTOS</header>

            <div className='row'>
                <div className='col-12'>
                    <FormProducto />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <ListProductos />
                </div>
            </div>

        </div>
    </>
  )
}

export default VistaCompleta