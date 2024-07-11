// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import Logo from './Logo.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="footer-logo-img"
            />
          </Link>
        </div>
        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About</Link>
        </div>
        <div className="footer-social">
          <a href="https://github.com/ingalejay1" target="_blank" rel="noopener noreferrer" className="footer-social-link">Github</a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">Discord</a>
        </div>
        <div className="footer-copy">
          &copy; 2024 jayingale. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
