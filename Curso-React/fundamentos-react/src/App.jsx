import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layoult/Card'
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuimpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from './components/formulario/input'
import Contador from './components/contador/Contador'

export default props =>
    <div className="App">
        <h1>Fundamentos react!</h1>

        <div className="Cards">
            <Card titulo="Contador" color="#E4E6C3">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="Componente Controlado (Input)" color="#c44536">
                <Input></Input>
            </Card>

            <Card titulo="Comunicação Indireta" color="#283d3b">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="Comunicação Direta" color="#899878">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="Primeiro" color="#E4E6C3">
                <Primeiro/>
            </Card>

            <Card titulo="Renderização condicional" color="#c44536">
                <ParOuImpar numero="6"></ParOuImpar>
                <UsuarioInfo usuario={{ nome: "Fernando" }} />
            </Card>

            <Card titulo="Tabela Produtos" color="#283d3b">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="Repetição" color="#899878">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="Componente com Filhos" color="#E4E6C3">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Amanda"></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="Desafio Aleatório" color="#c44536">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="Fragmento" color="#283d3b">
                <Fragmento/>
            </Card>

            <Card titulo="Com Parâmetro" color="#899878">
                <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!" />
            </Card>

            <Card titulo="Primeiro" color="#E4E6C3">
                <Primeiro/>
            </Card>
        </div>
    </div>