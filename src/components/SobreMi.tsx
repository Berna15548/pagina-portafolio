import {Stack} from "@mantine/core";
import {Badge} from "@mantine/core";
import {Card} from "@mantine/core";
import '../App.scss'

const SobreMi = () => {
    
    
    
    return (
        <div id="sobre-mi-container">
            <div className="cuadro-sobremi">
                <div className="overflow">
                    <p>
                        {`Buenas tardes, soy Werner Lange y me dedico al diseño y desarrollo web.
                    Tengo 29 años de edad, soy licenciado en Administración de Empresas egresado de la Universidad Nacional de San Antonio de Areco.
                    Finalisé el curso de programación dictado por el IPFL (duración de un año), en el cual se desarrollaron los siguientes módulos:

                    - Metodología para el desarrollo de software
                    - Interfaz gráfica Web
                    - Programación de bases de datos
                    - Programación Web
                    - Proyecto Integrador (App multiplataforma para generar curriculums)

                    He utilizado gran variedad de herramientas de software en mi portafolio y, en adición a mis habilidades, tengo un nivel de inglés fluido tras haber residido en Australia por 3 años.
                    Busco oportunidades donde pueda aplicar y expandir mis habilidades, trabajar en proyectos desafiantes y aprender todo lo posible en un ambiente laboral profesional.
                `}
                    </p>
                </div>

            </div>

            <div className="cuadro-sobremi">
                <div id="skills">
                    <h3>Herramientas de Front</h3>
                    <Stack>
                        <Badge>React</Badge>
                        <Badge>Angular</Badge>
                        <Badge>Figma</Badge>
                        <Badge>JavaScript</Badge>
                        <Badge>Typescript</Badge>
                        <Badge>Css</Badge>
                        <Badge>Scss</Badge>
                        <Badge>Boostrap</Badge>
                        <Badge>Mantine</Badge>
                        <Badge>Materials</Badge>
                        <Badge>JavaScript</Badge>
                        <Badge>Typescript</Badge>
                        <Badge>Scss</Badge>
                        <Badge>Boostrap</Badge>

                    </Stack>
                    <h3>Herramientas Backend</h3>
                    <Stack>
                        <Badge>MySql</Badge>
                        <Badge>Firebase</Badge>
                        <Badge>Postman</Badge>
                        <Badge>Swagger</Badge>

                    </Stack>
                    <h3>Herramientas Auxiliares</h3>
                    <Stack>
                        <Badge>Intellij</Badge>
                        <Badge>VSC</Badge>
                        <Badge>Trello</Badge>
                        <Badge>Photoshop</Badge>
                        <Badge>Krita</Badge>
                        <Badge>Excel</Badge>
                        <Badge>Google Docs</Badge>

                    </Stack>
                </div>
            </div>

            <div className="cuadro-sobremi">
                <Card>
                    Lic en adm
                </Card>
                <Card>
                    Cert curso programacion
                </Card>
                <Card>
                    cert excel
                </Card>
                <Card>
                    cert curso fontan
                </Card>
                <Card>
                    algun cert de australia
                </Card>
                <Card>
                    IELTS
                </Card>
                
            </div>

        </div>
    )
}

export default SobreMi