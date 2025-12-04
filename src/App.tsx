
import './App.scss'
import SobreMi from "./components/SobreMi.tsx";
import NavBar from "./components/NavBar.tsx";
import Inicio from "./components/Inicio.tsx";
import Proyectos from "./components/Proyectos.tsx";
import Contacto from "./components/Contacto.tsx";

function App() {
/*
    useEffect(() => {
        /!*lo q se ejecuta 1 ves al cargar la pagina*!/
    }, []);

    */
    
    
    return (
    <div id="app-container">
      <NavBar/>
      <Inicio/>
      <SobreMi/>
      <Proyectos/>
      <Contacto/>
    </div>
  )
}/**/

export default App
