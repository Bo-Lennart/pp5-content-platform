import React, { useEffect, useState } from "react";
import Post from "./Post";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";

const PostBookmark = ({ filter = "" }) => {
  const [bookmark, setBookmark] = useState({ results: [] });
  const [profiles, setProfiles] = useState({ results: [] });
  const [posts, setPosts] = useState({ results: [] });

  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        //hämta bookmarks
        const bookmarkUrl = `/bookmark/`
        const bookmarks = await axiosReq.get(bookmarkUrl);
        console.log(bookmarks.data)
        setBookmark({ results: bookmarks.data });

        //hämta profiles
        const profilesUrl = `/profiles/`
        const profiles = await axiosReq.get(profilesUrl);
        console.log(profiles.data)
        setProfiles({ results: profiles.data });

        //hämta posts
        const blogpostsUrl = `/blogposts/`
        const posts = await axiosReq.get(blogpostsUrl);
        console.log(posts.data)
        setPosts({ results: posts.data });

        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
  }, [filter, pathname]);



  return (
    <h1>Bookmarks</h1>
  );
}
export default PostBookmark