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


function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title:"",
    content:"",
    image:"",
    category:"",
  });
  const { title, content, image, category } = postData;

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };


  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={6} name="content" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example">
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

              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload">
                <Asset src={Upload} message="Click to upload image" />
              </Form.Label>

            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;