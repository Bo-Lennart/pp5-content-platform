import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import Post from "./Post";

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
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

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <Post {...post.results[0]} setPosts={setPost} postPage isInPostPage={true}/>

            </Col>
        </Row>
    );
}

export default PostPage;