import React from 'react'

export default function Primeiro() {
    const msg = 'Seja bem vindo!!'
    return(
        <React.Fragment key = "1">
            <h2>Primeiro componente!</h2>
            <p>{msg}</p>
        </React.Fragment>   
    )
}