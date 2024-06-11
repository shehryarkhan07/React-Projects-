import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    Name : "Shehryar",
    age : 22
  }
  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>TailWind Test</h1>
     <Cards userName="chaiaurcode" btnText="Click Me" />
     <Cards userName= "Sheela" />

    
    </>
  )
}

export default App
