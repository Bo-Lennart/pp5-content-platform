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
function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className='Main'>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/signup" element={<h1>Home page</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
