import React from 'react'

export default props => {
    const aleatorio = parseInt(Math.random()*(props.max-props.min)+props.min)
    return (
        <div>
            <h2>Valor aleatório</h2>
            <p><strong>Valor Mínimo:</strong> {props.min}</p>
            <p><strong>Valor Máximo:</strong> {props.max}</p>
            <p><strong>Valor Escolhido:</strong> {aleatorio}</p>
        </div>)
}