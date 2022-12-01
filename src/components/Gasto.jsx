import { categorias, formatCantidad, formatearFecha } from "../helpers"

const Gasto = ({ gasto }) => {

    const {id, nombre, cantidad, categoria, fecha } = gasto  
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                {/* Imagen */}
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
    )
}

export default Gasto
