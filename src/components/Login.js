import React, { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from './Auth';

const Login = () => {
  const [user, setUser] = useState('')
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'
  
  const handleLogin = () => {
    auth.login(user)
    navigate(redirectPath, {replace: true})
  }

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" id='username' onChange={e => setUser(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
