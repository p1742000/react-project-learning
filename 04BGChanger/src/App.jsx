import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maincard from './components/Maincard'

function App() {
let [color, setColor] = useState('violet');

  return (
   <div className='w-full h-screen' style={{backgroundColor: color}}>

    {/* <Maincard/> */}
  
   </div>
  )
}

export default App
