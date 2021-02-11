import React from 'react'
import './Input.css'

export default props => {
    const [valor, setValor] = React.useState('Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return(
        <div>
            <h2>{valor}</h2>
            <input value={valor} type="text" onChange={quandoMudar}/>
            <input value={undefined}/>
        </div>
    )
}