import { useContext } from "react";
import PageContext from "@/context/PageContext";
import DarkButton from "../DarkButton";
import "./Navbar.css";

export default function Navbar() {
  let { setPage } = useContext(PageContext);

  const goToHome = (evt) => {
    const isMobile = innerWidth < 600;
    if (!isMobile) {
      evt.preventDefault();
    }

    setPage(0);
  };

  return (
    <nav className="navbar">
      <a href="#home" onClick={goToHome}>
        <h2 className="navbar__name">Tomás Hojnadel</h2>
      </a>
      <section className="navbar__buttons">
        <button onClick={() => setPage(0)}>Sobre mi</button>
        <button onClick={() => setPage(1)}>Proyectos</button>
        <button onClick={() => setPage(2)}>Contacto</button>
      </section>
      <DarkButton />
    </nav>
  );
}
