import { useEffect, useState } from "react";

export default function usePage() {
  let [page, setPage] = useState(0)

  useEffect(() => {
    let buttons = [...document.querySelectorAll(".navbar__buttons button")]
    buttons.forEach(el => el.classList.remove('active'))
    buttons[page].classList.add('active')

    let main = document.querySelector('main')
    main.style.transform = `translateX(${-100 * page}vw)`
  }, [page])

  return {page, setPage}
}