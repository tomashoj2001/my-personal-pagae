export default function ProjectNavbar ({ setProject }) {
  return (
    <nav className="project-navbar">
      <button onClick={() => setProject(0)}>Multipage de Turismo Espacial</button>
      <button onClick={() => setProject(1)}>Calculadora de Propinas</button>
      <button onClick={() => setProject(2)}>Landing Page con consumo de API</button>
      <button onClick={() => setProject(3)}>Formulario Multi Paso</button>
    </nav>
  )
}
