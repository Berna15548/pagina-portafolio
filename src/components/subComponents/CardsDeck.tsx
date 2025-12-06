import { Card, Button, Group } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SlControlRewind, SlControlForward } from "react-icons/sl";
import {useEffect} from "react";

const cardsData = [
    { title: "Lic en adm", image: "https://www.educativa.com/wp-content/uploads/2020/09/certificado-ejemplo_-1024x698.jpg" },
    { title: "Cert curso programación", image: "https://www.educativa.com/wp-content/uploads/2020/09/certificado-01-1.jpg" },
    { title: "Cert Excel", image: "https://www.argentina.gob.ar/sites/default/files/certificado_de_desplazamiento_al_lugar_de_trabajo.jpg" },
    { title: "Cert curso fontan", image: "https://digitalchubut.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-07-at-17.09.04.jpeg" },
    { title: "Algún cert de Australia", image: "https://edit.org/img/blog/n/jdi-1024-disenos-editables-para-diplomas-y-certificados.webp" },
    { title: "IELTS", image: "https://www.lu4aa.org/wp/wp-content/uploads/2017/05/cert-tpa.jpg" },
];

const CardDeck = () => {
    const [index, setIndex] = useState(0);
    const [modalCard, setModalCard] = useState<number | null>(null);
    useEffect(() => {
        cardsData.forEach(card => {
            const img = new Image();
            img.src = card.image;
        });
    }, []);

    const nextCard = () => setIndex((prev) => (prev + 1) % cardsData.length);
    const prevCard = () => setIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);

    const nextModalCard = () => setModalCard((prev) => (prev! + 1) % cardsData.length);
    const prevModalCard = () => setModalCard((prev) => (prev! - 1 + cardsData.length) % cardsData.length);

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
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                >
                    <Card
                        shadow="sm"
                        padding="lg"
                        className="card-certificados"
                        style={{ cursor: "pointer" }}
                        onClick={() => setModalCard(index)}
                    >
                        <div className="titulo-card" >{cardsData[index].title}</div>
                        <img
                            src={cardsData[index].image}
                            alt={cardsData[index].title}
                            style={{ width: "100%", height: "100%", objectFit: "cover", }}
                        />
                    </Card>
                </motion.div>
            </AnimatePresence>

            {/*     =====       modal         ======      */}
            {modalCard !== null && (
                <div
                    className="modal-card"
y
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={modalCard}
                            src={cardsData[modalCard].image}
                            alt={cardsData[modalCard].title}
                            initial={{ x: 200, rotate: 10, opacity: 0 }}
                            animate={{ x: 0, rotate: 0, opacity: 1 }}
                            exit={{ x: -200, rotate: -10, opacity: 0 }}
                            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                            style={{
                                maxWidth: "90vw",
                                maxHeight: "80vh",
                                objectFit: "contain",
                                borderRadius: 12,
                            }}
                        />
                    </AnimatePresence>
                {/*     =====       botones cambio de card          ======      */}
                    <Button
                        color="transparent"
                        size="lg"
                        radius="xl"
                        onClick={prevModalCard}
                        className="esconder-boton-en-movil"
                        style={{
                            position: "absolute",
                            left: "20px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 1000,
                        }}
                    >
                        <SlControlRewind size={32} />
                    </Button>

                    <Button
                        color="transparent"
                        size="lg"
                        radius="xl"
                        onClick={nextModalCard}
                        className="esconder-boton-en-movil"
                        style={{
                            position: "absolute",
                            right: "20px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            zIndex: 1000,
                        }}
                    >
                        <SlControlForward size={32} />
                    </Button>

                    {/* Click afuera cierra */}
                    <div
                        onClick={() => setModalCard(null)}
                        style={{
                            position: "absolute",
                            inset: 0,
                            zIndex: 0,
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default CardDeck;
