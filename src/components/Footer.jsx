import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>NIHAL<span className="red">.</span></h3>
          <p>
            Building high-quality web applications <br />
            with modern technologies and sleek designs.
          </p>
          <div className="footer-socials">
            <a href="https://github.com/nihalasri" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/nihalasri" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/nihalasri" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com/nihalasri" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li><i className="fas fa-envelope"></i> nihalasri@gmail.com</li>
            <li><i className="fas fa-phone"></i> +91 000 000 0000</li>
            <li><i className="fas fa-map-marker-alt"></i> Kerala, India</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Stay updated with my latest projects.</p>
          <form className="footer-newsletter">
            <input type="email" placeholder="Your Email" />
            <button type="submit" className="btn btn-small">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NIHAL ASRI. All rights reserved.</p>
        <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
