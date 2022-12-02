import { useState } from 'react'
import Mensaje from './Mensaje'
import btnCerrar from '../img/cerrar.svg'
import { categorias } from '../helpers'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        if([ nombre, cantidad, categoria ].includes('') || categoria === 0){
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return;
        }

        guardarGasto({ nombre, cantidad, categoria })
    }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
        src={btnCerrar}
        alt='Boton para cerrar modal'
        onClick={ ocultarModal } />
      </div>
      <form onSubmit={ handleSubmit } className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className='campo'>
            <label htmlFor='txtNombre'>Nombre Gasto:</label>
            <input 
                id="txtNombre" 
                type="text" 
                placeholder='Añade el nombre del gasto'
                value={ nombre }
                onChange={ (e) => setNombre(e.target.value) } />
        </div>
        <div className='campo'>
            <label htmlFor='txtCantidad'>Cantidad:</label>
            <input 
                id="txtCantidad" 
                type="number" 
                placeholder='Añade el valor del gasto'
                value={ cantidad }
                onChange={ (e) => setCantidad(Number(e.target.value)) } />
        </div>
        <div className='campo'>
            <label htmlFor='txtCategoria'>Categoria:</label>
            <select
                id="txtCategoria"
                value={ categoria }
                onChange={ (e) => setCategoria(Number(e.target.value)) }>
                {
                    categorias.map( (cate, index) => (
                        index === 0 ?
                            <option key={index} value={index}>-- {cate} --</option>
                        :   <option key={index} value={index}>{cate}</option>
                    ))
                }
            </select>
        </div>
        <input type="submit" value="Agregar gasto" />
      </form>
    </div>
  )
}

export default Modal