import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Css/Navbar.css';
import Logo from '../Assets/Logo.png'; // Update path if necessary

function Navbar() {
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

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
          <div className="navbar-nav">
            <NavLink
              className="nav-link"
              exact
              activeClassName="active"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/blogs"
            >
              Blogs
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      <section>
        <div id="intro" className="bg-image" style={{
            backgroundImage: "url('https://mdbootstrap.com/img/Photos/new-templates/craftsman/img(1).jpg')",
            height: '100vh'
          }}>
          <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <div className="container d-flex justify-content-center align-items-center h-100">
              <div className="row align-items-center">
                <div className="col-12">
                  <h1 className="mb-0 text-white display-1">RIT EU</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
