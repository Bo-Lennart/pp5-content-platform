import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefault';
import ProfileIcon from '../../components/ProfileIcon';
import { useCurrentUser } from "../../contexts/CurrentUserContext"



function Profile(filter="") {
    const { id } = useParams();
    const [profileData, setProfileData] = useState({
        result: []
    });

    const { owner, image } = profileData;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: profileData }] = await Promise.all([
                    axiosReq.get(`/profiles/`)
                ])
                setProfileData({ results: [profileData] })
                
            } catch (err) {
                console.log(err)
            }
        }
        handleMount();
    }, [id]);
    console.log(profileData)
    return (
        <div>
            <h1>HELLO</h1>
        </div>
    )
}

export default Profile