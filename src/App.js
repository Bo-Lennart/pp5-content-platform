import styles from './App.module.css'
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import {
  Routes,
  Route,
} from "react-router-dom";
import './api/axiosDefault';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostsFeed from './pages/posts/PostsFeed';
import { useSetCurrentUser } from './contexts/CurrentUserContext';
import PostPage from './pages/posts/PostPage';
import PostsCategory from './pages/posts/PostsCategory';
import PostEditForm from './pages/posts/PostEditForm';
import Profile from './pages/profiles/Profile';
import PostBookmark from './pages/posts/PostBookmarks';

function App() {
  const currentUser = useSetCurrentUser();
  const owner = currentUser?.owner || "";

  return (

        <div className={styles.App}>
          <NavBar />
          <Container className='Main'>
            <Routes>
              <Route path="/posts" element={<PostsFeed message="No result's found"/>} />
              <Route path="/bookmarks" 
              element={<PostBookmark filter={"test_user_for"}/>} 
              message="No result's found"/>

              <Route path="/" element={<PostsFeed message="No result's found"/>}  />
              <Route path="/world" element={<PostsCategory filter={"world"}/>} />
              <Route path="/business" element={<PostsCategory filter={"business"}/>}  />
              <Route path="/food" element={<PostsCategory filter={"food"}/>} />
              <Route path="/culture" element={<PostsCategory filter={"culture"}/>}  />
              <Route path="/music" element={<PostsCategory filter={"music"}/>}  />
              <Route path="/tech" element={<PostsCategory filter={"tech"}/>}  />

              <Route path="/posts/:id" element={<PostPage />} />
              <Route path="/posts/:id/edit" element={<PostEditForm />} />
              <Route path="/profiles/:id" element={<Profile />} />

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
