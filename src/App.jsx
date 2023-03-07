import './App.css'
import { useEffect, useState } from 'react'
import arrowLight from "./Assets/bigArrow-light.png"
import arrowDark from "./Assets/bigArrow-dark.png"
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Project'
import DarkButton from './components/DarkButton'

function App() {
  let [page, setPage] = useState(0)
  let [project, setProject] = useState(0)
  let [mode, setMode] = useState('light')

  useEffect(() => {
    let buttons = [...document.querySelectorAll(".navbar__buttons button")]
    buttons.forEach(el => el.classList.remove('active'))
    buttons[page].classList.add('active')

    let vw = window.innerWidth
    window.scroll(page * vw, 0)
  }, [page])

  return (
    <>
      <Navbar setPage={setPage} />      
      <main>
        <About />
        <Projects project={project} setProject={setProject} mode={mode}/>
        <Contact />
      </main>

      <DarkButton mode={mode} setMode={setMode} />

      <section className="page__navButtons">
        {page > 0 && 
          <img className='left' src={mode === 'light' ? arrowLight : arrowDark} onClick={() => setPage(page--)} />  
        }
        {page < 2 && 
          <img className='right' src={mode === 'light' ? arrowLight : arrowDark} onClick={() => setPage(page++)} />  
        }

        </section>
    </>
  )
}

export default App