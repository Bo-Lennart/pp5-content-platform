import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import Post from "./Post";

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            // request all posts from the API
            try {
                const [{ data: post }] = await Promise.all([
                    axiosReq.get(`/blogposts/${id}`)
                ])
                setPost({results: [post]})
                console.log(post)
            } catch (err) {
                console.log(err)
            }
        }
        handleMount();
    }, [id]);
    console.log(post)
    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <Post {...post.results[0]} setPosts={setPost} postPage isInPostPage={true}/>

            </Col>
        </Row>
    );
}

export default PostPage;