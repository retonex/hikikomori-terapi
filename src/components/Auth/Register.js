import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { authAPI } from '../../services/api';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Şifre kontrolü
    if (formData.password !== formData.confirmPassword) {
      setError('Şifreler eşleşmiyor');
      return;
    }

    // Şifre uzunluk kontrolü
    if (formData.password.length < 6) {
      setError('Şifre en az 6 karakter olmalıdır');
      return;
    }

    setLoading(true);

    try {
      console.log('Kayıt isteği gönderiliyor:', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      const data = await authAPI.register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      if (data.token) {
        // Otomatik giriş yap
        login(data.user, data.token);
        navigate('/gunlugum');
      } else {
        setError('Kayıt başarılı ama giriş yapılamadı. Lütfen giriş yapın.');
        navigate('/giris');
      }
    } catch (err) {
      setError(err.message || 'Kayıt olurken bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Kayıt Ol</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Ad Soyad</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={3}
            />
          </div>
          <div className="form-group">
            <label>E-posta</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Şifre</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>
          <div className="form-group">
            <label>Şifre Tekrar</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>
          <button type="submit" disabled={loading} className="auth-button">
            {loading ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
          </button>
        </form>
        <div className="auth-links">
          <p>Zaten hesabınız var mı? <span onClick={() => navigate('/giris')}>Giriş Yap</span></p>
        </div>
      </div>
    </div>
  );
};

export default Register; 