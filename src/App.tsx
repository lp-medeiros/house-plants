import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Portifolio from './components/Portifolio'
import Contato from './components/Contato'


function App() {

  return (
    <>
      <Navbar />
      <About />
      <Portifolio />
      <Contato />
    </>
  )
}

export default App
