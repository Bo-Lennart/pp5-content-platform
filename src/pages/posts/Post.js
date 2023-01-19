import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { axiosRes } from '../../api/axiosDefault';
import { MoreDropdown } from '../../components/MoreDropdown';
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
        bookmarks_count,
        title,
        content,
        image,
        updated_at,
        postPage,
        setPosts,
        isInPostPage = true
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/posts/${id}/edit`)
    }

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/blogposts/${id}/`)
            navigate(-1);
        } catch (err) {
            console.log(err);
        }
    }

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

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleBookmark = async () => {
        try {
            const { data } = await axiosRes.post("/bookmark/", { post: id });
            console.log("DATA", data)
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, bookmarks_count: post.bookmarks_count + 1, bookmark_id: data.id }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleRemoveBookmark = async () => {
        try {
            await axiosRes.delete(`/bookmark/${bookmark_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? { ...post, bookmarks_count: post.bookmarks_count - 1, like_id: null }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };
    console.log(is_owner)
    return <Card>
        <Card.Body>
            <div className='align-items-center justify-content-between'>
                <p>
                    <ProfileIcon src={profile_image} height={50} />
                    {owner}
                    {is_owner  && <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />}
                </p>
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
            {isInPostPage &&
                <div className={styles.PostBar}>
                    {like_id ? (
                        <span onClick={handleUnlike}>
                            <i className={`fa-solid fa-thumbs-up ${styles.ThumbUp}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleLike}>
                            <i className={`fa-solid fa-thumbs-up ${styles.ThumbUpOutline}`} />
                        </span>
                    ) : (
                        <span onClick={handleNoUserLikeBookmark}>
                            <i className={`fa-solid fa-thumbs-up ${styles.ThumbUpOutline}`} />
                        </span>
                    )}
                    {likes_count}

                    {bookmark_id ? (
                        <span onClick={handleRemoveBookmark}>
                            <i className={`fa-solid fa-book-bookmark ${styles.ThumbUp}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleBookmark}>
                            <i className={`fa-solid fa-book-bookmark ${styles.ThumbUpOutline}`} />
                        </span>
                    ) : (
                        <span onClick={handleNoUserLikeBookmark}>
                            <i className={`fa-solid fa-book-bookmark ${styles.ThumbUpOutline}`} />
                        </span>
                    )}
                    {bookmarks_count}
                </div>
            }
        </Card.Body>
    </Card>
}

export default Post