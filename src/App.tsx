import './App.scss'
import SobreMi from "./components/SobreMi.tsx";
import NavBar from "./components/NavBar.tsx";
import Inicio from "./components/Inicio.tsx";
import Proyectos from "./components/Proyectos.tsx";
import Contacto from "./components/Contacto.tsx";
import ParticlesComponent from "./components/ParticlesComponent.tsx";

function App() {



    return (
        <>
            <div id="app-container">
                <NavBar/>
                <Inicio/>
                <SobreMi/>
                <Proyectos/>
                <Contacto/>
            </div>
            <ParticlesComponent/>

        </>

    )
}

export default App