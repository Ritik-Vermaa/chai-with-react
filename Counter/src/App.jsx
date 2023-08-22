import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)

  //let counter = 15;

  const addvalue = () =>{
    console.log("Clicked " , counter);
    counter = counter + 1;
    setcounter(counter);
  }

  const removevalue = () =>{
    counter = counter - 1 ;
    setcounter(counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addvalue}>Add value </button>
      <br></br>
      <button onClick={removevalue}>Remove value </button>
    </>
  )
}

export default App
