import Gasto from "./Gasto"

const ListadoGastos = ({ gastos, setModal, setAnimarModal }) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{ gastos.length ? 'Gastos':'No hay gastos aun' }</h2>
        {gastos.map( gasto => (
            <Gasto
                key={gasto.id}
                gasto={gasto}
                setModal={ setModal }
                setAnimarModal={ setAnimarModal }
            />
        ))}
    </div>
  )
}

export default ListadoGastos
