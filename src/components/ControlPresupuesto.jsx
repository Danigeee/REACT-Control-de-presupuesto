import React, { useEffect, useState } from 'react'
import { formatearCantidad } from '../helpers'

const ControlPresupuesto = ({presupuesto,gastos}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    
    useEffect(() => {
      const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
      const totalDisponible = presupuesto -totalGastado
      
      setDisponible(totalDisponible)
      setGastado(totalGastado)
    }, [gastos])
    

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <p>Grafica aqui</p>

        <div className='contenido-presupuesto'>
            <p>
                <span> Presupuesto </span> {formatearCantidad(presupuesto)}
            </p>
            <p>
                <span> Disponible </span> {formatearCantidad(disponible)}
            </p>
            <p>
                <span> Gasstado </span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto