export default function ProjectPreview({ content, setDesktop }) {
  return (
  <section className="project__preview">
    <a className="project__slider" href={content.site} target="_blank">      
      <img className="project__img project__img--desktop" alt="Proyecto escritorio"/>
      <img className="project__img project__img--mobile" alt="Proyecto teléfono"/>
    </a>
    <div className="preview__buttons">
      <button onClick={() => setDesktop(0)}>Desktop</button>
      <button onClick={() => setDesktop(1)}>Mobile</button>
    </div>
  </section> 
  )
}