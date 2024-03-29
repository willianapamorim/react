import './App.css'

import Welcome from './components/Welcome';
import BomDia from './components/BomDIa';
import Pai from './components/Pai';
import Descricao from './components/Descricao';
import Cachorro from './components/Cachorro';
import Counter from './components/Counter';

function App() {
  return (
    <>
      {/* 6.1 -  Criação de componente */}
      <Welcome />
      
      {/* 6.2 -  Expressões do JSX */}
      <BomDia />
      {/* 6.3 -  Componente dentro de componente */}
      <Pai />
      {/* 6.4 -  Props */}
      <Descricao nome="Bob" idade={20}/>
      {/* 6.5 -  Desestruturação de Props */}
      <Cachorro nome="Princeso" raca="Buldog"/>
      {/* 6.6 -  useStates -> hook */}
      <Counter />

    </>
  )
}

export default App
