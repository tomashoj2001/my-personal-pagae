import { useEffect, useState } from 'react'

import About from './components/About'
import Contact from './components/Contact'
import DarkButton from './components/DarkButton'
import Navbar from './components/Navbar'
import NavButtons from './components/NavButtons'
import Projects from './components/Project'

import './App.css'

function App() {
  let [page, setPage] = useState(0)
  let [mode, setMode] = useState(localStorage.getItem('mode') || 'light')

  useEffect(() => {
    let buttons = [...document.querySelectorAll(".navbar__buttons button")]
    buttons.forEach(el => el.classList.remove('active'))
    buttons[page].classList.add('active')

    let main = document.querySelector('main')
    main.style.transform = `translateX(${-100 * page}vw)`
  }, [page])

  return (
    <>
      <Navbar setPage={setPage} />  
      <main>
        <About />
        <Projects mode={mode}/>
        <Contact mode={mode} />
      </main>

      <DarkButton mode={mode} setMode={setMode} />
      <NavButtons mode={mode} page={page} setPage={setPage} />
    </>
  )
}

export default App