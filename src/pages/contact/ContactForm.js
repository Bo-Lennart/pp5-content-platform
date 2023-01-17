import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Upload from "../../assets/upload.png"

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefault";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";



function ContactForm() {
    const [err, setErrors] = useState({});

    const [contactData, setContactData] = useState({
        first_name: '',
        last_name: '',
        email_adress: '',
        content: '',
    });

    const { first_name, last_name, email_adress, content } = contactData;
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
        const formData = new FormData();

        formData.append('first_name', first_name)
        formData.append('last_name', last_name)
        formData.append('email_adress', email_adress)
        formData.append('content', content)

        try {
            const { data } = await axiosReq.post('/contact/', contactData);
            navigate(`/`)
        } catch (err) {
            console.log(err)
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    }

    return (
        <Row className={styles.Row}>

            <Col>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>Contact Us</h1>
                    <Form onSubmit={handleSubmit}>
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
                                as="textarea" rows={6} name="content" value={content} onChange={handleChange}
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
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default ContactForm;