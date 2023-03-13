import "./Project.css"
import { useEffect } from "react";
import ProjectInfo from "./ProjectInfo";
import ProjectNavbar from "./ProjectNavbar";
import json from "../Assets/projects.json"


export default function Projects({ project, setProject, mode }) {
  useEffect(() => {
    let buttons = [...document.querySelectorAll('.project-navbar button')]
    buttons.forEach(el => el.classList.remove('active'))
    buttons[project].classList.add('active')

    document.querySelector('a .project__img--desktop').src = json[project].desktopImage
    document.querySelector('a .project__img--mobile').src = json[project].mobileImage
  }, [project])
  
  return (
    <div className="project container">
      <h1>Te muestro mis proyectos favoritos :)</h1>
      <ProjectNavbar setProject={setProject}/>
      <ProjectInfo content={json[project]} project={project} setProject={setProject} mode={mode}/>
    </div>
  )
}