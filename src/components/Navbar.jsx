import "./Navbar.css"

export default function Navbar({setPage}) {
  // let handleClick = (page) => {
  //   setPage(page)
  //   let buttons = [...document.querySelectorAll(".navbar__buttons button")]
  //   buttons.forEach(el => el.classList.remove('active'))
  //   buttons[page].classList.add('active')
  // }

  return (
    <nav className="navbar">
      <h2 className="navbar__name" onClick={() => handleClick(0)}>Tomás Hojnadel</h2>
      <section className="navbar__buttons">
        <button onClick={() => setPage(0)} className="active">Sobre mi</button>
        <button onClick={() => setPage(1)}>Proyectos</button>
        <button onClick={() => setPage(2)}>Contacto</button>
      </section>
    </nav>
  )
}