import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './user.css'

const User = () => {

const {user, logout, loading} = useAuth()

if(loading) return <p>Loading</p>

const handleLogout = async () => {
  try{
    await logout()
  }catch(error){
    console.error(error)
  }
}
  return (
    <div className='welcome-user'>
        <h2>Welcome!: {user.displayName || user.email}</h2>

        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default User