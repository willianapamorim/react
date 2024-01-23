import React from 'react'

const Cachorro = ({nome, raca}) => {
    //props.nome vira=> nome
    //props.raca vira=> raca
    //destructuring => {} , []

  return (
    <p>O cachorro se chama {nome} e é da raça {raca}</p>
  )
}

export default Cachorro;