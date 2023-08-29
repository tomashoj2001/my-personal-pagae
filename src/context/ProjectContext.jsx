import React, { useEffect, useState } from "react";

const Context = React.createContext({});

export function ProjectContextProvider({ children }) {
  const [project, setProject] = useState(0);

  useEffect(() => {
    let buttons = [...document.querySelectorAll(".project-navbar button")];
    buttons.forEach((el) => el.classList.remove("active"));
    buttons[project].classList.add("active");
  }, [project]);

  return (
    <Context.Provider value={{ project, setProject }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
