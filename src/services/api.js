// API URL'sini ortama göre ayarla
const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-backend-url.render.com/api'  // Production URL
  : 'http://localhost:3001/api';                 // Development URL

// Auth API'leri
export const authAPI = {
  // Kayıt olma
  register: async (userData) => {
    try {
      console.log('Kayıt isteği gönderiliyor:', userData);
      console.log('API URL:', `${API_URL}/auth/register`);
      
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      console.log('Sunucu yanıtı:', response.status);
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('Sunucu hata detayı:', errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Başarılı yanıt:', data);
      return data;
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  },

  // Giriş yapma
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  // Kullanıcı bilgilerini getirme
  getMe: async (token) => {
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.json();
  }
};