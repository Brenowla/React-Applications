import './Intervalo.css'
import React from 'react'
import Card from './Card'

import { connect } from 'react-redux'
import { setNumberMin, setNumberMax } from '../store/actions/numbers'

const Intervalo = props => {
    const { min, max } = props

    return (
        <Card title="Intervalo de números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min} onChange={e => props.setMin(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} onChange={e => props.setMax(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setMin(newMin) {
            const action = setNumberMin(newMin)
            dispatch(action)
        },
        setMax(newMax) {
            const action = setNumberMax(newMax)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)