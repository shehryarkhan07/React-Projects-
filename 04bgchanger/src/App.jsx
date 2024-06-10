import { useState } from "react"


function App() {

  const [color, setColor] = useState ("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flexwrape justify-center inset-x-0 px-2 bottom-16">
      <div className="fixed flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg bg-white rounded-3xl">

      <button onClick={() => setColor("red")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" 
      style={{backgroundColor: "red"}}
      >Red</button>
      <button onClick={() => setColor("green")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" 
      style={{backgroundColor: "green"}}
      >Green</button>
      <button  onClick={() => setColor("blue")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" 
      style={{backgroundColor: "Blue"}}
      >Blue</button>
      <button onClick={() => setColor("yellow")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" 
      style={{backgroundColor: "yellow"}}
      >Yellow</button>
      <button onClick={() => setColor("pink")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" 
      style={{backgroundColor: "pink"}}
      >Pink</button>
      <button onClick={() => setColor("brown")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" 
      style={{backgroundColor: "brown"}}
      >Brown</button>
      <button onClick={() => setColor("gray")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" 
      style={{backgroundColor: "gray"}}
      >Gray</button>
      <button onClick={() => setColor("purple")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" 
      style={{backgroundColor: "purple"}}
      >Purple</button>
      <button onClick={() => setColor("black")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" 
      style={{backgroundColor: "black"}}
      >Black</button>
      <button onClick={() => setColor("gold")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" 
      style={{backgroundColor: "gold"}}
      >Gold</button>
      <button onClick={() => setColor("skyblue")} className="outline-none rounded-full px-4 py-1 text-white shadow-lg" 
      style={{backgroundColor: "skyblue"}}
      >Skyblue</button>


      </div>
      </div>
    </div>
  )
}

export default App
