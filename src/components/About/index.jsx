import { useContext } from "react";
import PageContext from "@/context/PageContext";
import ProjectContext from "@/context/ProjectContext";
import {
  CSS,
  Git,
  HTML,
  JavaScript,
  NextJS,
  React,
  Tailwind,
  TypeScript,
} from "../SVG";
import "./About.css";

export default function About() {
  const { setPage } = useContext(PageContext);
  const { project, setProject } = useContext(ProjectContext);

  const goToPortofolio = (evt, project) => {
    const isMobile = innerWidth < 600
    if (!isMobile) { 
      evt.preventDefault()
    }

    setPage(1);
    setProject(project);
  };

  return (
    <div id="home" className="container">
      <h1>¡Hola! Me dicen Tomi y ésta es mi página personal. Bienvenido :)</h1>
      <div className="about">
        <section className="about__text">
          <div>
            <p>Tengo 22 años y estudio Desarrollo Web Front-End hace 2 años.</p>
            <p>
              Logré 6 meses de experiencia a través de trabajos freelance,
              incluyendo una{" "}
              <a href="#projects" onClick={(evt) => goToPortofolio(evt, 0)}>
                Landing Page de un inmueble
              </a>{" "}
              y una{" "}
              <a href="#projects" onClick={(evt) => goToPortofolio(evt, 1)}>
                página para amantes de las cafeterías
              </a>
              . Además, tengo otros proyectos de los que estoy orgulloso y los
              podés ver en{" "}
              <a href="#projects" onClick={(evt) => goToPortofolio(evt, project)}>
                mi portfolio
              </a>
              .
            </p>
            <p>
              Soy de Argentina, por lo que mi comunicación más frecuente es por
              medio del español. De todos modos, manejo inglés e italiano con
              certificado B2 en ambos.
            </p>
          </div>

          <div className="about__text">
            <h2>Las tecnologías que aprendí</h2>
            <p>
              Éstas son las que incorporé hasta ahora, pero sigo en constante
              desarrollo, aprendiendo y poniendo en práctica continuamente todos
              los conocimientos adquiridos.
            </p>
            <div className="technologies">
              <HTML />
              <CSS />
              <JavaScript />
              <React />
              <TypeScript />
              <Tailwind />
              <NextJS />
              <Git />
            </div>
          </div>
        </section>

        <picture className="about__img" />
      </div>
    </div>
  );
}
