import About from "./components/About/";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import NavButtons from "./components/NavButtons";
import Projects from "./components/Project";
import { PageContextProvider } from "./context/PageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ProjectContextProvider } from "./context/ProjectContext";
import "./App.css";

function App() {
  return (
    <PageContextProvider>
      <ThemeProvider>
        <Navbar />

        <ProjectContextProvider>
          <main>
            <About />
            <Projects />
            <Contact />
          </main>
        </ProjectContextProvider>

        <NavButtons size={"big"} setMethod={"page"} />
      </ThemeProvider>
    </PageContextProvider>
  );
}

export default App;
