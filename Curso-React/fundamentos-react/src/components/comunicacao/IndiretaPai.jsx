import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    
    const [nome,setNome] = React.useState("?")
    const [idade,setIdade] = React.useState(0)
    const [nerd,setNerd] = React.useState(false)

    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return(
        <div>
            Pai
            <span>{nome}</span>
            <span>{idade}</span>
            <span>{nerd ? 'Verdadeiro':'Falso'}</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}