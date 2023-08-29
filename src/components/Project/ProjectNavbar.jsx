import NavButtons from "../NavButtons";

export default function ProjectNavbar({ project, setProject }) {
  return (
    <div className="mobileContainer">
      <nav className="project-navbar">
        <button onClick={() => setProject(0)}>Landing Page de inmueble</button>
        <button onClick={() => setProject(1)}>Coffy</button>
        <button onClick={() => setProject(2)}>Wiki de países</button>
        <button onClick={() => setProject(3)}>
          Multipage de Turismo Espacial
        </button>
      </nav>
      {innerWidth < 600 && (
        <NavButtons size={"small"} setMethod={setProject} method={project} />
      )}
    </div>
  );
}
