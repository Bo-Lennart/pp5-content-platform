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
        bookmark_id,
        bookmark_count,
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
                    {is_owner && postPage && "..."}
                </Link>
                {title && <Card.Title className="text-center">{title}</Card.Title>}
                <p className="text-center">{updated_at}</p>
                <p className="text-center">{category}</p>
            </div>
        </Card.Body>
        <Link to={`/posts/${id}`}>
            <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>

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

                {bookmark_id ? (
                    <span onClick={() => { }}>
                        <i className={`fa-solid fa-book-bookmark ${styles.ThumbUp}`} />
                    </span>
                ) : currentUser ? (
                    <span onClick={() => { }}>
                        <i className={`fa-solid fa-book-bookmark ${styles.ThumbUpOutline}`} />
                    </span>
                ) : (
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Log in to save posts!</Tooltip>}
                    >
                        <i class="fa-solid fa-book-bookmark"></i>
                    </OverlayTrigger>
                )}
                {bookmark_count}


            </div>
        </Card.Body>
    </Card>
}

export default Post