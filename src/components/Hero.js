import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import internetAddiction from '../assets/internet-addictionx.jpg';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/moduller');
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Hikikomori İyileştirme Platformu</h1>
        <p>Bilişsel davranışçı terapi temelli, sosyal izolasyonla başa çıkma ve topluma yeniden kazandırma programı</p>
        <button className="start-button" onClick={handleStartClick}>Hemen Başla</button>
      </div>
      <div className="hero-image">
        <img 
          src={internetAddiction} 
          alt="İnternet Bağımlılığı ve Sosyal İzolasyon" 
          className="hero-img"
        />
      </div>
    </div>
  );
};

export default Hero; 