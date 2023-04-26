import React from "react";
import style from "./About.module.css"
import { Container, Row, Col } from "react-bootstrap";
import Conhecimento from "../Conhecimento/Conhecimento";

function About() {

    return (
        <Container id="about" className={style.about_section}>
            <Row>
                <Col lg="6" md="6"  className={style.foto} >
                    { /* conteúdo da coluna aqui */}
                </Col>

                <Col lg="6" md="6" className={style.about_text} >
                    <h1>Olá,Mundo!</h1>
                    <p>
                        Meu nome é Débora Santana e sou uma
                        estudante de Análise e desenvolvimento de sistemas. <br />
                        Desde que descobri minha paixão por tecnologia,
                        tenho me esforçado para me tornar uma profissional
                        altamente qualificada na área.<br/> Recentemente, fui selecionada para
                        participar de um curso de Programação Web, oferecido pela
                        Prefeitura do Rio de Janeiro <strong>"Programadores Cariocas". </strong>
                        <br/> <br/>
                        Durante o curso, aprendi muito sobre as tecnologias utilizadas
                        para desenvolver websites e aplicações web, o que me permitiu
                        adquirir habilidades valiosas em hard e soft skills. <br /> 
                        Desenvolvi a capacidade de trabalhar em equipe,
                        me adaptar a diferentes desafios e solucionar problemas
                        de forma criativa.<br />  Para aprimorar minhas habilidades,
                        ingressei na faculdade e venho me esforçando para aprender
                        o máximo possível.<br />  
                        Estou animada para continuar minha jornada na área de
                        tecnologia e contribuir para o desenvolvimento de soluções
                        inovadoras.
                    </p>
                    <br/>
                    <Conhecimento />
                </Col>

            </Row>

        </Container>
    )
}
export default About;