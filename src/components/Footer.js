import React from 'react';
import './Footer.css'; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
            <div className="footer-title">
                <h2 className='footer-title-text'>Be the first one to know</h2>
                <p>sign up for updates from the company</p>
           
            <div className="footer-subscribe">
            <input type="email" placeholder="Enter your email" className="footer-input" />
            <button className="footer-button">Subscribe</button>
            </div>
            </div>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p>+123 456 7890</p>
          <p>contact@example.com</p>
          <h2>Currency</h2>
          <p>USD</p>
          <p className='footer-small-text'>transactions will be completed in euros and curreny reference is available on hover</p>
        </div>
      </div>
      <div className="footer-separator"></div>
      <div className="footer-bottom">
        <div className="footer-column">
          <h3>Metta Muse</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Stroies</a></li>
            <li><a href="#">Artisans</a></li>
            <li><a href="#">Boutiques</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">EU Compliance Docs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Order & Shipping</a></li>
            <li><a href="#">Joi/Login as a seller</a></li>
            <li><a href="#">Payment & pricing</a></li>
            <li><a href="#">Refund and Returns</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Private Policy</a></li>
            <li><a href="#">Trems & Condition</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className='footer-social'>
            <div className='footer-social-icon'>
            <i className="fa-brands fa-instagram "></i>
            </div>
            <div className='footer-social-icon'>
            <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <h3>Metta Muse Accepts</h3>
          <div className='footer-social'>
          <div className='footer-social-icon'>
            <div className='footer-social-icon'>
            <i className="fa-brands fa-google-pay"></i> 
            </div>
            </div>
            <div className='footer-social-icon'>
            <i className="fa-brands fa-cc-visa"></i>
            </div>
            <div className='footer-social-icon'>
            <i className="fa-brands fa-cc-mastercard"></i>
            </div>
            <div className='footer-social-icon'>
            <i className="fa-brands fa-cc-paypal"></i>
            </div>
            <div className='footer-social-icon'>
            <i className="fa-brands fa-apple-pay"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
