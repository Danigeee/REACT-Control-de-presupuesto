import { useEffect, useState } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from './helpers'
import IconoNuevoGasto from "./img/nuevo-gasto.svg"

function App() {
  const [gastos, setGastos] = useState([])

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoeditar, setGastoeditar] = useState({})

  useEffect(() => {
    if(Object.keys(gastoeditar).length > 0){
      setModal(true)
      
      setTimeout(() => {
        setAnimarModal(true)
      }, 300);
    }
  }, [gastoeditar])
  
  
  const handleNuevoGasto = () =>{
    setModal(true)
    setGastoeditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 300);
  }

  const guardarGasto = gasto =>{
    if(gasto.id){
      //Actualizar
      const gastosActualizados = gastos.map()
    }else{
      //Nuevo gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

    setTimeout(() => {
      setModal(false)
  }, 300);
  }

  return (
    <div className={modal ? "fijar" : ""}> 
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoeditar={setGastoeditar}
            />
          </main>
          <div className='nuevo-gasto'>
            <img 
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      {modal &&
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoeditar={gastoeditar}
        />
      }    
    </div>   
  )
}

export default App
