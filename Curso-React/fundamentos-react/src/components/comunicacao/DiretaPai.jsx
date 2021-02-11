import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return(
        <div>
            <DiretaFilho texto="Filho 1" numero={20} bool={true}></DiretaFilho>
            <DiretaFilho texto="Filho 2" numero={40} bool={false}></DiretaFilho>
        </div>
    )
}