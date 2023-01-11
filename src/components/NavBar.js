import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo_dagoy from '../assets/logo_dagoy.png';
import styles from '../styles/NavBar.module.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.NavBar}>
      <Container>
        <Link to="/">
          <Navbar.Brand>
              <img src={logo_dagoy} alt='logo' height="45" />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/"><i className='fas fa-home'></i> H O M E</Link>
            <Link to="posts">P O S T S</Link>
            <NavDropdown title="C A T E G O R I E S" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/world">
                  W O R L D
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>B U S I N E S S</NavDropdown.Item>
              <NavDropdown.Item>F O O D</NavDropdown.Item>
              <NavDropdown.Item>C U L T U R E</NavDropdown.Item>
              <NavDropdown.Item>M U S I C</NavDropdown.Item>
              <NavDropdown.Item>T E C H</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="signin"><i className='fas fa-sign-in-alt'></i> Sign in</Link>
            <Link to="signup"><i className='fas fa-user-plus'></i> Sign up</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar