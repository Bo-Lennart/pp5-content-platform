import React, { useEffect, useState } from "react";
import Post from "./Post";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const PostBookmark = ({ filter = "" }) => {
  const currentUser = useCurrentUser();
  const [bookmarks, setBookmark] = useState([]);
  const [profiles, setProfiles] = useState({ results: [] });
  const [posts, setPosts] = useState({ results: [] });

  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        //get bookmarks
        const bookmarkUrl = `/bookmark/`
        const bookmarks = await axiosReq.get(bookmarkUrl);
        // console.log(bookmarks.data)
        setBookmark( bookmarks.data.results);

        //get profiles
        const profilesUrl = `/profiles/`
        const profiles = await axiosReq.get(profilesUrl);
        // console.log(profiles.data)
        setProfiles({ results: profiles.data });

        //get posts
        const blogpostsUrl = `/blogposts/`
        const posts = await axiosReq.get(blogpostsUrl);
        // console.log(posts.data)
        setPosts({ results: posts.data });

        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
  }, [filter, pathname]);

  //get logged in user
  const owner = currentUser.username;

  //get all bookmark IDs that belong to this user: Map the filtered bookmarks and get their posts.
  const bookmarkIds = bookmarks.filter(bookmark => bookmark.owner === owner).map(bookmark => bookmark.post);



console.log("ID Bookmarks", bookmarkIds);

  return (
    <Row className="h-100">
    <Col className="py-2 p-0 p-lg-2" lg={8}>
      {hasLoaded ? (
        <>
          {posts.results.length ? (
            posts.results
            .filter(post => filter.length === 0 || post.owner.toLocaleLowerCase() === filter.toLocaleLowerCase())
            .map((post) => (
              <Post key={post.id} {...post} setPosts={setPosts} isInPostPage={false}/>
            ))
          ) : (
            <Container >
              <h1>Not posts found</h1>
            </Container>
          )}
        </>
      ) : (
        <Container >
          <h1>Loading...</h1>
        </Container>
      )}
    </Col>
  </Row>
  );
}
export default PostBookmark