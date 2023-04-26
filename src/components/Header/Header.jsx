import React from 'react';
import { Container } from 'react-bootstrap';
import styles from "./Header.module.css";
import resumePdf from "../../assets/cv_pdf/resume.pdf"

function downloadResume() {
  window.open(resumePdf, '_blank', 'fullscreen=yes');
}

function Header() {
  return (
   <Container fluid id='home' className={styles.header_section}>
    <div className={styles.text_header}>
    <p>Sejam bem vindos ao meu website</p>
    <h1>Débora Santana</h1>
    <p>Desenvolvedor Web</p>
    <button type='submit' className={styles.btn_download} onClick={downloadResume}>Download CV</button>
    </div>
   </Container>
  );
}

export default Header;
