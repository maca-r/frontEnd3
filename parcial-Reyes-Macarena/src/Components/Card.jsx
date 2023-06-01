import React from 'react'

const Card = ({datos}) => {
return (
    <div className='cardRender'>
        <h4>Hola {datos.nombre}!</h4>
        <h2>Tu banda favorita es {datos.bandaFavorita}</h2>
        <h5>Empezaste a escuchar sus temas en el año {datos.año}</h5>

    </div>
)
}

export default Card
