import React from 'react'
import Card from './Card'

import { connect } from 'react-redux'

const Soma = props => {
    const { min, max } = props
    return (
        <Card title="Soma dos números" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma)