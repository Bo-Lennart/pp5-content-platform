import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo_dagoy from '../assets/logo_dagoy.png';
import styles from '../styles/NavBar.module.css';
import {
  Link, useNavigate,
} from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import ProfileIcon from './ProfileIcon';
import axios from 'axios';


const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const navigate = useNavigate();

  const handleCategoryWorld = () => {
    navigate(`/world`);
  }
  const handleCategoryBusiness = () => {
    navigate(`/business`);
  }
  const handleCategoryFood = () => {
    navigate(`/food`);
  }

  const handleCategoryCulture = () => {
    navigate(`/culture`);
  }

  const handleCategoryMusic = () => {
    navigate(`/music`);
  }

  const handleCategoryTech = () => {
    navigate(`/tech`);
  }

  const handleSignOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null)
    } catch (err) {
      console.log(err);
    }
  }

  const addBlogPostIcon = (
    <Link to="/blogposts/create" className={styles.NavLink}><i className='far fa-plus-square'></i>CREATE</Link>
  )
  const loggedInIcons = <>
    <Link to="/bookmarks" className={styles.NavLink}><i className="fa-solid fa-book-bookmark"></i>BOOKMARKS</Link>
    <Link to="/" className={styles.NavLink} onClick={handleSignOut}><i className='fas fa-sign-out-alt'></i>Sign out</Link>

    <Link to={`/profiles/${currentUser?.profile_id}`} className={styles.NavLink} onClick={() => { }}>
      <ProfileIcon src={currentUser?.profile_image} text={currentUser?.username} height={30} /></Link>
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
              <NavDropdown.Item onClick={handleCategoryWorld}>
                W O R L D
              </NavDropdown.Item>

              <NavDropdown.Item onClick={handleCategoryBusiness}>
                B U S I N E S S
              </NavDropdown.Item>

              <NavDropdown.Item onClick={handleCategoryFood}>
                F O O D
              </NavDropdown.Item>

              <NavDropdown.Item onClick={handleCategoryCulture}>
                C U L T U R E
              </NavDropdown.Item>

              <NavDropdown.Item onClick={handleCategoryMusic}>
                M U S I C
              </NavDropdown.Item>

              <NavDropdown.Item onClick={handleCategoryTech}>
                T E C H
              </NavDropdown.Item>

            </NavDropdown>
            <Link to="/contact/create" className={styles.NavLink}><i class="fa-regular fa-envelope"></i>CONTACT</Link>
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