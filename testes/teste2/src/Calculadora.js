import React from 'react'

const Calculadora = ({num1, num2}) => {
    const soma = num1 + num2
  return (
    <div>
        <h1>Calculadora</h1>
        <p> A soma de {num1} + {num2} é {soma} </p>

    </div>
  )
}

export default Calculadora