import React, { useEffect } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom";

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {

            } catch (err){

            }
        }
    })

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <p>Popular profiles for mobile</p>
                <p>Post component</p>

            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                Popular posts for desktop
            </Col>
        </Row>
    );
}

export default PostPage;