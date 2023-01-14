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
import PostCreateForm from './pages/posts/PostCreateForm';
import PostsFeed from './pages/posts/PostsFeed';
import { useSetCurrentUser } from './contexts/CurrentUserContext';
import PostPage from './pages/posts/PostPage';
import PostsCategory from './pages/posts/PostsCategory';

function App() {
  const currentUser = useSetCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (

        <div className={styles.App}>
          <NavBar />
          <Container className='Main'>
            <Routes>
              <Route path="/posts" element={<PostsFeed />} message="No result's found"/>
              <Route path="/bookmarks" filter={`bookmark__owner__profile=${profile_id}&ordering=-bookmark__created_at&`} element={<h1>Still todo</h1>} message="No result's found"/>

              <Route path="/" element={<PostsFeed />} message="No result's found" />
              <Route path="/world" element={<PostsCategory />} />
              <Route path="/business" element={<h1>B U S I N E S S</h1>} />
              <Route path="/food" element={<h1>F O O D</h1>} />
              <Route path="/culture" element={<h1>C U L T U R E</h1>} />
              <Route path="/music" element={<h1>M U S I C</h1>} />
              <Route path="/tech" element={<h1>T E C H</h1>} />

              <Route path="/posts/:id" element={<PostPage />} />

              <Route path="/signin" element={<SignInForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/blogposts/create" element={<PostCreateForm />} />
              <Route path='*' exact={true} element={<h1>Page not found..</h1>} />
            </Routes>
          </Container>
        </div>

  );
}

export default App;
