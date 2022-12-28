import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos,setGastoeditar,eliminarGasto}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? "Gastos": "No hay gastos aun"}</h2>

        {gastos.map(gasto => (
            <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoeditar={setGastoeditar}
                eliminarGasto={eliminarGasto}
            />
        ))}
    </div>
  )
}

export default ListadoGastos