import React, { useState } from "react";

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


function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
  });
  const { title, content, image, category } = postData;

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={title} onChange={handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={6} name="content" value={content} onChange={handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example" value={category} onChange={handleChange}>
          <option>Pick category</option>
          <option value="world" name="world">W O R L D</option>
          <option value="business" name="business">B U S I N E S S</option>
          <option value="food" name="food">F O O D</option>
          <option value="culture" name="culture">C U L T U R E</option>
          <option value="music" name="music">M U S I C</option>
          <option value="tech" name="tech">T E C H</option>
        </Form.Select>
      </Form.Group>

      <Button className={``} onClick={() => { }}>cancel</Button>
      <Button className={``} type="submit">create</Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
            <Form.Group className="text-center">

              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded></Image>
                  </figure>

                  <div>
                    <Form.Label htmlFor="image-upload">
                      Change image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label className="d-flex justify-content-center" htmlFor="image-upload">
                  <Asset src={Upload} message="Click to upload image" />
                </Form.Label>
              )}

              <Form.Control type="file" accept="image/*" onChange={handleChangeImage} />


              {/* <input type="file" conChange={handleChangeImage}></input> */}

            </Form.Group>
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

export default PostCreateForm;