import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2>Yoga Studio</h2>
          <p>Bringing mindfulness and balance to your everyday life.</p>
          <div className="social-icons">
          <a href="https://facebook.com/YogaStudio" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/YogaStudio" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/YogaStudio" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#mission">About Us</a></li>
              <li><a href="#classes">Our Classes</a></li>
              <li><a href="#instructors">Instructors</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#FAQ">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li onClick={() => window.location.href = "mailto:contact@yogastudio.com"}>Email Us</li>
              <li onClick={() => window.open("https://goo.gl/maps/example", "_blank")}>Get Directions</li>
              <li onClick={() => window.location.href = "tel:+123456789"}>Call Us</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-bottom">&copy; {new Date().getFullYear()} Yoga Studio. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
