import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../App.scss";
import { Card, Text, Title } from "@mantine/core";
import { CgHomeScreen, CgScreen } from "react-icons/cg";
import { useEffect, useState } from "react";
import SwipeHint from "./subComponents/SwipeHint.tsx";
import PrevArrow from "./subComponents/PrevArrow.tsx";
import NextArrow from "./subComponents/NextArrow.tsx";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 768px)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const listener = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, []);

    return isMobile;
};

const Proyectos = () => {
    const isMobile = useIsMobile();

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: isMobile ? "0px" : "20%",
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div id="proyectos-container">
            
            <Slider {...settings}>
                <div 
                    className="contenedor-slide"
                    onClick={() => window.open("https://github.com/Berna15548?tab=repositories", "_blank")}>
                    <Card className="info">
                        <Title
                            order={1}
                            className="title-scanner"
                            component="h1"
                            style={{
                                display: "inline-block",
                                position: "relative",
                                width: "100%",
                                textAlign: "center",
                            }}
                        >
                            APP Multiplataforma
                        </Title>

                        <div className="icon-wrapper">
                            <CgHomeScreen className="main-icon" />
                            <div style={{ position: "absolute", right: "20%" }}>
                                <SwipeHint />
                            </div>
                        </div>

                        <Text>
                            {`Trabajo colaborativo en el desarrollo de una app de generación de curriculums personales de forma sensilla, con diseño responsivo para PC y móbiles. Cuenta con su propia base de datos, almacenamiento de imagenes en la nube, varias plantillas seleccionables y descarga en PDF.
                            
                            -React, Boostrap, MySql, Maven, SpringBoot, HTML5, Typescript, Javascript.
                            `}
                        </Text>
                    </Card>

                    <img
                        src="https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg"
                        width="100%"
                        alt="X"
                    />
                </div>

                <div className="contenedor-slide"
                     onClick={() => window.open("https://github.com/Berna15548?tab=repositories", "_blank")}
                >
                    <Card className="info">
                        <Title
                            order={1}
                            className="title-scanner"
                            component="h1"
                            style={{
                                display: "inline-block",
                                position: "relative",
                                width: "100%",
                                textAlign: "center",
                            }}
                        >
                            Sitio Web de Juguetería
                        </Title>

                        <div className="icon-wrapper">
                            <CgScreen className="main-icon" />
                            <div style={{ position: "absolute", right: "20%" }}>
                                <SwipeHint />
                            </div>
                        </div>

                        <Text>
                            {`Mockup de una página web que sirva como plataforma de ventas para una empresa de juguetería. Cuenta con una base de datos alojada en Firebase de forma gratuita, registro y autentificación de usuarios y panel de administración con autorización por roles asignados desde la DB.
                            
                            -Angular, Firebase, Scss, Angular Material, Typescript, HTML5.
                            `}
                        </Text>
                    </Card>

                    <img
                        src="https://images.pexels.com/photos/162622/facebook-login-office-laptop-business-162622.jpeg"
                        width="100%"
                        alt="X"
                    />
                </div>

                <div className="contenedor-slide"
                     onClick={()=> window.open( "https://github.com/Berna15548?tab=repositories", "_blank")}
                >
                    <Card className="info">
                        <Title
                            order={1}
                            className="title-scanner"
                            component="h1"
                            style={{
                                display: "inline-block",
                                position: "relative",
                                width: "100%",
                                textAlign: "center",
                            }}
                        >
                            Librería Online
                        </Title>

                        <div className="icon-wrapper">
                            <CgHomeScreen className="main-icon" />
                            <div style={{ position: "absolute", right: "20%" }}>
                                <SwipeHint />
                            </div>
                        </div>

                        <Text>
                            {`Sencilla web para una librería imaginaria con base de datos generada de forma local con MySql. El backend posee un crud completo y funcional. El frontend permite filtrar libros mediante todos sus atributos e incluye un panel de administración para gestionar la base de datos.
                            Incluye una hoja de productos para poblar la DB desde el panel de administración.

                            -React, MySql, Boostrap, HTML5, Typescript, Maven, SpringBoot.
                            `}
                        </Text>
                    </Card>

                    <img
                        src="https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg"
                        width="100%"
                        alt="X"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Proyectos;
