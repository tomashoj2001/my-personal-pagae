import { useEffect, useState } from 'react'

import arrowLight from "./Assets/bigArrow-light.png"
import arrowDark from "./Assets/bigArrow-dark.png"

import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Project'
import DarkButton from './components/DarkButton'

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

      <section className="page__navButtons">
        {page > 0 && 
          <img alt='flecha' className='left' src={mode === 'light' ? arrowLight : arrowDark} onClick={() => setPage(page => page - 1)} />  
        }
        {page < 2 && 
          <img alt='flecha' className='right' src={mode === 'light' ? arrowLight : arrowDark} onClick={() => setPage(page => page + 1)} />  
        }
      </section>
    </>
  )
}

export default App