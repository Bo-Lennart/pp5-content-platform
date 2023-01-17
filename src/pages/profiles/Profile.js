import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefault';
import ProfileIcon from '../../components/ProfileIcon';
import { useCurrentUser } from '../../contexts/CurrentUserContext';


function Profile(filter = "") {
    const currentUser = useCurrentUser();
    //get logged in user
    const currentOwner = currentUser.username;



    const { id } = useParams();
    const [profiles, setProfiles] = useState({
        result: []
    });

    const { owner, image } = profiles;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const profilesUrl = `/profiles/${currentOwner}`
                const profiles = await axiosReq.get(profilesUrl);
                // console.log(profiles.data)
                setProfiles({ results: profiles.data });

            } catch (err) {
                console.log(err)
            }
        }
        handleMount();
    }, [id]);
    console.log("USER INLOGGED NOW", currentOwner)
    return (
        <div>
            <h1>HELLO</h1>
        </div>
    )
}

export default Profile