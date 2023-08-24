import { useContext } from "react";
import PageContext from "@/context/PageContext";
import "./Navbar.css";

export default function Navbar() {
  let { setPage } = useContext(PageContext);

  return (
    <nav className="navbar">
      <h2 className="navbar__name" onClick={() => setPage(0)}>
        Tomás Hojnadel
      </h2>
      <section className="navbar__buttons">
        <button onClick={() => setPage(0)}>Sobre mi</button>
        <button onClick={() => setPage(1)}>Proyectos</button>
        <button onClick={() => setPage(2)}>Contacto</button>
      </section>
    </nav>
  );
}
