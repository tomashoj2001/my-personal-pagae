import { useState, useContext } from "react";
import json from "@/Assets/projects.json";
import useDesktop from "@/hooks/useDesktop";
import ProjectPreview from "./ProjectPreview";
import NavButtons from "../NavButtons";
import ThemeContext from "@/context/ThemeContext";

export default function ProjectInfo({ project, setProject }) {
  const { mode } = useContext(ThemeContext);
  const [desktop, setDesktop] = useState(0);
  const content = json[project];

  useDesktop(desktop);

  return (
    <div className="project__info">
      <section className="project__text">
        {content.description.map((el, index) => {
          return <p key={index}>{el}</p>;
        })}

        <section className="project__buttons">
          <a href={content.site} target="_blank">
            Ver página
          </a>
          <a href={content.code} target="_blank">
            Ver código
          </a>
        </section>

        {innerWidth > 600 && (
          <NavButtons size={"small"} setMethod={setProject} method={project} />
        )}
      </section>

      <ProjectPreview
        site={content.site}
        setDesktop={setDesktop}
        project={project}
        mode={mode}
      />
    </div>
  );
}
