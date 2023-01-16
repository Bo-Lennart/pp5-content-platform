import React, { useEffect, useState } from "react";
import Post from "./Post";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";

const PostBookmark = ({ filter = "" }) => {
  const [bookmark, setBookmark] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = `/bookmark/`
        const { data } = await axiosReq.get(url);
        console.log(data)
        setBookmark({results: data});
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
    console.log("DATA:", bookmark)
  }, [filter, pathname]);



  return (
    <h1>Bookmarks</h1>
  );
}
export default PostBookmark