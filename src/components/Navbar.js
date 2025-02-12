import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
=======
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

>>>>>>> f3d1fd6d22cf79e721fbd5679683f7fbcda7da83
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
<<<<<<< HEAD
          <li className="nav-item">
            <Link to="/gunlugum" className="nav-link">Günlüğüm</Link>
          </li>
=======
          {user ? (
            <>
              <li className="nav-item">
                <Link to="/gunlugum" className="nav-link">Günlüğüm</Link>
              </li>
              <li className="nav-item">
                <span className="nav-link user-name">
                  Merhaba, {user.name || 'Kullanıcı'}
                </span>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link logout-button">
                  Çıkış Yap
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/giris" className="nav-link">Giriş Yap</Link>
              </li>
              <li className="nav-item">
                <Link to="/kayit" className="nav-link register-button">Kayıt Ol</Link>
              </li>
            </>
          )}
>>>>>>> f3d1fd6d22cf79e721fbd5679683f7fbcda7da83
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