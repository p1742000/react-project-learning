import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycard from './components/card.jsx'

function App() {

  let myObj = {
    username: 'Parth',
    email: 'trivediparth20000@gmail.com'
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Mycard username='Prashant' someObj={ myObj }/><br/>
      <Mycard username='Parth'/>


    </>
  )
}

export default App
