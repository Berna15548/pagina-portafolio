import '../App.scss'
import BadgesInicio from "./BadgesInicio.tsx";
import { IconChevronDown } from '@tabler/icons-react';

const Inicio = () => {

    const deslizarPantalla = (id : string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    
    return (
        <div id="inicio-container">

            <div id="espaciador-top-inicio"></div>
                
            <div id="div-background-inicio">

                <p>
                    Estimados saludos, soy Werner Lange y me dedico a la programación tanto en front como backend
                </p>

                <BadgesInicio/>
                
                <div className="flechas-abajo"
                >
                    <IconChevronDown className="flecha-libre" onClick={() => deslizarPantalla("sobre-mi-container")}/>
                    <IconChevronDown className="flecha-libre" onClick={() => deslizarPantalla("sobre-mi-container")}/>
                    <IconChevronDown className="flecha-libre" onClick={() => deslizarPantalla("sobre-mi-container")}/>
                </div>
                
            </div>




            
        </div>
    )
}

export default Inicio