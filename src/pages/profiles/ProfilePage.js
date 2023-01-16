import React, { useEffect } from 'react'
import { axiosReq } from '../../api/axiosDefault'

function ProfilePage() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{ data: pageProfiles}] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`),
                ]);
                
            } catch (error) {
                
            }
        }
    })

  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage