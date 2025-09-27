import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'

const Profile = () => {

   const user = useSelector((store) => store.user)  // Read the store and in editprofile tag we get the user nad received the user in EditProfile.jsx
  return (
    user && (    // it will only be called when the user is present
    <div> 
      <EditProfile user={user}/>   
      </div>
    )
)
}

export default Profile