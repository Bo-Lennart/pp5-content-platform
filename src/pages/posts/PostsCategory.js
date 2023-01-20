import React, { useEffect, useState } from "react";
import Post from "./Post";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";

const PostsCategory = ({ filter = "" }) => {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = `/blogposts/`
        const { data } = await axiosReq.get(url);
        setPosts({results: data});
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
  }, [filter, pathname]);

  return (
    
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? (
          <>
          {/* Take all posts, filter out the onnes that match the category that's pushed into this component */}
            {posts.results.length ? (
              posts.results
              .filter(post => filter.length === 0 || post.category.toLocaleLowerCase() === filter.toLocaleLowerCase())
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
export default PostsCategory