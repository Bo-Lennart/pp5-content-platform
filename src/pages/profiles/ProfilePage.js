import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import {
    useProfileData,
    useSetProfileData,
  } from "../../contexts/ProfileDataContext";

function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const setProfileData = useSetProfileData();
    const { id } = useParams();
    const is_owner = currentUser?.username === profile?.owner;

    useEffect (() => {
        const fetchData = async () => {
            try {
                
            } catch (error) {
                
            }
        }
    })

  return (
    <Row>
        <Col>
        <Container>
            {hasLoaded ? (
                <>
                
                </>
            ) : (
                <h1>Cannot find content</h1>
            )}
        </Container>
        </Col>
    </Row>
  )
}

export default ProfilePage