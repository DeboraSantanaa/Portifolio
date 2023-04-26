import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Menu/Menu.module.css';
import logo from '../../assets/img/ds.png';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' className={`${styles.Menu} fixed-top`}>
      <Container>
        <Navbar.Brand href="#home" className={styles.logo_img}>
          <img src={logo} alt="logo"  />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={styles.navLi}>
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Sobre</Nav.Link>
            <Nav.Link href="#project">Projetos</Nav.Link>            
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>   
  );
}

export default Menu;
