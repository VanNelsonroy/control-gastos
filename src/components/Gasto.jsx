import React from "react"
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css'
import { categorias, formatCantidad, formatearFecha } from "../helpers"
import IconAhorro from '../img/icono_ahorro.svg'
import IconCasa from '../img/icono_casa.svg'
import IconComida from '../img/icono_comida.svg'
import IconGastos from '../img/icono_gastos.svg'
import IconOcio from '../img/icono_ocio.svg'
import IconSalud from '../img/icono_salud.svg'
import IconSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = [
    null,
    IconAhorro,
    IconComida,
    IconCasa,
    IconGastos,
    IconOcio,
    IconSalud,
    IconSuscripciones
]

const Gasto = ({ gasto, setModal, setAnimarModal }) => {

    const testModal = () => {
        setModal(true)

        setTimeout(() => {
            setAnimarModal(true)
        }, 500); 
    }

    const {id, nombre, cantidad, categoria, fecha } = gasto  

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction 
            onClick={ testModal }
          >
            Editar
          </SwipeAction>
        </LeadingActions>
      )
      
      const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
          >
            Borrar
          </SwipeAction>
        </TrailingActions>
      )
    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img 
                            src={ diccionarioIconos[categoria] }
                        />
                        <div className="descripcion-gasto">
                            <p className="categoria">{ categorias[categoria] }</p>
                            <p className="nombre-gasto">{ nombre }</p>
                            <p className="fecha-gasto">
                                Agregado el: {''}
                                <span>{ formatearFecha(fecha) }</span>
                            </p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">{ formatCantidad(cantidad)}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto
