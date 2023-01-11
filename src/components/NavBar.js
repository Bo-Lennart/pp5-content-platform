import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo_dagoy from '../assets/logo_dagoy.png';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.NavBar}>
      <Container>
        <Navbar.Brand>
            <img src={logo_dagoy} alt='logo' height="45" />
            </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><i className='fas fa-home'></i> H O M E</Nav.Link>
            <Nav.Link>P O S T S</Nav.Link>
            <NavDropdown title="C A T E G O R I E S" id="collasible-nav-dropdown">
              <NavDropdown.Item>W O R L D</NavDropdown.Item>
              <NavDropdown.Item>B U S I N E S S</NavDropdown.Item>
              <NavDropdown.Item>F O O D</NavDropdown.Item>
              <NavDropdown.Item>C U L T U R E</NavDropdown.Item>
              <NavDropdown.Item>M U S I C</NavDropdown.Item>
              <NavDropdown.Item>T E C H</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link><i className='fas fa-sign-in-alt'></i> Sign in</Nav.Link>
            <Nav.Link><i className='fas fa-user-plus'></i> Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar