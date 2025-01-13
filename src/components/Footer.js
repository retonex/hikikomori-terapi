import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 HikiHelp. Tüm hakları saklıdır.</p>
        <a 
          href="https://yc72.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="signature"
        >
          YC72
        </a>
      </div>
    </footer>
  );
};

export default Footer; 