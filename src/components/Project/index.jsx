import { useEffect, useState } from "react";

import json from "../../assets/projects.json"

import ProjectInfo from "./ProjectInfo";
import ProjectNavbar from "./ProjectNavbar";

import "./Project.css"


export default function Projects({ mode }) {
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
      <ProjectInfo content={json[project]} project={project} setProject={setProject} mode={mode}/>
    </div>
  )
}