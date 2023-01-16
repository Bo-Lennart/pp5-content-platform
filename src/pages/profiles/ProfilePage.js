import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import { CurrentUserContext, useCurrentUser } from "../../contexts/CurrentUserContext";
import {
    useProfileData,
    useSetProfileData,
} from "../../contexts/ProfileDataContext";

function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const setProfileData = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const is_owner = currentUser?.username === profile?.owner;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{ data: pageProfile }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`),
                ]);
                setProfileData((prevState) => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id, setProfileData]);



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