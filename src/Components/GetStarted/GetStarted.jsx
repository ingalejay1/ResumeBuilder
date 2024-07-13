import React from 'react'
import { Link } from 'react-router-dom'
import './GetStarted.css'

function GetStarted() {
  return (
    <div className='get-started-container'>
        <h1>Welcome to our application</h1>
        <p>Get started by registering or loggin in.</p>
        <div className="auth-buttons">
            <Link to='/register' className='auth-button'>Register</Link>
            <Link to='/login' className='auth-button'>Login</Link>
        </div>
    </div>
  )
}

export default GetStarted