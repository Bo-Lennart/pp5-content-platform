import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo_dagoy from '../assets/logo_dagoy.png';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
            <img src={logo_dagoy} alt='logo' height="45" />
            </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">H O M E</Nav.Link>
            <Nav.Link href="#pricing">P O S T S</Nav.Link>
            <NavDropdown title="C A T E G O R I E S" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">W O R L D</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">B U S I N E S S</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">F O O D</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">C U L T U R E</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">M U S I C</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">T E C H</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>Sign in</Nav.Link>
            <Nav.Link>Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar