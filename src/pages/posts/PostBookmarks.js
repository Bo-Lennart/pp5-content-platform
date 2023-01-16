import React, { useEffect, useState } from "react";
import Post from "./Post";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";

const PostBookmark = ({ filter = "" }) => {
  const [bookmark, setBookmark] = useState({ results: [] });
  const [profilesData, setProfilesData] = useState({ profileResults: [] });
  const [posts, setPosts] = useState({ postsResults: [] });

  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = `/bookmark/`
        const { data } = await axiosReq.get(url); 
        setBookmark({results: data});

        const url2 = `/profiles/`
        const {profilesData} = await axiosReq.get(url2); 
        setProfilesData({profileResults: data});

        const url3 = `/blogposts/`
        const {posts} = await axiosReq.get(url3); 
        setPosts({results: data});

        
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
    console.log("BOOKMARK:", bookmark)
    console.log("PROFILE:", profilesData)
    console.log("POSTS:", posts)


  }, [filter, pathname]);



  return (
    <h1>Bookmarks</h1>
  );
}
export default PostBookmark