import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function calcFat(num) {
    const n = parseInt(num)
    if (n < 0) {
        return -1
    }
    if (n === 0) {
        return 1
    }
    else {
        return calcFat(n - 1) * n
    }

}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fat, setFat] = useState(1)

    useEffect(function () {
        setFat(calcFat(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fat === -1 ? "Não existe" : fat}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
