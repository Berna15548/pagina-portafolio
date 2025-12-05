import SkillBadge from "./SkillBadge";

import {
    SiReact,
    SiAngular,
    SiFigma,
    SiJavascript,
    SiTypescript,
    SiCss3,
    SiSass,
    SiBootstrap,
    SiMantine,
    SiMaterialdesign,
    SiMysql,
    SiFirebase,
    SiPostman,
    SiSwagger,
    SiIntellijidea,
    SiTrello,
    SiAdobephotoshop,
    SiKrita,
    SiGoogledocs,
} from "react-icons/si";

import { VscVscodeInsiders } from "react-icons/vsc";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
    const front = [
        { icon: SiReact, label: "React" },
        { icon: SiAngular, label: "Angular" },
        { icon: SiFigma, label: "Figma" },
        { icon: SiJavascript, label: "JavaScript" },
        { icon: SiTypescript, label: "Typescript" },
        { icon: SiCss3, label: "Css" },
        { icon: SiSass, label: "Scss" },
        { icon: SiBootstrap, label: "Bootstrap" },
        { icon: SiMantine, label: "Mantine" },
        { icon: SiMaterialdesign, label: "Materials" },
    ];

    const backend = [
        { icon: SiMysql, label: "MySQL" },
        { icon: SiFirebase, label: "Firebase" },
        { icon: SiPostman, label: "Postman" },
        { icon: SiSwagger, label: "Swagger" },
    ];

    const aux = [
        { icon: SiIntellijidea, label: "IntelliJ" },
        { icon: VscVscodeInsiders, label: "VSC" },
        { icon: SiTrello, label: "Trello" },
        { icon: SiAdobephotoshop, label: "Photoshop" },
        { icon: SiKrita, label: "Krita" },
        { icon: (props: any) => <FontAwesomeIcon {...props} icon={faFileExcel} />, label: "Excel" },
        { icon: SiGoogledocs, label: "Google Docs" },
    ];

    return (
        <div className="cuadro-sobremi" style={{ height: "fit-content" }}>
            <div id="skills">
                <h3>Herramientas de Front</h3>
                <div className="skills-badge">
                    {front.map((item) => (
                        <SkillBadge key={item.label} icon={item.icon} label={item.label} />
                    ))}
                </div>

                <h3>Herramientas Backend</h3>
                <div className="skills-badge">
                    {backend.map((item) => (
                        <SkillBadge key={item.label} icon={item.icon} label={item.label} />
                    ))}
                </div>

                <h3>Herramientas Auxiliares</h3>
                <div className="skills-badge">
                    {aux.map((item) => (
                        <SkillBadge key={item.label} icon={item.icon} label={item.label} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;