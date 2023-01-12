import React from 'react'
import styles from '../styles/ProfileIcon.module.css'

const ProfileIcon = (props) => {
    const { src, height = 45, text } = props;

    return (
        <span>
            <img className={styles.ProfileIcon} src={src} height={height} width={height} alt="ProfileIcon" />
            {text}
        </span>
    )
}

export default ProfileIcon