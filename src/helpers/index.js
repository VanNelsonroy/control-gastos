export const generarID = () => {
    const random = Math.random().toString(36).substring(2) 
    const fecha = Date.now().toString(36) 
    return fecha + random
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year : 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-MX', opciones)
}

export const formatCantidad = (num) => {
    return num.toLocaleString("en-US", {style:"currency", currency:"USD"});
}


export const categorias = ['Sin Categoria', 'Ahorro', 'Comida', 'Casa', 'Varios', 'Ocio', 'Salud', 'Subscrpciones']