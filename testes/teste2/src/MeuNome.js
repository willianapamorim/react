import React from 'react'

const MeuNome = ({nome, sobrenome}) => {
  return (
    <div>
        <h1>Meu nome é um {nome}</h1>
        <h1>e meu sobrenome é {sobrenome}</h1>
    </div>
  )
}

export default MeuNome