import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefault';
import ProfileIcon from '../../components/ProfileIcon';
import { useCurrentUser } from "../../contexts/CurrentUserContext"



function Profile() {
    const [profileData, setProfileData] = useState({
        id: '',
        owner: '',
        image: '',
    });

    const { id, owner, image } = profileData;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ profileData: profileData }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}`)
                ])
                setProfileData({ profileData: [profileData] })
                console.log(profileData)
            } catch (err) {
                console.log(err)
            }
        }
        handleMount();
    }, [id]);
    console.log("PROFILE DATA:", profileData);
    return (
        <div>
            <h1>HELLO</h1>
        </div>
    )
}

export default Profile