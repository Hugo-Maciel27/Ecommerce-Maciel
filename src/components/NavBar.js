import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import CardWidget from "./CartWidget";

const NavBar = () => {
    return (
        <Navbar   expand="xxl" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">Mishi-Pizzeria</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="container-NavBar"  >
            <Nav  className="justify-content-center">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Nosotros</Nav.Link>
              <Nav.Link title="Dropdown">Contactanos </Nav.Link>
            </Nav>
          </Navbar.Collapse>
         <div className='carrito'> <CardWidget/>
         </div>
        </Container>
      </Navbar>

    );
}

export default NavBar;