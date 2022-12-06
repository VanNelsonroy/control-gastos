import { object } from 'prop-types'
import { useState, useEffect } from 'react'
import Filtros from './components/Filtros'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarID } from './helpers'
import nuevoIcono from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto') ?? 0)
  )
  const [ isValidPresupuesto, setIsValidPresupuesto ] = useState(false)

  const [ modal, setModal ] = useState(false)
  const [ animarModal, setAnimarModal ] = useState(false)
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )

  const [ gastoEditar, setGastoEditar ] = useState({})
  //Filtros
  const [filtro, setFiltro] = useState(0)
  const [gastosFiltrados, setGastosFiltrados] = useState({})
  //Fin Filtros

  useEffect(() =>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
  }, [gastoEditar])

  const handleNuevoGasto = () =>{
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const guardarGasto = gasto => {
    if( gasto.id ){
      //Actualizar
      const gastoActualizado = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastoActualizado)
      setGastoEditar({})
    }else{
      //Nuevo Gasto
      gasto.id = generarID()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

    setAnimarModal(false)

    setTimeout(() => {
        setModal(false)
    }, 500);
  }

  const eliminarGasto = id =>{
    const gastoActualizado = gastos.filter( gasto => gasto.id !== id)
    setGastos(gastoActualizado)
  }

  useEffect(() =>{
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])
  

  useEffect(() =>{
    const localSPresupuesto = Number(localStorage.getItem('presupuesto')) ?? 0
    if(localSPresupuesto > 0)
     setIsValidPresupuesto(true)
  }, [])

  useEffect(() => {
    if(filtro > 0){
      const filtrados = gastos.filter( gasto => gasto.categoria === filtro)
      setGastosFiltrados(filtrados)
    }
  }, [filtro])

  return (
    <div className={ modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={ gastos }
        setGastos={setGastos} />
      
      {isValidPresupuesto &&(
        <>
          <main>
            <Filtros
              filtro={ filtro }
              setFiltro={ setFiltro } />
            <ListadoGastos 
              gastos={ gastos }
              setGastoEditar={ setGastoEditar }
              eliminarGasto={ eliminarGasto }
              filtro={ filtro }
              gastosFiltrados={ gastosFiltrados }
            />
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
              gastoEditar={ gastoEditar }
              setGastoEditar={ setGastoEditar }
            />}
    </div>
  )
}

export default App
