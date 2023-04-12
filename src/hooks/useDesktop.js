import { useEffect } from "react"

export default function useDesktop(desktop) {
  useEffect(() => {
    let buttons = [...document.querySelectorAll('.preview__buttons button')]
    buttons.forEach(el => el.classList.remove('active'))
    buttons[desktop].classList.add('active')

    let slider = document.querySelector('.project__slider')
    slider.style.transform = `translateX(${-desktop * 100}%)`
  }, [desktop])

  setTimeout(() => {
    let height = document.querySelector('a .project__img--desktop').offsetHeight
    document.querySelector('a .project__img--mobile').style.height = `${height}px`
  }, 250)
}