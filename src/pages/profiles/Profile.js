import React from 'react'
import { useCurrentUser } from "../../contexts/CurrentUserContext"

const Profile = (props) => {
    const {profile, mobile, imageSize=55} = props
    const {id, image, owner} = profile

    const currentUser = useCurrentUser()
    

  return (
    <div>
        
    </div>
  )
}

export default Profile