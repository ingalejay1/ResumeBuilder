import React from 'react'
import './Auth.css'

function Register() {
  return (
    <div className='auth-container'>
        <div className="auth-wrapper">
            <div className="auth-content">
                <div className="auth-info">
                    <h1 className='auth-title'>Register</h1>
                    <p className='auth-subtitle'>Create your account</p>
                </div>
                <form className='auth-form'>
                    <div className="form-group">
                        <label htmlFor="name" className='form-label'>Full Name</label>
                        <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Full Name'
                        className='form-input'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        className='form-input'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        className='form-input'
                        />
                    </div>
                    <button type='submit' className='auth-button'>Register</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Register