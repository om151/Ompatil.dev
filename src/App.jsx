import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
    </>
  )
}

export default App
