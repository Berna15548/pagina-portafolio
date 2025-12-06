import { Badge } from "@mantine/core";
import {useState} from "react";

// @ts-ignore
const SkillBadge = ({ icon: Icon, label, link }) => {

    const timeOut = (e: React.FocusEvent<HTMLDivElement>) => {
        const elemento = e.currentTarget; 
        setTimeout(() => {
            elemento.blur(); 
        }, 2000);
    };

    const isMobile = window.matchMedia("(max-width: 768px)").matches;


    const [contador, setContador] = useState(0);
    
    
    

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log("badge clikeado" + contador)
        setContador(prev => prev + 1);
        
        
        
        if (!isMobile && link) {
            window.open(link, "_blank", "noopener,noreferrer");
        }
        e.currentTarget.blur();
    };

    return (
        <Badge
            tabIndex={0}
            onFocus={timeOut}
            onClick={handleClick}
            style={{
                cursor: !isMobile && link ? "pointer" : "default",
                pointerEvents: "auto"
            }}
        >
            <div className="skill-icon">
                <Icon />
            </div>
            {label}
        </Badge>
    );
};

export default SkillBadge;