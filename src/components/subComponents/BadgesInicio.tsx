import '@mantine/core/styles.css';
import {Group} from "@mantine/core";
import {Badge} from "@mantine/core";
import {IconBrandWhatsapp} from "@tabler/icons-react";
import {IconMail} from "@tabler/icons-react";
import {IconBrandGithub} from "@tabler/icons-react";



const BadgesInicio = () => {
    
    
    
    
    return (
        <div>

            <Group gap="lg" justify="space-around" mt="xl">

                <Badge
                    size="xl"
                    radius="lg"
                    leftSection={<IconBrandWhatsapp size={28} color="black" />}
                    className="badge-whatsapp"
                ></Badge>

                <Badge
                    size="xl"
                    radius="lg"
                    leftSection={<IconMail size={28} color="black" />}
                    className="badge-email"
                ></Badge>

                <Badge
                    size="xl"
                    radius="lg"
                    leftSection={<IconBrandGithub size={28} color="black" />}
                    className="badge-github"
                ></Badge>

            </Group>

            
        </div>
    )
}

export default BadgesInicio