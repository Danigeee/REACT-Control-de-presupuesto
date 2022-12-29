import React, { useEffect, useState } from 'react'
import { formatearCantidad } from '../helpers'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({gastos,setGastos,presupuesto,setPresupuesto,setIsValidPresupuesto}) => {

    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    
    useEffect(() => {
      const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
      const totalDisponible = presupuesto -totalGastado

      //calcular el porcentaje gastado
      const nuevoPorcentaje = (((presupuesto - totalDisponible )/ presupuesto) * 100).toFixed(2)

      setDisponible(totalDisponible)
      setGastado(totalGastado)
      setTimeout(() => {
        setPorcentaje(nuevoPorcentaje)      
      }, 1000);
    }, [gastos])

    const handleResetApp = () =>{
      const resultado  = confirm("¿Deseas reiniciar presupuesto y gastos?")

      if(resultado){
        setGastos([])
        setPresupuesto(0)
        setIsValidPresupuesto(false)
      }

    }
    
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100? "#dc2626":"#3b82f6",
            trailColor: "#f5f5f5",
            textColor: porcentaje > 100? "#dc2626":"#3b82f6",
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className='contenido-presupuesto'>
        <button 
          className='reset-app'
          type='button'
          onClick={handleResetApp}
        >
          Resetar App
        </button>
        <p>
            <span> Presupuesto </span> {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
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