import { Badge, Card } from "@mantine/core";
import {
    SiReact, SiAngular, SiFigma, SiJavascript, SiTypescript, SiCss3, SiSass, SiBootstrap, SiMantine,
    SiMysql, SiFirebase, SiPostman, SiSwagger,
    SiIntellijidea, SiTrello, SiAdobephotoshop, SiKrita, SiGoogledocs,
} from "react-icons/si";
import '../App.scss';
import {SiMaterialdesign} from "react-icons/si";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { VscVscodeInsiders } from "react-icons/vsc";


const SobreMi = () => {
    

    
    return (
        <div id="sobre-mi-container">
            <div className="cuadro-sobremi">
                <div className="p-overflow">
                    <h3>Buenas tardes, soy Werner Lange y me dedico al diseño y desarrollo web.</h3>
                    <p>
                        {`Tengo 29 años de edad, soy licenciado en Administración de Empresas y finalisé el curso de programación dictado por el IPFL, (duración de un año), en el cual se desarrollaron los siguientes módulos:

                        - Metodología para el desarrollo de software
                        - Interfaz gráfica Web
                        - Programación de bases de datos
                        - Programación Web
                        - Proyecto Integrador (App multiplataforma para generar curriculums personales)
                        
                        He utilizado gran variedad de herramientas de software en mi portafolio y, en adición a mis habilidades, tengo un nivel de inglés fluido tras haber residido en Australia por 3 años.
                        Busco oportunidades donde pueda aplicar y expandir mis habilidades, trabajar en proyectos desafiantes y aprender todo lo posible en un ambiente laboral profesional.`}
                    </p>
                </div>
            </div>

            <div className="cuadro-sobremi">
                <div id="skills">
                    <h3>Herramientas de Front</h3>
                    <div className="skills-badge">
                        <Badge><SiReact />React</Badge>
                        <Badge><SiAngular />Angular</Badge>
                        <Badge><SiFigma />Figma</Badge>
                        <Badge><SiJavascript />JavaScript</Badge>
                        <Badge><SiTypescript />Typescript</Badge>
                        <Badge><SiCss3 />Css</Badge>
                        <Badge><SiSass />Scss</Badge>
                        <Badge><SiBootstrap />Bootstrap</Badge>
                        <Badge><SiMantine />Mantine</Badge>
                        <Badge><SiMaterialdesign />Materials</Badge>
                    </div>

                    <h3>Herramientas Backend</h3>
                    <div className="skills-badge">
                        <Badge><SiMysql />MySQL</Badge>
                        <Badge><SiFirebase />Firebase</Badge>
                        <Badge><SiPostman />Postman</Badge>
                        <Badge><SiSwagger />Swagger</Badge>
                    </div>

                    <h3>Herramientas Auxiliares</h3>
                    <div
                        className="skills-badge">
                        <Badge><SiIntellijidea
                            style={{marginRight: 5}}/>IntelliJ</Badge>
                        <Badge>
                            <VscVscodeInsiders
                                style={{marginRight: 5}}
                            />
                            VSC
                        </Badge>
                        <Badge><SiTrello
                            style={{marginRight: 5}}/>Trello</Badge>
                        <Badge><SiAdobephotoshop
                            style={{marginRight: 5}}/>Photoshop</Badge>
                        <Badge><SiKrita
                            style={{marginRight: 5}}/>Krita</Badge>
                        <Badge>
                            <FontAwesomeIcon icon={faFileExcel} style={{ marginRight: 5 }} />
                            Excel
                        </Badge>

                        <Badge><SiGoogledocs
                            style={{marginRight: 5}}/>Google Docs</Badge>
                    </div>
                </div>
            </div>

            <div className="cuadro-sobremi">
                <Card>Lic en adm</Card>
                <Card>Cert curso programación</Card>
                <Card>Cert Excel</Card>
                <Card>Cert curso fontan</Card>
                <Card>Algún cert de Australia</Card>
                <Card>IELTS</Card>
            </div>
        </div>
    )
}

export default SobreMi;
