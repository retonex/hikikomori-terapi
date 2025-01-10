import React from 'react';
import { Link } from 'react-router-dom';
import './Modules.css';

const Modules = () => {
  return (
    <div className="modules-container">
      <div className="modules-header">
        <h1>Modüller</h1>
        <p>Kişisel gelişiminiz için özel olarak hazırlanmış modüllerimizi keşfedin</p>
      </div>
      
      <div className="modules-grid">
        {/* Modül kartları */}
        <div className="module-card">
          <h2 className="module-title">Modül 1</h2>
          <p className="module-description">
            Modül açıklaması buraya gelecek
          </p>
          <Link to="/modul/1" className="module-link">
            Detayları Gör
          </Link>
        </div>
        {/* Diğer modül kartları */}
      </div>
    </div>
  );
};

export default Modules; 