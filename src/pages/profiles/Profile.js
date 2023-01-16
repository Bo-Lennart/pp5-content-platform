import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefault';
import ProfileIcon from '../../components/ProfileIcon';
import { useCurrentUser } from "../../contexts/CurrentUserContext"



function Profile() {
    const [errors, setErrors] = useState({});
    const [profileData, setProfileData] = useState({
        owner: '',
        image: '',
      });
    
    const { owner, image } = profileData;



    return (
        <div>
            <h1>HELLO</h1>
        </div>
    )
}

export default Profile