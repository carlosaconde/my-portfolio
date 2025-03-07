import "./App.css";
import { Contact } from "./components/Contact";
import NavBar from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Studies } from "./components/Studies";
import { Tecnologies } from "./components/Tecnologies";
import { Vortex } from "./components/Vortex";
function App() {
  return (
    <>
      <Vortex>
        <NavBar />
        <Projects />
        <Studies />
        <Tecnologies />
        <Contact />
      </Vortex>
    </>
  );
}

export default App;
