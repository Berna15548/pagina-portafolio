import { Card, Text, Button, Group } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import {useState} from "react";

const cardsData = [
    "Lic en adm",
    "Cert curso programación",
    "Cert Excel",
    "Cert curso fontan",
    "Algún cert de Australia",
    "IELTS",
];

const CardDeck = () => {
    const [index, setIndex] = useState(0);

    const nextCard = () => setIndex((prev) => (prev + 1) % cardsData.length);
    const prevCard = () =>
        setIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);

    return (
        <div id="cards-container">
            <Group mt="md">
                <Button onClick={prevCard}>Anterior</Button>
                <Button onClick={nextCard}>Siguiente</Button>
            </Group>
            <AnimatePresence mode="wait" >
                <motion.div
                    key={index}
                    initial={{ x: 300, rotate: 10, opacity: 0 }}
                    animate={{ x: 0, rotate: 0, opacity: 1 }}
                    exit={{ x: -300, rotate: -10, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    <Card
                        shadow="sm"
                        padding="lg"
                        className="card-certificados"
                    >
                        <Text>{cardsData[index]}</Text>
                    </Card>
                </motion.div>
            </AnimatePresence>
            
        </div>
    );
};

export default CardDeck;
