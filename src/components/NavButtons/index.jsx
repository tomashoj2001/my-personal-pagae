import arrowLight from "src/assets/bigArrow-light.png"
import arrowDark from "src/assets/bigArrow-dark.png"

export default function NavButtons({mode, page, setPage}) {
  return(
    <section className="page__navButtons">
      {page > 0 && 
        <img alt='flecha' className='left' src={mode === 'light' ? arrowLight : arrowDark} onClick={() => setPage(page => page - 1)} />  
      }
      {page < 2 && 
        <img alt='flecha' className='right' src={mode === 'light' ? arrowLight : arrowDark} onClick={() => setPage(page => page + 1)} />  
      }
    </section>
  )
}