import { Badge } from "@mantine/core";

// @ts-ignore
const SkillBadge = ({ icon: Icon, label }) => {
    const timeOut = (e) => {
        setTimeout(() => e.currentTarget.blur(), 400);
    };

    return (
        <Badge tabIndex={0} onFocus={timeOut}>
            <div className="skill-icon">
                <Icon />
            </div>
            {label}
        </Badge>
    );
};

export default SkillBadge;
