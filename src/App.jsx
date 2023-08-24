import About from "./components/About/";
import Contact from "./components/Contact";
import DarkButton from "./components/DarkButton";
import Navbar from "./components/Navbar";
import NavButtons from "./components/NavButtons";
import Projects from "./components/Project";
import { PageContextProvider } from "./context/PageContext";
import { ThemeProvider } from "./context/ThemeContext";

import "./App.css";

function App() {
  return (
    <PageContextProvider>
      <ThemeProvider>
        <Navbar />
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
        <NavButtons size={"big"} setMethod={"page"} />
      </ThemeProvider>
    </PageContextProvider>
  );
}

export default App;
