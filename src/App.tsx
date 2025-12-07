import './App.scss';
import SobreMi from "./components/SobreMi.tsx";
import NavBar from "./components/NavBar.tsx";
import Inicio from "./components/Inicio.tsx";
import Proyectos from "./components/Proyectos.tsx";
import Contacto from "./components/Contacto.tsx";
import ParticlesComponent from "./components/Canvas/ParticlesComponent.tsx";
import { useState, useEffect } from "react";
import { CssLoader } from "./components/Canvas/CssLoader.tsx";
import ParticlesInitializer from "./components/Canvas/ParticlesInitializer.tsx";


function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const MINIMUM_LOADING_TIME = 2000; // tiempo minimo de laoding
        const startTime = Date.now();

        const handleLoad = () => {
            const elapsedTime = Date.now() - startTime;

            if (elapsedTime >= MINIMUM_LOADING_TIME) {
                setLoading(false);
            } else {
                const remainingTime = MINIMUM_LOADING_TIME - elapsedTime;
                const timer = setTimeout(() => {
                    setLoading(false);
                }, remainingTime);

                return () => clearTimeout(timer);
            }
        };

        if (document.readyState === 'complete') {
            handleLoad();
            return;
        }
        
        window.addEventListener('load', handleLoad);
        
        //tiempo maximo de loading
        const fallbackTimer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => {
            window.removeEventListener('load', handleLoad);
            clearTimeout(fallbackTimer);
        };
    }, []);

    /* ====== Pantalla de carga ====== */
    if (loading) {
        return (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#000',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999,
                }}
            >
                <CssLoader />
            </div>
        );
    }

    /* ====== App principal ====== */
    return (
        <div style={{backgroundColor: "#4c4cd0"}}>
            <ParticlesInitializer />
            <ParticlesComponent id="particles-global" />
            <div id="app-container">
                <NavBar />
                <Inicio />
                <SobreMi />
                <Proyectos />
                <Contacto />
            </div>


        </div>
    );
}

export default App;