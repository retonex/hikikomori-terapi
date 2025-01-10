import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { authAPI } from '../../services/api';
import './Auth.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (password !== confirmPassword) {
            setError('Şifreler eşleşmiyor!');
            setIsLoading(false);
            return;
        }

        try {
            const response = await authAPI.register(email, password);
            if (response.token) {
                login(response.token);
                navigate('/gunlugum');
            }
        } catch (err) {
            setError('Kayıt olurken bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Kayıt Ol</h2>
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

                <div className="form-group">
                    <label>Şifre Tekrar</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                    {isLoading ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
                </button>

                <p style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-color)' }}>
                    Zaten hesabınız var mı? 
                    <Link to="/giris" style={{ color: '#4a90e2', marginLeft: '5px', textDecoration: 'none' }}>
                        Giriş Yap
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;