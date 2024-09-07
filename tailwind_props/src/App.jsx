import { useState } from 'react'
import './App.css'
import { Cards } from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-500 text-black rounded-xl mb-5">
        tailWind CSS
      </h1>

      <Cards username="Ansh" btnTxt="Click Me"/>
      <Cards username="Jay" btnTxt="Open Me"/>
    </>
  )
}

export default App
