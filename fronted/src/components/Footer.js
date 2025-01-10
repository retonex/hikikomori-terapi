import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HikiHelp</h3>
            <p>Sosyal izolasyondan kurtulmanıza yardımcı olan dijital terapi platformu</p>
          </div>
          <div className="footer-section">
            <h3>Hızlı Bağlantılar</h3>
            <ul>
              <li>Ana Sayfa</li>
              <li>İyileştirme ve Geliştirme</li>
              <li>SSS</li>
              <li>İletişim</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>İletişim</h3>
            <p>Email: info@hikihelp.com</p>
            <p>Tel: +90 xxx xxx xx xx</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 HikiHelp. Tüm hakları saklıdır.</p>
          <div className="signature">YC</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 