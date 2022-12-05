import { useState , useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { formatCantidad } from "../helpers"

const ControlPresupuesto = ({presupuesto, gastos}) => {
  const [porcentaje, setPorcentaje] = useState(0)
  const [ disponible, setDisponible ] = useState(0)
  const [ gastado, setGastado ] = useState(0)
  
  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => {
      return gasto.cantidad + total
    }, 0)
    setGastado(totalGastado)
    const totalDisponible = presupuesto - totalGastado
    setDisponible(totalDisponible)

    //Calcular porcentaje
    const nuevoPorcentaje = ((presupuesto - totalDisponible) / presupuesto * 100).toFixed(2)

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 700)
  }, [gastos])
  

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar 
          styles={buildStyles({
            pathColor : '#3b82f6',
            trailColor : '#f5f5f5'
          })}
          value={porcentaje} text={`${porcentaje}% Gastado`} />
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
