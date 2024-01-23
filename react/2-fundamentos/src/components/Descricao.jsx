const Descricao = (props) => {

    // props = {}
    // proprieddades -> chavees dos valores
    // props,nome = "Matheus"
  return (
    <div>
        <p>Seu nome é: {props.nome}</p>
        <p>Sua idade é: {props.idade}</p>
    </div>
  )
}

export default Descricao