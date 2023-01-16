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
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import ProfileIcon from './ProfileIcon';
import axios from 'axios';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null)
    } catch (err) {
      console.log(err);
    }
  }

  const addBlogPostIcon = (
    <Link to="/blogposts/create" className={styles.NavLink}><i className='far fa-plus-square'></i>C R E A T E</Link>
  )
  const loggedInIcons = <>
    <Link to="/bookmarks" className={styles.NavLink}><i className="fa-solid fa-book-bookmark"></i>B O O K M A R K S</Link>
    <Link to="/" className={styles.NavLink} onClick={handleSignOut}><i className='fas fa-sign-out-alt'></i>Sign out</Link>

    <Link to={`/profiles/${currentUser?.profile_id}`} className={styles.NavLink} onClick={() => {}}>
      <ProfileIcon src={currentUser?.profile_image} text="Profile" height={30} /></Link>
  </>;
  const loggedOutIcons = (
    <>
      <Link to="signin" className={styles.NavLink}><i className='fas fa-sign-in-alt'></i> Sign in</Link>
      <Link to="signup" className={styles.NavLink}><i className='fas fa-user-plus'></i> Sign up</Link>
    </>
  );

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
            <Link to="/" className={styles.NavLink}><i className='fas fa-home'></i> H O M E</Link>
            <NavDropdown title="C A T E G O R I E S" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/world" className={styles.NavLinkCategory}>
                  W O R L D
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/business" className={styles.NavLinkCategory}>
                  B U S I N E S S
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/food" className={styles.NavLinkCategory}>
                  F O O D
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/culture" className={styles.NavLinkCategory}>
                  C U L T U R E
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/music" className={styles.NavLinkCategory}>
                  M U S I C
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/tech" className={styles.NavLinkCategory}>
                  T E C H
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {currentUser && addBlogPostIcon}
          </Nav>
          <Nav>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar