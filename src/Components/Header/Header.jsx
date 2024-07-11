import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import Logo from './Logo.png'


function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='container'>
          <Link to="/" className="logo-link">
            <img src={Logo}
              className='logo'
              alt="Logo" />
          </Link>
          <div className='auth-links'>
            <Link to="#" className="get-started-link">
              Get started
            </Link>
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
                <NavLink to="/About" className={({ isActive }) =>
                  `menu-item ${isActive ? 'active' : 'inactive'}`
                }>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className={({ isActive }) =>
                  `menu-item ${isActive ? 'active' : 'inactive'}`
                }>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/Features" className={({ isActive }) =>
                  `menu-item ${isActive ? 'active' : 'inactive'}`
                }>
                  Features
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
