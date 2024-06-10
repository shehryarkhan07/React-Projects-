import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  // let counter = 10

  const addValue = () =>
    {
      if (counter < 20) {
    
      counter = counter +1 
      setCounter(counter);
    }
  }

    const removeValue = () =>{
      if (counter > 0) {
        
        setCounter(counter-1); 
      }
    }

  return (
    <>
      
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value : {counter}</button>
      <footer>Footer Value : {counter}</footer>
    </>
  )
}

export default App
