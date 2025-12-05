import {Badge} from "@mantine/core";
import {SiReact} from "react-icons/si";
import {SiAngular} from "react-icons/si";
import {SiFigma} from "react-icons/si";
import {SiJavascript} from "react-icons/si";
import {SiTypescript} from "react-icons/si";
import {SiCss3} from "react-icons/si";
import {SiSass} from "react-icons/si";
import {SiBootstrap} from "react-icons/si";
import {SiMantine} from "react-icons/si";
import {SiMaterialdesign} from "react-icons/si";
import {SiMysql} from "react-icons/si";
import {SiFirebase} from "react-icons/si";
import {SiPostman} from "react-icons/si";
import {SiSwagger} from "react-icons/si";
import {SiIntellijidea} from "react-icons/si";
import {VscVscodeInsiders} from "react-icons/vsc";
import {SiTrello} from "react-icons/si";
import {SiAdobephotoshop} from "react-icons/si";
import {SiKrita} from "react-icons/si";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileExcel} from "@fortawesome/free-solid-svg-icons";
import {SiGoogledocs} from "react-icons/si";

const Skills = () => {
    
    
    
    return (
        <div className="cuadro-sobremi" style={{height: "fit-content!important"}}>
            <div id="skills">
                <h3>Herramientas de Front</h3>
                <div className="skills-badge">
                    <Badge>
                        <div className="skill-icon">
                            <SiReact/>
                        </div>
                        React
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiAngular/>
                        </div>
                        Angular
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiFigma/>
                        </div>
                        Figma
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiJavascript/>
                        </div>
                        JavaScript
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiTypescript/>
                        </div>
                        Typescript
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiCss3/>
                        </div>
                        Css
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiSass/>
                        </div>
                        Scss
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiBootstrap/>
                        </div>
                        Bootstrap
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiMantine/>
                        </div>
                        Mantine
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiMaterialdesign/>
                        </div>
                        Materials
                    </Badge>
                </div>

                <h3>Herramientas Backend</h3>
                <div className="skills-badge">
                    <Badge>
                        <div className="skill-icon">
                            <SiMysql/>
                        </div>
                        MySQL
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiFirebase/>
                        </div>
                        Firebase
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiPostman/>
                        </div>
                        Postman
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiSwagger/>
                        </div>
                        Swagger
                    </Badge>
                </div>

                <h3>Herramientas Auxiliares</h3>
                <div className="skills-badge">
                    <Badge>
                        <div className="skill-icon">
                            <SiIntellijidea/>
                        </div>
                        IntelliJ
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <VscVscodeInsiders/>
                        </div>
                        VSC
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiTrello/>
                        </div>
                        Trello
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiAdobephotoshop/>
                        </div>
                        Photoshop
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiKrita/>
                        </div>
                        Krita
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <FontAwesomeIcon icon={faFileExcel}/>
                        </div>
                        Excel
                    </Badge>
                    <Badge>
                        <div className="skill-icon">
                            <SiGoogledocs/>
                        </div>
                        Google Docs
                    </Badge>
                </div>
            </div>
        </div>
    )
}
export default Skills