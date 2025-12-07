import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesInitializer = () => {
    // ← Correcto: primer valor es el estado, segundo es el setter
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // Aquí cargas los plugins/bundles que necesites
            await loadSlim(engine);
            // Si quieres más funcionalidades: await loadFull(engine); etc.
        }).then(() => {
            setInit(true);
            console.log("tsParticles engine inicializado correctamente");
        });
    }, []); // solo una vez al montar la app

    return null;
};

export default ParticlesInitializer;