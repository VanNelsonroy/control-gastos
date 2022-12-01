export const generarID = () => {
    const random = Math.random().toString(36).substring(2) 
    const fecha = Date.now().toString(36) 
    return fecha + random
}

/*
<option value="0">-- Seleccione --</option>
<option value="1">Ahorro</option>
<option value="2">Comida</option>
<option value="3">Casa</option>
<option value="4">Varios</option>
<option value="5">Ocio</option>
<option value="6">Salud</option>
<option value="7">Subscrpciones</option>
*/

export const categorias = ['Sin Categoria', 'Ahorro', 'Comida', 'Casa', 'Varios', 'Ocio', 'Salud', 'Subscrpciones']