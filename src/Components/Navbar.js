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

    // Cleanup on component unmount
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

    handleResize(); // Call on component mount
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
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
            <NavLink className="nav-link" exact activeClassName="active" to="/" onClick={toggleMobileMenu}>
              Home
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/about" onClick={toggleMobileMenu}>
              About
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/blogs" onClick={toggleMobileMenu}>
              Blogs
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/contact" onClick={toggleMobileMenu}>
              Contact
            </NavLink>
          </div>
          {!isMobile && <button className="learn-more-btn">Learn More</button>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
