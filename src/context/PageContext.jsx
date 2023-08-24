import React, { useEffect, useState } from "react";

const Context = React.createContext({});

export function PageContextProvider({ children }) {
  const [page, setPage] = useState(0);

  useEffect(() => {
    let buttons = [...document.querySelectorAll(".navbar__buttons button")];
    buttons.forEach((el) => el.classList.remove("active"));
    buttons[page].classList.add("active");

    let main = document.querySelector("main");
    main.style.transform = `translateX(${-100 * page}vw)`;
  }, [page]);

  return (
    <Context.Provider value={{ page, setPage }}>{children}</Context.Provider>
  );
}

export default Context;
