import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.css';
import Logo from './Logo.png';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className='header'>
      <nav className='nav'>
        <div className='container'>
          <Link to="/" className="logo-link">
            <img src={Logo} className='logo' alt="Logo" />
          </Link>
          <div className='auth-links'>
            {user ? (
              <button onClick={logout} className="auth-button">Logout</button>
            ) : (
              <>
                <Link to="/register" className="auth-button">Register</Link>
                <Link to="/login" className="auth-button">Login</Link>
              </>
            )}
          </div>
          <div className='menu' id='mobile-menu-2'>
            <ul className='menu-list'>
              <li>
                <NavLink to="/" className={({ isActive }) =>
                  `menu-item ${isActive ? 'active' : 'inactive'}`
                }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) =>
                  `menu-item ${isActive ? 'active' : 'inactive'}`
                }>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) =>
                  `menu-item ${isActive ? 'active' : 'inactive'}`
                }>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/features" className={({ isActive }) =>
                  `menu-item ${isActive ? 'active' : 'inactive'}`
                }>
                  Features
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to="resumes" className={({ isActive }) =>
                    `menu-item ${isActive ? 'active' : 'inactive'}`
                  }>
                    Get Started
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
