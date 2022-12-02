import { useState } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarID } from './helpers'
import nuevoIcono from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [ isValidPresupuesto, setIsValidPresupuesto ] = useState(false)

  const [ modal, setModal ] = useState(false)
  const [ animarModal, setAnimarModal ] = useState(false)
  const [gastos, setGastos] = useState([])

  const [ gastoEditar, setGastoEditar ] = useState({})

  const handleNuevoGasto = () =>{
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const guardarGasto = gasto => {
    gasto.id = generarID()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])

    setAnimarModal(false)

    setTimeout(() => {
        setModal(false)
    }, 500);
  }

  return (
    <div className={ modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={ gastos } />
      
      {isValidPresupuesto &&(
        <>
          <main>
            <ListadoGastos 
              gastos={ gastos }
              setModal={ setModal }
              setAnimarModal={ setAnimarModal } />
          </main>
          <div className='nuevo-gasto'>
            <img 
              src={ nuevoIcono }
              alt="Icono nuevo gasto"
              onClick={ handleNuevoGasto} />
          </div>
        </>
      )}
      {modal && 
            <Modal 
              setModal={setModal}
              animarModal={ animarModal }
              setAnimarModal={ setAnimarModal }
              guardarGasto={ guardarGasto }
            />}
    </div>
  )
}

export default App
