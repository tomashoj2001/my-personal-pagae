import "./Project.css"
import { useEffect } from "react";
import ProjectInfo from "./Project-Info";
import ProjectNavbar from "./Project-Navbar";
import json from "../Assets/projects.json"


export default function Projects({ project, setProject, mode }) {
  useEffect(() => {
    let buttons = [...document.querySelectorAll('.project-navbar button')]
    buttons.forEach(el => el.classList.remove('active'))
    buttons[project].classList.add('active')

    document.querySelector('.project__img').src = json[project].desktopImage

  }, [project])
  
  return (
    <div className="project container">
      <h1>Te muestro mis proyectos favoritos :)</h1>
      <ProjectNavbar setProject={setProject}/>
      <ProjectInfo content={json[project]} project={project} setProject={setProject} mode={mode}/>
    </div>
  )
}