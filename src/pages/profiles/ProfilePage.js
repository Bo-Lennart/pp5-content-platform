import React, { useEffect } from 'react'

import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

function ProfilePage() {

    useEffect(() => {
        const fetchData = async () {
            try {
                
            } catch (error) {
                
            }
        }
    })

  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage