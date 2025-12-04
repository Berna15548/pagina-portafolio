import {Carousel} from "@mantine/carousel";
import { Paper } from "@mantine/core";
import {Title} from "@mantine/core";
import '../App.scss'

const Proyectos = () => {
    
    
    
    return (
        <div id="proyectos-container">
            <Carousel
                // Opciones de configuración
                maw={400} // Ancho máximo
                mx="auto" // Margen horizontal automático (para centrar)
                withIndicators // Muestra los puntos de navegación en la parte inferior
                height={200} // Altura del carrusel
            >
                {/* 2. Cada Carousel.Slide es una diapositiva individual */}
                <Carousel.Slide>
                    <Paper p="xl" >
                        <Title order={3}>APP CVS</Title>
                        <p>Este es el primer elemento del carrusel.</p>
                    </Paper>
                </Carousel.Slide>

                <Carousel.Slide>
                    <Paper p="xl" >
                        <Title order={3}>PAGINA VENTA JUGUETES</Title>
                        <p>Aquí va tu proyecto o imagen.</p>
                    </Paper>
                </Carousel.Slide>

                <Carousel.Slide>
                    <Paper p="xl" >
                        <Title order={3}>PAGINA LIBRERIA</Title>
                        <p>La simplicidad de Mantine.</p>
                    </Paper>
                </Carousel.Slide>
            </Carousel>
        </div>
    )
}

export default Proyectos