
import { useCallback, useState, useEffect, useRef } from 'react';

function App() {
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("");
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);

  //useRef
  const passwordRef = useRef(null)


    const passwordGenerator = useCallback( () => {
      let pass ="";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%&*{}+?<>"

      for (let i = 1; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)   
        pass += str.charAt(char);     
      }
      setPassword(pass)
    }, [length, numAllowed, charAllowed, setPassword])

    const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,20);
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=> {
      passwordGenerator();
    }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
    <div className="w-full max-w-md text-orange-500 bg-slate-400 mx-auto shadow-md rounded-lg py-3 px-4 my-8">

    <h1 className="text-white text-3xl text-center"> Password Generator</h1>

      <div className="flex shadow overflow-hidden rounded-lg mb-4">
      <input type="text" value={password}  className="outline-none  w-full py-1 px-3" placeholder="Password" ref={passwordRef} readOnly/>

      <button onClick={copyPasswordToClipboard} className='text-white bg-blue-600 outline-none shrink-0 px-2 py0.5'>Copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>

      <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=> {setLength(e.target.value)}} />

      <label className='text-white'>Length: {length}</label>
    </div>

    <div className='flex items-center gap-x-1'>
    <input type="checkbox" defaultChecked={numAllowed} id='numberInput'   className='cursor-pointer' onChange={()=>{setNumAllowed((prev)=> !prev)}} />

      <label  className='text-white' htmlFor='numberInput'>Number</label>
    
    </div>


    <div className='flex items-center gap-x-1'>
    <input type="checkbox" defaultChecked={charAllowed} id='characterInput'   className='cursor-pointer' 
    onChange={()=>
    {setCharAllowed((prev)=> !prev)}} />

      <label  className='text-white' htmlFor='characterInput'>Characters</label>
    
    </div>
    
    
    </div>
    </div>
    </>
  )
}

export default App
   