import arrowLight from "@/Assets/bigArrow-light.png"
import arrowDark from "@/Assets/bigArrow-dark.png"

import "./NavButtons.css"

export default function NavButtons({mode, page, setPage}) {
  return(
    <section className="nav-buttons">
      {page > 0 && 
        <img alt='flecha' className='left' src={mode === 'light' ? arrowLight : arrowDark} onClick={() => setPage(page => page - 1)} />  
      }
      {page < 2 && 
        <img alt='flecha' className='right' src={mode === 'light' ? arrowLight : arrowDark} onClick={() => setPage(page => page + 1)} />  
      }
    </section>
  )
}