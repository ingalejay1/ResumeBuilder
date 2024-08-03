import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import { register as registerApi } from '../../services/api';

function Register() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
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
    if (!formData.name) newErrors.name = 'Full Name is required';
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
      const { data } = await registerApi(formData);
      login(data);
      navigate('/create-resume');
    } catch (error) {
      setErrors({ form: error.response?.data?.message || 'Registration failed' });
    }
  };

  return (
    <div className='auth-container'>
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-info">
            <h1 className='auth-title'>Register</h1>
            <p className='auth-subtitle'>Create your account</p>
          </div>
          {errors.form && <p className='auth-error'>{errors.form}</p>}
          <form className='auth-form' onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className='form-label'>Full Name</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Full Name'
                className={`form-input ${errors.name ? 'input-error': ''}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email" className='form-label'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                className={`form-input ${errors.email ? 'input-error': ''}`}
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
                className={`form-input ${errors.password ? 'input-error': ''}`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="form-error">{errors.password}</p>}
            </div>
            <button type='submit' className='auth-button'>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
