import { useState , useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { formatCantidad } from "../helpers"

const ControlPresupuesto = ({presupuesto, setPresupuesto, gastos, setGastos, setIsValidPresupuesto}) => {
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
  
  const handleResetApp = () => {
    const resultado = confirm('Deseas Resiniar la aplicacion')

    if(resultado){
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar 
          styles={buildStyles({
            pathColor : porcentaje > 100 ? 'red' : '#3b82f6',
            textColor : porcentaje > 100 ? 'red' : '#3b82f6',
            trailColor : '#f5f5f5'
          })}
          value={porcentaje} text={`${porcentaje}% Gastado`} />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear App
        </button>
        <p>
            <span>Presupuesto: </span> {formatCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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
