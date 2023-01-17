import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefault";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";



function ContactForm() {
    const [err, setErrors] = useState({});

    const [contactData, setContactData] = useState({
        first_name: '',
        last_name: '',
        email_adress: '',
        message: '',
    });

    const { first_name, last_name, email_adress, message } = contactData;
    const navigate = useNavigate();

    const handleChange = (e) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value,
        });
    };

    console.log(contactData)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axiosReq.post('/contact/', contactData);
            navigate("/");
        } catch (err) {
            console.log(err)
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row className={styles.Row}>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container>
                        <h1 className={styles.Header}>Contact Us</h1>

                        <Form.Group>
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text" name="first_name" value={first_name} onChange={handleChange}
                            />
                        </Form.Group>
                        {err.first_name?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text" name="last_name" value={last_name} onChange={handleChange}
                            />
                        </Form.Group>
                        {err.last_name?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text" name="email_adress" value={email_adress} onChange={handleChange}
                            />
                        </Form.Group>
                        {err.email_adress?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea" rows={6} name="message" value={message} onChange={handleChange}
                            />
                        </Form.Group>
                        {err.content?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Button
                            type="submit"
                        >
                            Submit
                        </Button>
                        {err.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                        ))}

                    </Container>
                </Col>
            </Row >
        </Form >
    );
};

export default ContactForm;