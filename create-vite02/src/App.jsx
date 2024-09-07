import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addVal = () => {
    if(count<20){
      setCount(++count)
    }
  }

  const delVal = () =>{
    if(count>0){
      setCount(--count)
    }
  }
  
  return (
    <>
      <h1>Click Counter</h1>
      <h2>Counter: {count}</h2>
      <button onMouseMove={addVal}>+</button>
      <button onMouseMove={delVal}>-</button>
    </>
  )
}

export default App
