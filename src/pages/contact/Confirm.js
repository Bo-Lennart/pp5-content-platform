import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';



function Confirm() {

    return (
        <Row>
            <Col>
                <Container>
                    <h1 className="text-center">Thank you</h1>
                    <p className="text-center">We have received your message and will be in touch soon!</p>
                </Container>
            </Col>
        </Row>
    );
};

export default Confirm