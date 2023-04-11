import { useEffect } from "react"

import sun from "../../Assets/sun.svg"
import moon from "../../Assets/moon.svg"

import './DarkButton.css'

export default function DarkButton({ mode, setMode }) {  
  useEffect(() => {
    localStorage.setItem('mode', mode)
  }, [mode])
  
  let root = document.querySelector(':root')
  let html = document.querySelector('html')
  if (mode === 'light') {
    root.style.setProperty('--first-color', 'rgb(168, 218, 220)')  
    root.style.setProperty('--second-color', 'rgb(29, 93, 133)')  
    root.style.setProperty('--third-color', 'rgb(235, 250, 250)')  
    root.style.setProperty('--fourth-color', 'rgb(194, 3, 3)')  
    root.style.setProperty('--fifth-color', 'rgb(29, 53, 87)')
    root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, .35)')
    html.style.backgroundImage = 'var(--light-bg)'
  } else {
    root.style.setProperty('--first-color', 'rgb(0, 35, 55)')  
    root.style.setProperty('--second-color', 'rgb(0, 153, 195)')  
    root.style.setProperty('--third-color', 'rgb(0, 35, 55)')  
    root.style.setProperty('--fourth-color', 'rgb(240, 149, 96)')  
    root.style.setProperty('--fifth-color', 'rgb(202, 240, 248)')
    root.style.setProperty('--shadow-color', 'rgba(200, 200, 200, .12)')
    html.style.backgroundImage = 'var(--dark-bg)'
  }

  return(
    <div className="dark-mode-btn" onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
      <button>
        <img src={mode === 'light' ? sun : moon} alt="mode" />
      </button>
    </div>
  )
}