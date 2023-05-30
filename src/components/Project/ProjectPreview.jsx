import tourismDesktop from "@/Assets/spacetourism-desktop.jpg"
import tourismMobile from "@/Assets/spacetourism-mobile.jpg"
import calculatorDesktop from "@/Assets/tipcalculator-desktop.jpg"
import calculatorMobile from "@/Assets/tipcalculator-mobile.jpg"
import landingDesktop from "@/Assets/landing-desktop.jpg"
import landingMobile from "@/Assets/landing-mobile.jpg"
import countriesDesktopLight from "@/Assets/country-desktop-light.jpg"
import countriesDesktopDark from "@/Assets/country-desktop-dark.jpg"
import countriesMobileLight from "@/Assets/country-mobile-light.jpg"
import countriesMobileDark from "@/Assets/country-mobile-dark.jpg"

export default function ProjectPreview({ site, setDesktop, project, mode }) {
  const images = [[tourismDesktop, tourismMobile], [calculatorDesktop, calculatorMobile]]
  if (mode === 'light') images.push([countriesDesktopLight, countriesMobileLight])
  else images.push([countriesDesktopDark, countriesMobileDark])
  images.push([landingDesktop, landingMobile])

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
