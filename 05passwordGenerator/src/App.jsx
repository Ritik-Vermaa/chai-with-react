import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);

  const [Password, setPassword] = useState("")


  const Passwordref = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHILKLMNOPQRSTUVWXYZavcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "123456789"
    if (charAllowed) str += "!@#$%^&*()}|:><?|"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)



  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    Passwordref.current?.select()

    window.navigator.clipboard.writeText(Password)
  },
    [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-white bg-gray-800 text-lg'>Password Genrerator
        <div className='flex shadow overflow-hidden mb-4 p-5 rounded-lg'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 rounded-lg font-sans text-orange-400'
            placeholder='Password'
            readOnly
            ref={Passwordref}
          />

          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg'>Copy</button>
        </div>
        <div className=' flex text-sm gap-x-2'>
          <div className=' flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={50}
              value={length}
              className=' cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}

            />

            <label className=' text-orange-500 text-lg'>Length : {length}</label>

          </div>
          <div className='flex items-center gap-x-1' >

            <input type="checkbox" name=""
              defaultChecked={numberAllowed}
              id="numberinput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}

            />

            <label className=' text-orange-500 text-lg' htmlFor="numberinput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1' >

            <input type="checkbox" name=""
              defaultChecked={charAllowed}
              id="charinput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}

            />

            <label className=' text-orange-500 text-lg' htmlFor="charinput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
