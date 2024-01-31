import { useContext } from "react";
import ProjectInfo from "./ProjectInfo";
import ProjectNavbar from "./ProjectNavbar";
import ProjectContext from "@/context/ProjectContext";
import "./Project.css";

export default function Projects() {
  const { project, setProject } = useContext(ProjectContext);

  return (
    <div id="projects" className="project container">
      <h1>Te muestro mis proyectos favoritos :)</h1>
      <ProjectNavbar project={project} setProject={setProject} />
      <ProjectInfo project={project} setProject={setProject} />
    </div>
  );
}
