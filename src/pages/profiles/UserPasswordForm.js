import React, { useEffect, useRef, useState } from "react";

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
import { axiosRes } from "../../api/axiosDefault";
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";


function UserPasswordForm() {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    const currentUser = useCurrentUser();

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

    useEffect(() => {
        if (currentUser?.profile_id?.toString() !== id) {
            navigate("/");
        }
    }, [currentUser, navigate, id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.post("/dj-rest-auth/password/change/", userData);
            navigate(-1);
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
                        <Form.Group className="text-center">

                            {image ? (
                                <>
                                    <figure>
                                        <Image className={appStyles.Image} src={image} rounded ></Image>
                                    </figure>

                                    <div>
                                        <Form.Label type="file" htmlFor="image-upload" onClick={handleChangeImage}>
                                            <p>Change Profile Image:</p>
                                        </Form.Label>
                                    </div>
                                </>
                            ) : (
                                <Form.Label
                                    className="d-flex justify-content-center"
                                    htmlFor="image-upload"
                                >
                                    <Asset
                                        src={Upload}
                                        message="Click or tap to upload an image"
                                    />
                                </Form.Label>
                            )}

                            <Form.Control
                                type="file"
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
                                ref={imageInput}
                            />

                        </Form.Group>
                        {errors?.image?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form >
    );
}

export default UserPasswordForm;