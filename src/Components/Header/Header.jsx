import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from './Logo.png';

function Header() {
    const location = useLocation();
    const isAuthPage = location.pathname === '/register' || location.pathname === '/login' || location.pathname === '/get-started';

    return (
        <header className='header'>
            <nav className='nav'>
                <div className='container'>
                    <Link to="/" className="logo-link">
                        <img src={Logo} className='logo' alt="Logo" />
                    </Link>
                    {isAuthPage ? (
                        <div className='auth-links'>
                            <NavLink to="/register" className="nav-link">Register</NavLink>
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                        </div>
                    ) : (
                        <>
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
                            <div className='auth-links'>
                                <NavLink to="/get-started" className="get-started-link">
                                    Get Started
                                </NavLink>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
