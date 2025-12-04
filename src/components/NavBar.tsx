import '../App.scss'
import {Button} from "@mantine/core";

const NavBar = () => {


    const deslizarPantalla = (id : string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };




    return (
        <header id="nav-bar-container">
            <div id="nav-flex">
                <Button onClick={() => deslizarPantalla("inicio-container")}>Inicio</Button>
                <Button onClick={() => deslizarPantalla("sobre-mi-container")}>Sobre mi</Button>
                <Button onClick={() => deslizarPantalla("proyectos-container")}>Proyectos</Button>
                <Button onClick={() => deslizarPantalla("contacto-container")}>Contacto</Button>
            </div>

        </header>
    )
}

export default NavBar
