import React from 'react'
import { Link } from 'react-router-dom';
import { useCurrentUser } from "../../contexts/CurrentUserContext"

const Profile = (props) => {
    const { profile, mobile, imageSize = 55 } = props;
    const { id, image, owner } = profile;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <div
        className={`my-3d d-flex align-item-center ${mobile && "flex-column"}`}
        >
            <div>
                <Link className="align-self-center" to={`/profiles/${id}`}>
                    
                </Link>
            </div>
        </div>
    )
}

export default Profile