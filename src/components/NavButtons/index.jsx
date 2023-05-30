import { useContext } from "react"

import bigArrowLight from "@/Assets/bigArrow-light.png"
import bigArrowDark from "@/Assets/bigArrow-dark.png"
import arrowLight from "@/Assets/arrow-light.png"
import arrowDark from "@/Assets/arrow-dark.png"

import PageContext from "@/context/PageContext"
import ThemeContext from "@/context/ThemeContext"

import "./NavButtons.css"

const imgs = {
  "light": {
    "big": bigArrowLight,
    "small": arrowLight
  },
  "dark": {
    "big": bigArrowDark,
    "small": arrowDark
  }
}

export default function NavButtons({ size, setMethod, method }) {
  let {mode} = useContext(ThemeContext)
  
  if (size === 'small') {
    const isDesktop = window.innerWidth > 700 ? 'small' : 'big'
    return (
      <section className="project__navButtons">
        <img 
          alt="flecha izquierda" 
          src={imgs[mode][isDesktop]}
          onClick={() => method > 0 ? setMethod(method - 1) : setMethod(3)}
        />
        <img 
          alt="flecha derecha" 
          src={imgs[mode][isDesktop]}
          onClick={() => method < 3 ? setMethod(method + 1) : setMethod(0)}
        />
      </section>
    )
  }
  
  let {page, setPage} = useContext(PageContext)
  return(
    <section className="nav-buttons">
      {page > 0 && 
        <img
          alt='flecha izquierda'
          className='left'
          src={imgs[mode][size]}
          onClick={() => setPage(page => page - 1)}
        /> 
      }
      {page < 2 && 
        <img
          alt='flecha derecha' 
          className='right'
          src={imgs[mode][size]}
          onClick={() => setPage(page => page + 1)}
        /> 
      }
    </section>
  )
}
