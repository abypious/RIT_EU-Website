import React from 'react';
import '../Components/Css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>RIT EU</h3>
                    <p>
                        Building Faith, Spreading Hope.
                    </p>
                </div>
                
                <div className="footer-section about">
                    <ul><h3>Contact</h3>
                    <li>Phone: +91 73564 95708</li></ul>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} RIT EU | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
