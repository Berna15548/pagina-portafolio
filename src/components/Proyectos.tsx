import { Paper, Title } from "@mantine/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.scss";

const Proyectos = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div id="proyectos-container" style={{ maxWidth: 400, margin: "0 auto" }}>
            <Slider {...settings}>
                <div>
                    <Paper p="xl">
                        <Title order={3}>APP CVS</Title>
                        <p>Este es el primer elemento del carrusel.</p>
                    </Paper>
                </div>

                <div>
                    <Paper p="xl">
                        <Title order={3}>PAGINA VENTA JUGUETES</Title>
                        <p>Aquí va tu proyecto o imagen.</p>
                    </Paper>
                </div>

                <div>
                    <Paper p="xl">
                        <Title order={3}>PAGINA LIBRERIA</Title>
                        <p>La simplicidad de Mantine.</p>
                    </Paper>
                </div>
            </Slider>
        </div>
    );
};

export default Proyectos;
