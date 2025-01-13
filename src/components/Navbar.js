import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          HikiHelp
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Ana Sayfa</Link>
          </li>
          <li className="nav-item">
            <Link to="/moduller" className="nav-link">İyileşme ve Güçlenme</Link>
          </li>
          <li className="nav-item">
            <Link to="/gunlugum" className="nav-link">Günlüğüm</Link>
          </li>
          <li className="nav-item">
            <Link to="/hakkimizda" className="nav-link">Hakkımızda</Link>
          </li>
          <li className="nav-item">
            <Link to="/iletisim" className="nav-link">İletişim</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 