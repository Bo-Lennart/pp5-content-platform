import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefault';

import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Post from '../posts/Post';
import ProfileIcon from '../../components/ProfileIcon';


function Profile({ filter = "" }) {
    const [posts, setPosts] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    //get logged in user
    const currentOwner = currentUser.username;

    const { id } = useParams();
    const [userData, setProfiles] = useState({
        result: []
    });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const profilesUrl = `/profiles/${id}`
                const userData = await axiosReq.get(profilesUrl);
                // console.log(profiles.data)
                setProfiles({ results: userData.data });

                const url = `/blogposts/`
                const posts = await axiosReq.get(url);
                setPosts(posts.data);
                setHasLoaded(true);

            } catch (err) {
                console.log(err)
            }
        }
        handleMount();
    }, [id]);


    console.log("USER DATA", currentUser);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <h1>Profile info </h1>
                <h2>{currentUser.username}</h2>
                <ProfileIcon src={currentUser.profile_image} height={100} />
                {hasLoaded ? (
                    <>
                        {posts.length ? (posts.filter(post => post.owner === currentOwner)
                            .map((post) => (
                                <Post key={post.id} {...post} setPosts={setPosts} isInPostPage={false} />
                            ))
                        ) : (
                            <Container >
                                <h1>No posts found</h1>
                            </Container>
                        )}
                    </>
                ) : (
                    <Container >
                        <h1>Loading....</h1>
                    </Container>
                )}
            </Col>
        </Row>
    )
}

export default Profile