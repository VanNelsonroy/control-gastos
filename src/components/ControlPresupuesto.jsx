import { useState , useEffect } from "react"
import { formatCantidad } from "../helpers"

const ControlPresupuesto = ({presupuesto, gastos}) => {
  const [ disponible, setDisponible ] = useState(0)
  const [ gastado, setGastado ] = useState(0)
  
  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => {
      return gasto.cantidad + total
    }, 0)
    setGastado(totalGastado)
    const totalDisponible = presupuesto - totalGastado
    setDisponible(totalDisponible)
  }, [gastos])
  

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafia aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
            <span>Presupuesto: </span> {formatCantidad(presupuesto)}
        </p>
        <p>
            <span>Disponible: </span> {formatCantidad(disponible)}
        </p>
        <p>
            <span>Gastado: </span> {formatCantidad(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
