import styles from './App.module.css'
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import './api/axiosDefault';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleMount = async () => {
    try {
      const {data} = await axios.get("dj-rest-auth/user/")
      setCurrentUser(data)
    } catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    handleMount()
  }, [])

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className='Main'>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/posts" element={<h1>Posts</h1>} />
          
          <Route path="/world" element={<h1>W O R L D</h1>} />
          <Route path="/business" element={<h1>B U S I N E S S</h1>} />
          <Route path="/food" element={<h1>F O O D</h1>} />
          <Route path="/culture" element={<h1>C U L T U R E</h1>} />
          <Route path="/music" element={<h1>M U S I C</h1>} />
          <Route path="/tech" element={<h1>T E C H</h1>} />
        

          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
