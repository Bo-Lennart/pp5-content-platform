import { Tooltip } from 'bootstrap';
import React from 'react';
import { Card, Image, OverlayTrigger } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { axiosRes } from '../../api/axiosDefault';
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
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner
    const navigate = useNavigate();

    const handleNoUserLikeBookmark = () => {
            navigate(`/signin`)
    }

    const handleLike = async () => {
        try {
          const { data } = await axiosRes.post("/likes/", { post: id });
          console.log("DATA", data)
          setPosts((prevPosts) => ({
            ...prevPosts,
            results: prevPosts.results.map((post) => {
              return post.id === id
                ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                : post;
            }),
          }));
        } catch (err) {
          console.log(err);
        }
      };

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
                    <span onClick={handleLike}>
                        <i className={`fa-solid fa-thumbs-up ${styles.ThumbUpOutline}`} />
                    </span>
                ) : (
                    <span onClick={ handleNoUserLikeBookmark }>
                        <i className={`fa-solid fa-thumbs-up ${styles.ThumbUpOutline}`} />
                    </span>
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
                    <span onClick={ handleNoUserLikeBookmark }>
                        <i className={`fa-solid fa-book-bookmark ${styles.ThumbUpOutline}`} />
                    </span>
                )}
                {bookmark_count}


            </div>
        </Card.Body>
    </Card>
}

export default Post