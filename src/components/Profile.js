import React, { useContext } from 'react';
import { AuthContext } from './Auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      <div>Welcome {user}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Profile