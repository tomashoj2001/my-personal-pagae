import arrowLight from "../Assets/arrow-light.png"
import arrowDark from "../Assets/arrow-dark.png"

export default function ProjectInfo({ content, project, setProject, mode }) {
  return (
    <div className="project__info">
      <section className="project__text">
        <p>{content.description[0]}</p>
        <p>{content.description[1]}</p>

        <section className="project__buttons">
          <a href={content.site} target="_blank">Ver página</a>
          <a href={content.code} target="_blank">Ver código</a>
        </section>

        <section className="project__navButtons">
          <img src={mode === 'light' ? arrowLight : arrowDark} onClick={() => {
              project >= 0 ? setProject(project--) : setProject(3)} 
            } 
          />
          <img src={mode === 'light' ? arrowLight : arrowDark} onClick={() => {
              project <= 3 ? setProject(project++) : setProject(0)} 
            } 
          />
        </section>
      </section>

      <section className="project__preview">
        <a href={content.site} target="_blank">
          <img className="project__img" src="/src/Assets/form-desktop.jpg"/>
        </a>
      </section>    
    </div>
  )
}