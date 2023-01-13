import { Tooltip } from 'bootstrap';
import React from 'react';
import { Card, Image, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../components/ProfileIcon';

import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from "../../styles/Post.module.css";

const Post = (props) => {
    const {
        id,
        category,
        owner,
        profile_id,
        profile_image,
        likes_count,
        like_id,
        title,
        content,
        image,
        updated_at,
        postPage,

    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

    return <Card>
        <Card.Body>
            <div className='align-items-center justify-content-between'>
                <Link to={`/profiles/${profile_id}`}>
                    <ProfileIcon src={profile_image} height={50} />
                    {owner}
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {is_owner && postPage && "..."}
                    </div>
                </Link>
            </div>
        </Card.Body>
        <Link to={`/posts/${id}`}>
            <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>
            {title && <Card.Title className="text-center">{title}</Card.Title>}
            {content && <Card.Text>{content}</Card.Text>}
            <div className={styles.PostBar}>
                {like_id ? (
                <span onClick={() => { }}>
                    <i className={`fa-solid fa-thumbs-up ${styles.ThumbUp}`} />
                </span>
                ) : currentUser ? (
                <span onClick={() => { }}>
                    <i className={`fa-solid fa-thumbs-up ${styles.ThumbUpOutline}`} />
                </span>
                ) : (
                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Log in to like posts!</Tooltip>}
                >
                    <i className="fa-solid fa-thumbs-up" />
                </OverlayTrigger>
                )}
                {likes_count}
                
            </div>
        </Card.Body>
    </Card>
}

export default Post