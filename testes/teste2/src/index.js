import React from 'react'
import ReactDOM from 'react-dom'
import MeuNome from './MeuNome'
import Calculadora from './Calculadora'

const App = () => {
  return (
    // container principal
    <div className="container border rounded mt-2">
        <MeuNome nome="will" sobrenome="amorim"/>
        <Calculadora num1={10} num2={20}/>
    </div>
  )
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
 ) 