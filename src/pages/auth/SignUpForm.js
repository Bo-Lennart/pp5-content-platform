import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";
import axios from 'axios';

import { Form, Button, Col, Row, Container, Alert, } from "react-bootstrap";

const SignUpForm = () => {

    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: '',
    })

    const { username, password1, password2 } = signUpData;

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setSignUpData({
            ...signUpData, [e.target.name]: e.target.value
        });
    };

    // sent data to api, reroute user to login page and display error message

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData);
                navigate('/signin');
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>sign up</h1>

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
                        {errors.username?.map((message, idx) => (
                        <Alert variant="danger" key={idx}>
                            {message}
                        </Alert>
                        ))}


                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password1"
                                value={password1}
                                onChange={handleOnChange} />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                        <Alert variant="danger" key={idx}>
                            {message}
                        </Alert>
                        ))}

                        <Form.Group controlId="password2">
                            <Form.Label className="d-none">Confirm password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                name="password2"
                                value={password2}
                                onChange={handleOnChange} />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => (
                        <Alert variant="danger" key={idx}>
                            {message}
                        </Alert>
                        ))}

                        <Button variant="primary" type="submit">Sign up</Button>
                        {errors.non_field_errors?.map((message, idx) => (
                        <Alert variant="danger" key={idx}>
                            {message}
                        </Alert>
                        ))}
                    </Form>
                        
                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/signin">
                        Already have an account? <span>Sign in</span>
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

export default SignUpForm;