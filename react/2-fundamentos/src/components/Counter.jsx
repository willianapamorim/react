import {useState} from 'react'

const Counter = () => {
    // [Consultar, alterar]
    const [count, setCount] = useState(1)


  return <div>{count}</div>
}

export default Counter;