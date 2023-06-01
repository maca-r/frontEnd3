import React from 'react'

const Form = ({datos, setDatos, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            
            <label>Ingresa tu nombre</label>
            <input type="text" onChange = {(event) => setDatos({...datos, nombre: event.target.value })}/>

            <label>¿Cual es tu banda favorita?</label>
            <input type="text" onChange = {(event) => setDatos(({...datos, bandaFavorita: event.target.value }))}/>

            <label>¿En qué año empezaste a escuchar sus temas?</label>
            <input type="number" onChange = {(event) => setDatos(({...datos, año: event.target.value }))}/>

            <button>Enviar</button>
        </form>
    )
}

export default Form
