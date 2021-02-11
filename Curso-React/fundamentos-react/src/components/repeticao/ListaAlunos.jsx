import React from 'react'
import alunos from "../../data/alunos"

export default props => {
    const lis = alunos.map((aluno) =>
        <li>
            {aluno.id}) {aluno.nome} -> {aluno.nota}
        </li>
    )
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {lis}
            </ul>
        </div>
    )
}