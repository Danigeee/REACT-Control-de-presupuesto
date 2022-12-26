import React from 'react'
import { formatearFecha } from '../helpers'

const Gasto = ({gasto}) => {
    const {categoria, nombre, cantidad, id, fecha} = gasto
  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <div className='descripcion-gasto'>
            <p className='categoria'> {categoria} </p>
            <p className='nombre-gasto'> {nombre} </p>
            <p className='fecha-gasto'> 
                Agregado el : {" "}
                <span>{formatearFecha(fecha)}</span>
            </p>
            </div>
        </div>
    </div>
  )
}

export default Gasto