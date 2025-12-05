
import '../App.scss';
import CardsDeck from "./CardsDeck.tsx";
import CoverLetter from "./CoverLetter.tsx";
import Skills from "./Skills.tsx";


const SobreMi = () => {
    

    
    return (
        <div id="sobre-mi-container" style={{height: "fit-content!important"}}>

            <Skills />
            <div className="columna-sobremi">
                <CoverLetter/>
                <CardsDeck />
            </div>


        </div>

    )
}

export default SobreMi;
