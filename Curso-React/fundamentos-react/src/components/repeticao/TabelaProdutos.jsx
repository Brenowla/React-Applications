import React from 'react'
import produtos from "../../data/produtos"
import './TabelaProduto.css'

export default (props) => {
    function getLinhas() {
        return produtos.map(produto => {
            return(
                <tr>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R${produto.preco}</td>
                </tr>
            )
        })
    }
    return(
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}