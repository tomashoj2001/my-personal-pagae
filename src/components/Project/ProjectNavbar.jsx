export default function ProjectNavbar({ setProject }) {
  return (
    <nav className="project-navbar">
      <button onClick={() => setProject(0)}>Landing Page de inmueble</button>
      <button onClick={() => setProject(1)}>
        Multipage de Turismo Espacial
      </button>
      <button onClick={() => setProject(2)}>Wiki de países</button>
      <button onClick={() => setProject(3)}>Calculadora de Propinas</button>
    </nav>
  );
}
