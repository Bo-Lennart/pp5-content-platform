import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefault';

import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card, Container } from "react-bootstrap";
import Post from '../posts/Post';
import ProfileIcon from '../../components/ProfileIcon';
import { EditProfileDropdown } from '../../components/EditProfileDropdown';


function Profile({ filter = "" }) {
    const [posts, setPosts] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUserInfo = useCurrentUser();
    const currentUser = currentUserInfo?.username
    const navigate = useNavigate()

    const { id } = useParams();

    
    useEffect(() => {
        const handleMount = async () => {
            try {
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

    const handleEdit = () => {
        navigate(`/profiles/${id}/edit`)
    }

    const changePassword = () => {
        navigate(`/profiles/${id}/edit`)
    }


    console.log("USER DATA", currentUser);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <Card.Body>
                    <div className="text-center">
                    {currentUser  && <EditProfileDropdown handleEdit={handleEdit} changePassword={changePassword} />}
                        <ProfileIcon src={currentUserInfo.profile_image} height={100} />
                        <h2>{currentUserInfo.username}</h2>
                    </div>
                </Card.Body>

                {hasLoaded ? (
                    <>
                        {posts.length ? (posts.filter(post => post.owner === currentUser)
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