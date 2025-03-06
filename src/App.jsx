import "./App.css";
import NavBar from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Studies } from "./components/Studies";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Projects />
        <Studies />
      </div>
    </>
  );
}

export default App;
