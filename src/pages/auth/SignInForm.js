import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import axios from 'axios';

import { Form, Button, Image, Col, Row, Container, Alert, } from "react-bootstrap";

function SignInForm() {

    const [logInData, setlogInData] = useState({
        username: '',
        password: '',
    })

    const { username, password } = logInData;

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setlogInData({
            ...logInData, [e.target.name]: e.target.value
        });
    };

    // sent data to api, reroute user to login page and display error message

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/dj-rest-auth/login/', logInData);
                navigate('/');
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>sign in</h1>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="username"
                                name="username"
                                value={username}
                                onChange={handleOnChange} />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleOnChange} />
                        </Form.Group>
                        {errors.password?.map((message, idx) => (
                        <Alert variant="danger" key={idx}>
                            {message}
                        </Alert>
                        ))}

                        <Button variant="primary" type="submit">Sign in</Button>
                    </Form>

                    {errors.non_field_errors?.map((message, idx) => (
                        <Alert variant="danger" key={idx}>
                            {message}
                        </Alert>
                    ))}

                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/signup">
                        Don't have an account yet? <span>Sign up</span>
                    </Link>
                </Container>
            </Col>
            <Col
                md={6}
                className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
            >
            </Col>
        </Row>
    );
};

export default SignInForm;