import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>İletişim</h1>
        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">İsim</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesajınız</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Gönder</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 