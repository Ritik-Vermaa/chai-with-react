import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(10);
  

  const addvalue = () => {

    if (counter <20) {
      counter = counter + 1;
      setcounter(counter);
    }
    else{
      alert("You can't add more value")
    }

  }

  const removevalue = () => {
    if (counter >0) {
      counter = counter - 1;
      setcounter(counter);
    }
    else{
      alert("You can't remove more value")
    }

  }

  return (
    <>
      <h1>Assingment React counter </h1>
      <h3>Counter value :{counter}</h3>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
