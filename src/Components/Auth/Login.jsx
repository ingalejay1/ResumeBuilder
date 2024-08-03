import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../../services/api';
import './Auth.css';

function Login() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await loginApi(formData);
      login(response.data);
      navigate('/resumes');
    } catch (error) {
      setErrors({ form: 'Login failed. Please check your credentials.' });
    }
  };

  return (
    <div className='auth-container'>
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-info">
            <h1 className='auth-title'>Login</h1>
            <p className='auth-subtitle'>Sign in to your account</p>
          </div>
          {errors.form && <p className='auth-error'>{errors.form}</p>}
          <form className='auth-form' onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className='form-label'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password" className='form-label'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                className={`form-input ${errors.password ? 'input-error' : ''}`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="form-error">{errors.password}</p>}
            </div>
            <button type='submit' className='auth-button'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
