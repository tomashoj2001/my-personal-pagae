import { useState } from "react"

import json from "@/Assets/projects.json"
import useDesktop from "@/hooks/useDesktop"

import ProjectPreview from "./ProjectPreview"
import NavButtons from "../NavButtons"

export default function ProjectInfo({ project, setProject }) {
  let content = json[project]
  
  let [desktop, setDesktop] = useState(0)
  useDesktop(desktop)

  return (
    <div className="project__info">
      <section className="project__text">
        <p>{content.description[0]}</p>
        <p>{content.description[1]}</p>

        <section className="project__buttons">
          <a href={content.site} target="_blank">Ver página</a>
          <a href={content.code} target="_blank">Ver código</a>
        </section>

        <NavButtons size={'small'} setMethod={setProject} method={project} />
      </section>

      <ProjectPreview site={content.site} setDesktop={setDesktop} project={project} />
    </div>
  )
}