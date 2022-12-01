import { categorias } from "../helpers"

const Gasto = ({ gasto }) => {

    const {id, nombre, cantidad, categoria } = gasto  
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <div className="descripcion-gasto">
                    <p className="categoria">{ categorias[categoria] }</p>
                    <p className="nombre-gasto">{ nombre }</p>
                </div>
            </div>
        </div>
    )
}

export default Gasto
