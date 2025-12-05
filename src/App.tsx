import './App.scss'
import SobreMi from "./components/SobreMi.tsx";
import NavBar from "./components/NavBar.tsx";
import Inicio from "./components/Inicio.tsx";
import Proyectos from "./components/Proyectos.tsx";
import Contacto from "./components/Contacto.tsx";
import ParticlesComponent from "./components/ParticlesComponent.tsx";
import {useState} from "react";
import {CssLoader} from "./components/CssLoader.tsx";
import {useEffect} from "react";

function App() {

    const [loading, setLoading] = useState(true);

    // Simular tiempo de carga
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // 2s de loader
        return () => clearTimeout(timer);
    }, []);
    /*  ====== pantalla de carga   ========    */
    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: "black",
                width: "100vw",
            }}>
                <CssLoader  />
            </div>
        );
    }
    
    /*      ========        app         ========*/
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