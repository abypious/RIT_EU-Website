import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Css/Navbar.css';
import Logo from '../Assets/Logo.png';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsMobile(false);
        setIsMenuOpen(false);
      } else {
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
        {isMobile && (
          <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
            <span className="hamburger-icon">&#9776;</span>
          </button>
        )}
        <div className={`navbar-nav ${isMobile && isMenuOpen ? 'mobile-menu-active' : ''}`}>
          <a className="nav-link" href="#home" onClick={isMobile ? toggleMobileMenu : null}>Home</a>
          <a className="nav-link" href="#about" onClick={isMobile ? toggleMobileMenu : null}>About</a>
          <a className="nav-link" href="#blog" onClick={isMobile ? toggleMobileMenu : null}>Blog</a>
          <a className="nav-link" href="#contact" onClick={isMobile ? toggleMobileMenu : null}>Contact</a>
        </div>
        {!isMobile && <button className="learn-more-btn">Learn More</button>}
      </div>
    </nav>
  );
}

export default Navbar;
