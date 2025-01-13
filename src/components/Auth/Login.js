import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { authAPI } from '../../services/api';
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        
        try {
            const response = await authAPI.login(email, password);
            if (response.token) {
                login(response.token);
                navigate('/gunlugum');
            }
        } catch (err) {
            setError('Giriş yapılırken bir hata oluştu. Lütfen bilgilerinizi kontrol edin.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Hoş Geldiniz</h2>
                {error && <div className="error-message">{error}</div>}
                
                <div className="form-group">
                    <label>E-posta Adresi</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ornek@email.com"
                        required
                        disabled={isLoading}
                    />
                </div>

                <div className="form-group">
                    <label>Şifre</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        disabled={isLoading}
                    />
                </div>

                <button 
                    type="submit" 
                    className="auth-button"
                    disabled={isLoading}
                >
                    {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                </button>

                <p style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-color)' }}>
                    Hesabınız yok mu? 
                    <Link to="/kayit" style={{ color: '#4a90e2', marginLeft: '5px', textDecoration: 'none' }}>
                        Kayıt Ol
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;