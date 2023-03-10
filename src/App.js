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
import ContactForm from './pages/contact/ContactForm';
import Confirm from './pages/contact/Confirm';
import ProfileEditForm from './pages/profiles/ProfileEditForm';
import UserPasswordForm from './pages/profiles/UserPasswordForm';

function App() {
  const currentUser = useSetCurrentUser();
  const profile = currentUser?.profile_id || "";

  return (

        <div className={styles.App}>
          <NavBar />
          <Container className='Main'>
            <Routes>
              <Route path="/posts" element={<PostsFeed message="No result's found"/>} />
              <Route path="/bookmarks" 
              element={<PostBookmark 
              message="No result's found"
              filter={profile}
              />} />

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
              <Route path="/profiles/:id/edit" element={<ProfileEditForm />} />
              <Route path="/profiles/:id/edit/logindetails" element={<UserPasswordForm />} />

              <Route path="/signin" element={<SignInForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/blogposts/create" element={<PostCreateForm />} />
              <Route path="/contact/create" element={<ContactForm />} />
              <Route path="/confirm" element={<Confirm />} />
              <Route path='*' exact={true} element={<h1>Page not found..</h1>} />
            </Routes>
          </Container>
        </div>

  );
}

export default App;
