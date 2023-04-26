import React from "react";
import { Container } from "react-bootstrap";
import { FaPhp ,FaJava , FaReact} from "react-icons/fa";
import {RiHtml5Line} from "react-icons/ri"
import {BsFiletypeCss} from "react-icons/bs";
import { SiMysql, SiJavascript, SiAngularjs , SiPython } from "react-icons/si";
import style from './Conhecimento.module.css'

function Conhec() {
    return (
        <Container fluid>
            <h3 className={style.titulo}>
                Conhecimento
            </h3>

            <div className={style.icon_conhe}>
                <FaPhp />
                <RiHtml5Line />
                <BsFiletypeCss/>
                <FaReact />
                <SiMysql />
                <SiJavascript />
            </div>
            <h3 className={style.titulo}>
              Area de Interesse
            </h3>
            <div className={style.icon_conhe}>
                <FaJava /> 
                <SiAngularjs/>
                <SiPython/>
            </div>

        </Container>

    )
}

export default Conhec;