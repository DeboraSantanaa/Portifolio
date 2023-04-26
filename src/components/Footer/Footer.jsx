import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
     
      <footer className={styles.footer}>
        <div id="Contato" className="container p-4 pb-0">
        <hr/>
          <section className="mb-4">
            <a className={styles.btn} href="https://www.facebook.com/debora.santana.921/" role="button">
              <FaFacebookF />
            </a>
  
            <a className={styles.btn} href="https://www.instagram.com/debora_saantana_/" role="button">
              <FaInstagram />
            </a>
            <a className={styles.btn} href="https://www.linkedin.com/in/debora-santana-7959141a0/" role="button">
              <FaLinkedinIn />
            </a>
            <a className={styles.btn} href="https://github.com/DeboraSantanaa" role="button">
              <FaGithub />
            </a>
          </section>
          <p className={styles.socialText}> CONTATO</p>
        </div>
        
        <div className={`text-center p-3 ${styles.footerText}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © {new Date().getFullYear()} Débora Santana
        </div>
        
      </footer>
    );
  }
  
  export default Footer;