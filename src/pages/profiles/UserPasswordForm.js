import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { axiosRes } from "../../api/axiosDefault";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

function UserPasswordForm() {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        new_password1: '',
        new_password2: '',
    });
    const { new_password1, new_password2 } = userData;

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axiosRes.post("/dj-rest-auth/password/change/", userData);
          navigate(-1);
        } catch (err) {
          // console.log(err);
          setErrors(err.response?.data);
        }
      };
    
    return (
        <Row>
            <Col className="py-2 mx-auto text-center" md={6}>
                <Container className={appStyles.Content}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>New password</Form.Label>
                            <Form.Control placeholder="new password" type="password" value={new_password1}
                                onChange={handleChange}
                                name="new_password1"
                            />
                        </Form.Group>
                        {errors?.new_password1?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                        <Form.Group>
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control
                                placeholder="confirm new password"
                                type="password"
                                value={new_password2}
                                onChange={handleChange}
                                name="new_password2"
                            />
                        </Form.Group>
                        {errors?.new_password2?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                        <div className="text-center">
                            <Button className={``} onClick={() => { }}>cancel</Button>
                            <Button className={``} type="submit">Save</Button>
                        </div>
                    </Form>
                </Container>
            </Col>
        </Row >
    );
};

export default UserPasswordForm;