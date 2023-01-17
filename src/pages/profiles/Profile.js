import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefault';
import ProfileIcon from '../../components/ProfileIcon';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Post from '../posts/Post';


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
                const profilesUrl = `/profiles/${currentUser?.profile_id}`
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


    console.log("USER INLOGGED NOW", currentOwner)
    console.log("POSTS DATA", posts)
    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                {hasLoaded ? (
                    <>
                        {posts.length ? (
                            posts.map((post) => (
                                <Post key={post.id} {...post} setPosts={setPosts} isInPostPage={true} />
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