import React from 'react';
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

    } = props;

    const currentUser = useCurrentUser;
    const is_owner = currentUser?.username === owner

  return (
    
  )
}

export default Post