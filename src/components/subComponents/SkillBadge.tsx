import { Badge } from "@mantine/core";

// @ts-ignore
const SkillBadge = ({ icon: Icon, label, link }) => {
    const timeOut = (e) => {
        setTimeout(() => e.currentTarget.blur(), 400);
    };

    
    const isMobile = window.matchMedia("(max-width: 768px)").matches; // esto es para desactivar los links en pantalla de celular

    const handleClick = () => {
        if (!isMobile && link) {
            window.open(link, "_blank", "noopener,noreferrer");
        }
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
