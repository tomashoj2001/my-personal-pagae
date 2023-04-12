import { useEffect, useState } from "react";

import ProjectInfo from "./ProjectInfo";
import ProjectNavbar from "./ProjectNavbar";

import "./Project.css"

export default function Projects() {
  let [project, setProject] = useState(0)

  useEffect(() => {
    let buttons = [...document.querySelectorAll('.project-navbar button')]
    buttons.forEach(el => el.classList.remove('active'))
    buttons[project].classList.add('active')
  }, [project])
  
  return (
    <div className="project container">
      <h1>Te muestro mis proyectos favoritos :)</h1>
      <ProjectNavbar setProject={setProject}/>
      <ProjectInfo project={project} setProject={setProject} />
    </div>
  )
}