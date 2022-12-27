import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos,setGastoeditar}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? "Gastos": "No hay gastos aun"}</h2>

        {gastos.map(gasto => (
            <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoeditar={setGastoeditar}
            />
        ))}
    </div>
  )
}

export default ListadoGastos