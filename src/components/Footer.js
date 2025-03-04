import React from 'react';
import linkedinLogo from './LI-In-Bug.png'; 
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact: <a href="mailto:Amazantian@gmail.com">Amazantian@gmail.com</a></p>
        <p>&copy; 2025 Amazantian. All rights reserved.</p>
        <p>
          Follow us on:  
          <a href="https://www.linkedin.com/company/amazantian/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="linkedin-icon" />
          </a> 
        </p>
        <p>
          <a href="/terms-of-service"> Terms of Service </a> |  
          <a href="/privacy-policy"> Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
