
import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


function PostCreateForm() {

  const [errors, setErrors] = useState({});


  const textFields = (
    <div className="text-center">
      {/* Add your form fields here */}

    
    
      <Button
        className={``}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={``} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  ASSET
                </Form.Label>

            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container >{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;