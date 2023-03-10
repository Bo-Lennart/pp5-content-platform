import React, { useEffect, useState } from "react";
import Post from "./Post";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const PostBookmark = () => {
  const currentUser = useCurrentUser();
  const [bookmarks, setBookmark] = useState([]);
  const [posts, setPosts] = useState([]);

  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        //get bookmarks
        const bookmarkUrl = `/bookmark/`
        const bookmarks = await axiosReq.get(bookmarkUrl);
        // console.log(bookmarks.data)
        setBookmark(bookmarks.data.results);

        //get posts
        const url = `/blogposts/`
        const posts = await axiosReq.get(url);
        setPosts(posts.data);
        setHasLoaded(true);

        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
  }, [pathname]);

  //get logged in user
  const owner = currentUser.username;

  //get all bookmark IDs that belong to current logged in user: Map the filtered bookmarks and get their posts ID.
  const bookmarkedPostIds = bookmarks.filter(bookmark => bookmark.owner === owner).map(bookmark => bookmark.post);
  // Run all posts, run all bookmark IDs and take out their post ID, check these and bring out the matches
  // stored into this variable
  const bookmarkedPosts = posts.filter(post => bookmarkedPostIds.some(bookmarkedPostId => bookmarkedPostId === post.id))

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? (
          <> 
          {/* check if there are and how many bookmarks
              map the bookmarked post and check if they match the filtered bookmark ids */}
            {bookmarkedPosts.length ? (bookmarkedPosts.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} isInPostPage={false} />
              ))
            ) : (
              <Container >
                <h1>No posts found</h1>
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