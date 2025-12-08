import '@mantine/core/styles.css';
import { Group, Badge, Tooltip } from "@mantine/core";
import { IconBrandWhatsapp, IconMail, IconBrandGithub } from "@tabler/icons-react";
import { useClipboard } from "@mantine/hooks";
import { contactos } from "../../Data/contactData.ts";
import { useState } from "react";

const BadgesInicio = () => {
    const clipboard = useClipboard({ timeout: 1500 });
    const [showTooltip, setShowTooltip] = useState({
        whatsapp: false,
        email: false,
        github: false,
    });

    const handleCopy = (tipo: "whatsapp" | "email") => {
        const text = tipo === "whatsapp" ? contactos.whatsapp : contactos.email;
        clipboard.copy(text);
        setShowTooltip((prev) => ({ ...prev, [tipo]: true }));
        setTimeout(() => setShowTooltip((prev) => ({ ...prev, [tipo]: false })), 1500);
    };

    return (
        <div>
            <Group gap="lg" justify="space-around" mt="xl">

                {/* WhatsApp */}
                <Tooltip
                    label="Número copiado!"
                    withArrow
                    opened={showTooltip.whatsapp}
                >
                    <Badge
                        size="xl"
                        radius="lg"
                        leftSection={<IconBrandWhatsapp size={28} color="black" />}
                        className="badge-whatsapp"
                        onClick={() => handleCopy("whatsapp")}
                    />
                </Tooltip>

                {/* Email */}
                <Tooltip
                    label="Email copiado!"
                    withArrow
                    opened={showTooltip.email}
                >
                    <Badge
                        size="xl"
                        radius="lg"
                        leftSection={<IconMail size={28} color="black" />}
                        className="badge-email"
                        onClick={() => handleCopy("email")}
                    />
                </Tooltip>

                {/* GitHub */}
                <Badge
                    size="xl"
                    radius="lg"
                    leftSection={<IconBrandGithub size={28} color="black" />}
                    className="badge-github"
                    onClick={() => {
                        window.open(contactos.github, "_blank");
                        setShowTooltip((prev) => ({ ...prev, github: true }));
                        setTimeout(() => setShowTooltip((prev) => ({ ...prev, github: false })), 1500);
                    }}
                />

            </Group>
        </div>
    );
};

export default BadgesInicio;
