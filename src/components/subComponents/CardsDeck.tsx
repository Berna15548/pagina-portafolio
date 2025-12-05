import { Card, Text, Button, Group } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SlControlRewind, SlControlForward } from "react-icons/sl";

const cardsData = [
    { title: "Lic en adm", image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg" },
    { title: "Cert curso programación", image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" },
    { title: "Cert Excel", image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg" },
    { title: "Cert curso fontan", image: "https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg" },
    { title: "Algún cert de Australia", image: "https://images.pexels.com/photos/2908178/pexels-photo-2908178.jpeg" },
    { title: "IELTS", image: "https://images.pexels.com/photos/159711/pexels-photo-159711.jpeg" },
];

const CardDeck = () => {
    const [index, setIndex] = useState(0);
    const [modalCard, setModalCard] = useState<number | null>(null);

    const nextCard = () => setIndex((prev) => (prev + 1) % cardsData.length);
    const prevCard = () => setIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);

    return (
        <div id="cards-container" style={{ textAlign: "center" }}>
            <Group mt="md" style={{ display: "flex", justifyContent: "space-around" }}>
                <Button color="transparent" size="lg" radius="xl" onClick={prevCard}>
                    <SlControlRewind size={32} />
                </Button>
                <Button color="transparent" size="lg" radius="xl" onClick={nextCard}>
                    <SlControlForward size={32} />
                </Button>
            </Group>

            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ x: 200, rotate: 10, opacity: 0 }}
                    animate={{ x: 0, rotate: 0, opacity: 1 }}
                    exit={{ x: -200, rotate: -10, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    <Card
                        shadow="sm"
                        padding="lg"
                        className="card-certificados"
                        style={{ cursor: "pointer" }}
                        onClick={() => setModalCard(index)}
                    >
                        <Text>{cardsData[index].title}</Text>
                        <img
                            src={cardsData[index].image}
                            alt={cardsData[index].title}
                            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
                        />
                    </Card>
                </motion.div>
            </AnimatePresence>

            {/* Modal */}
            {modalCard !== null && (
                <div
                    onClick={() => setModalCard(null)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.85)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999,
                        cursor: "pointer",
                    }}
                >
                    <img
                        src={cardsData[modalCard].image}
                        alt={cardsData[modalCard].title}
                        style={{
                            maxWidth: "95vw",
                            maxHeight: "95vh",
                            objectFit: "contain",
                            borderRadius: "12px",
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default CardDeck;
