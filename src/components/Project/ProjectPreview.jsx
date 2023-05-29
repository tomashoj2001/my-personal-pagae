import tourismDesktop from "@/Assets/spacetourism-desktop.jpg"
import tourismMobile from "@/Assets/spacetourism-mobile.jpg"
import calculatorDesktop from "@/Assets/tipcalculator-desktop.jpg"
import calculatorMobile from "@/Assets/tipcalculator-mobile.jpg"
import landingDesktop from "@/Assets/landing-desktop.jpg"
import landingMobile from "@/Assets/landing-mobile.jpg"
import formDesktop from "@/Assets/form-desktop.jpg"
import formMobile from "@/Assets/form-mobile.jpg"

const images = [[tourismDesktop, tourismMobile], [calculatorDesktop, calculatorMobile], [landingDesktop, landingMobile], [formDesktop, formMobile]]

export default function ProjectPreview({ site, setDesktop, project }) {
  const img = images[project]

  return (
  <section className="project__preview">
    <a className="project__slider" href={site} target="_blank">      
      <img className="project__img project__img--desktop" src={img[0]} alt="Proyecto escritorio"/>
      <img className="project__img project__img--mobile" src={img[1]} alt="Proyecto teléfono"/>
    </a>
    <div className="preview__buttons">
      <button onClick={() => setDesktop(0)}>Desktop</button>
      <button onClick={() => setDesktop(1)}>Mobile</button>
    </div>
  </section> 
  )
}
