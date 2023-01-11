import Button from 'react-bootstrap/Button';
import styles from './App.module.css'
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
        <Container>
          <Switch>
            <Route exact path="/" render={() => <h1>Home Page</h1>} />
            <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
          </Switch>
        </Container>
    </div>
  );
}

export default App;
