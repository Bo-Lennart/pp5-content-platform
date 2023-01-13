import React, { useEffect, useInsertionEffect, useState } from "react";
import Post from "./Post";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/blogposts/?${filter}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    setHasLoaded(false);
    fetchPosts();
  }, [filter, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map(map => (
                <Post key={Post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              console.log('no results');
          )}
          </>
        ) : (
          console.log("show loading page")
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Popular posts for desktop</p>
      </Col>
    </Row>
  );
}

export default PostsPage;