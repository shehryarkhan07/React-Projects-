import { useState } from 'react'

import { useCallback } from 'react';

function App() {
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("");
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);

    const passwordGenerator = useCallback( () => {
      let pass ="";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%&*{}+?<>"

      for (let i = 1; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)   
        pass = str.charAt(char);     
      }

    }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
    <div className="w-full max-w-md text-orange-500 bg-white-600 shadow-md rounded-lg py-3 px-4 my-8">

    <h1 className="text-white text-center"> Password Generator</h1>

      <div className="flex shadow overflow-hidden rounded-lg mb-4">
      <input type="text" value={password} className="outline-none w-full py-2 px-3" placeholder="Password" />
      </div>
    </div>
    </>
  )
}

export default App
   