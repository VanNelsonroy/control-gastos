import { useState, useEffect } from "react"
import { categorias } from '../helpers'

const Filtros = ({ filtro, setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
            <label>Filtrar Gastos</label>
            <select
                value={filtro}
                onChange={(e) => setFiltro(Number(e.target.value))}
                >
                {
                    categorias.map( (cate, index) => (
                        index === 0 ?
                            <option key={index} value={index}>-- Todas las categorias --</option>
                        :   <option key={index} value={index}>{cate}</option>
                    ))
                }
            </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros
