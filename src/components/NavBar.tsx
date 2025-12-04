import '../App.scss'
import { Button } from "@mantine/core";
import {useState} from "react";
import {IconChevronsDown} from "@tabler/icons-react";
import {IconBurger} from "@tabler/icons-react";


const NavBar = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const deslizarPantalla = (id: string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuAbierto(false);
    };
    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <header id="nav-bar-container">
            <div id="nav-flex">
                <div id="nav-flex-pc">
                    <Button onClick={() => deslizarPantalla("inicio-container")}>
                        Inicio
                    </Button>

                    <Button onClick={() => deslizarPantalla("sobre-mi-container")}>
                        Sobre mi
                    </Button>

                    <Button onClick={() => deslizarPantalla("proyectos-container")}>
                        Proyectos
                    </Button>

                    <Button onClick={() => deslizarPantalla("contacto-container")}>
                        Contacto
                    </Button>
                </div>

                
                <IconBurger 
                    id="hamburger-icon"
                    stroke={2}
                    onClick={toggleMenu}
                />
                
                <div
                    id="nav-links"
                    className={menuAbierto ? 'menu-movil-activo' : ''}
                >
                    <Button onClick={() => deslizarPantalla("inicio-container")}>
                        <div
                            className="inner-button">
                            Inicio <IconChevronsDown
                            size={24}
                            stroke={1.5}/>
                        </div>
                    </Button>

                    <Button onClick={() => deslizarPantalla("sobre-mi-container")}>
                        <div className="inner-button">
                            Sobre mi <IconChevronsDown size={24} stroke={1.5} />
                        </div>
                    </Button>

                    <Button onClick={() => deslizarPantalla("proyectos-container")}>
                        <div className="inner-button">
                            Proyectos <IconChevronsDown size={24} stroke={1.5} />
                        </div>
                    </Button>

                    <Button onClick={() => deslizarPantalla("contacto-container")}>
                        <div className="inner-button">
                            Contacto <IconChevronsDown size={24} stroke={1.5} />
                        </div>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default NavBar