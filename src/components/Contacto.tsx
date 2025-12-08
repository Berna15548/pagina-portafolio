import {Stack} from "@mantine/core";
import {Badge} from "@mantine/core";
import '../App.scss'
import {IconBrandWhatsapp} from "@tabler/icons-react";
import {IconMail} from "@tabler/icons-react";
import {IconBrandGithub} from "@tabler/icons-react";

const Contacto = () => {
    
    
    /*This is my Digital portfolio @2021. All Rights Reserved.
    * I hope you got interested in my works!
    * */
    return (
        <div id="espaciador-top">
            <footer id="contacto-container">
                <div id="marca-de-agua">
                    Este es mi portafolio digital @2025.
                    <br/>
                    Todos los derechos reservados.
                </div>
                <Stack>
                    <div
                        className="cont-badge-contacto">
                        <IconBrandWhatsapp></IconBrandWhatsapp>
                        <label>
                            Whatsapp
                        </label>
                    </div>

                    <div
                        className="cont-badge-contacto">
                        <IconMail></IconMail>
                        <label>
                            Email
                        </label>
                    </div>

                    <div
                        className="cont-badge-contacto"
                        onClick={() => window.open("https://github.com/Berna15548?tab=repositories", "_blank")}
                    >
                        <IconBrandGithub></IconBrandGithub>

                        <label>
                            GitHub
                        </label>
                    </div>

                 {/*   <div
                        className="icon-box">
                        <i className="fab fa-whatsapp"></i>
                    </div>
*/}

                </Stack>

            </footer>
        </div>

    )
}

export default Contacto