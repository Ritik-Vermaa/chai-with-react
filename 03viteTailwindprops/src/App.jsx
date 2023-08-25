import './App.css'
import Card from './component/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-600  rounded-xl p-4 mb-4 text-black'>
      Tailwind Test
    </h1>
    <Card username = "Ritik" btntext="click me"/>
    <Card username="Aman"  btntext="visit me"/>
    </>
  )
}

export default App
