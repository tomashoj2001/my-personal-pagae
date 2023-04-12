import { useContext } from "react"

import arrowLight from "@/Assets/bigArrow-light.png"
import arrowDark from "@/Assets/bigArrow-dark.png"

import PageContext from "@/context/PageContext"
import ThemeContext from "@/context/ThemeContext"

import "./NavButtons.css"

export default function NavButtons() {
  let {page, setPage} = useContext(PageContext)
  let {mode} = useContext(ThemeContext)
  let img = mode === 'light' ? arrowLight : arrowDark

  return(
    <section className="nav-buttons">
      {page > 0 && 
        <img alt='flecha izquierda' className='left' src={img} onClick={() => setPage(page => page - 1)} />  
      }
      {page < 2 && 
        <img alt='flecha derecha' className='right' src={img} onClick={() => setPage(page => page + 1)} />  
      }
    </section>
  )
}