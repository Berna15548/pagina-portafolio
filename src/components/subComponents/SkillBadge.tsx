import { Badge } from "@mantine/core";
import {useState} from "react";

// @ts-ignore
const SkillBadge = ({ icon: Icon, label, link }) => {

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const [contador, setContador] = useState(0);

    // 1. Nuevo estado para controlar si el badge está "activo"
    const [isActive, setIsActive] = useState(false);

    // 2. Función para manejar el clic/toque
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log("badge clikeado" + (contador + 1));
        setContador(prev => prev + 1);

        if (isMobile) {
            // 3. En móvil, cambiamos el estado para aplicar el CSS de :focus
            if (!isActive) {
                setIsActive(true);

                // 4. Implementamos un timeout similar a timeOut, pero controlado por estado
                setTimeout(() => {
                    setIsActive(false);
                }, 2000);
            } else {
                // Si ya estaba activo, y tiene link, lo abre (comportamiento de doble clic)
                if (link) {
                    window.open(link, "_blank", "noopener,noreferrer");
                }
                setIsActive(false); // Quitar el estado después de abrir/segundo clic
            }
        } else if (link) {
            // 5. Comportamiento en escritorio: abrir el link directamente
            window.open(link, "_blank", "noopener,noreferrer");
        }

        // 6. Eliminar la llamada a e.currentTarget.blur()
    };

    return (
        <Badge
            // 7. Eliminar tabIndex={0} y onFocus={timeOut}
            onClick={handleClick}
            // 8. Aplicar una clase CSS basada en el estado `isActive`
            className={isActive ? "mantine-Badge-root badge-activo" : "mantine-Badge-root"}
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