import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const[length, setLength] = useState(8);
  const[numAll,setNum] = useState(false);
  const[spcharAll,setCharAll] = useState(false);
  const[password,setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAll){
      str += "0123456789"
    }
    if(spcharAll){
      str += "~!@#$%^&*(){}[]-=_+/*"
    }

    for (let i = 0;  i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length,numAll,spcharAll,setPassword])

  const copyPass = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAll,spcharAll,passwordGenerator])

  return (
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-black'>
        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passRef}
          />
          <button 
          onClick={copyPass}
          className=' hover:bg-blue-400 outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 ml-2'>
            <input 
              type="checkbox"
              defaultChecked={numAll} 
              id="numberInput"
              onChange={()=>{
                setNum((prev)=>!prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 ml-2'>
            <input 
            type="checkbox"
            defaultChecked={spcharAll}
            onChange={()=>{
              setCharAll((prev)=>!prev)
            }}
             />
             <label>Characters</label>
          </div>
        </div>
      </div>
  )
}

export default App
