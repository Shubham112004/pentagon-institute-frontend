import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* About Section */}
                <div className="footer-section">
                    <h4 className="footer-title">About Pentagon Career Institute</h4>
                    <p className="footer-description">
                        At Pentagon Career Institute, we are committed to building the
                        future of aspiring <span>Engineers</span> and <span>Doctors</span>.
                        Join us to achieve your dreams with unparalleled guidance and
                        education.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-links">
                        <li><NavLink to="/about-us">About Us</NavLink></li>
                        <li><NavLink to="/courses">Courses</NavLink></li>
                        <li><NavLink to="/testimnials" >Testimonials</NavLink></li>
                        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-section">
                    <h4 className="footer-title">Contact Us</h4>
                    <p>📍 Pentagon Career Institute, City Center, New Delhi</p>
                    <p>📞 +91 9876543210</p>
                    <p>📧 support@pentagoninstitute.com</p>
                </div>

                {/* Social Media */}
                <div className="footer-section">
                    <h4 className="footer-title">Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Designed & Developed by Shubham Gaikwad</p>
                <p>© {new Date().getFullYear()} Pentagon Career Institute. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
