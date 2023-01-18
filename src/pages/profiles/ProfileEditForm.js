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
import { axiosReq } from "../../api/axiosDefault";
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";


function ProfileEditForm() {
    const [errors, setErrors] = useState({});
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const [data, setData] = useState({
        image: '',
    });
    const { image } = data;

    const imageInput = useRef();
    const navigate = useNavigate();
    const { id } = useParams();

    const handleEdit = () => {
        navigate(`/profiles/${id}/edit`)
    }

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/profiles/${id}`);
                const { image, is_owner } = data;

                is_owner ? setData({ image }) : navigate("/");
            } catch (err) {
                console.log(err);
            }
        }
        handleMount();
    }, [navigate, id]);

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setData({
                ...data,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    console.log(data)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("image", image);

        if (imageInput?.current?.files[0]) {
            formData.append('image', imageInput.current.files[0]);
        }

        try {
            const { data } = await axiosReq.put(`/profiles/${id}`, formData);
            setCurrentUser((currentUser) => ({
                ...currentUser,
                profile_image: data.image,
            }));
            navigate("/");
        } catch (err) {
            console.log(err)
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    }

    console.log("PROFILE DATA CURRENT:", data)

    const textFields = (
        <div className="text-center">
            <Button className={``} onClick={() => { }}>cancel</Button>
            <Button className={``} type="submit">Save</Button>
        </div>
    );

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

export default ProfileEditForm;