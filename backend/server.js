const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Çevre değişkenlerini yükle
dotenv.config();

// Veritabanı bağlantısı
connectDB();

const app = express();

// CORS ayarları
app.use(cors());

// Middleware
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Ana test endpoint'i
app.get('/', (req, res) => {
  res.json({ message: 'Backend API çalışıyor' });
});

// API test endpoint'i
app.get('/api/test', (req, res) => {
  res.json({ message: 'API test endpoint çalışıyor' });
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/journal', require('./routes/journalRoutes'));

// 404 handler
app.use((req, res) => {
  console.log(`404: ${req.method} ${req.url} bulunamadı`);
  res.status(404).json({ message: 'Endpoint bulunamadı' });
});

// Hata yakalama middleware
app.use((err, req, res, next) => {
  console.error('Hata:', err);
  res.status(500).json({ message: 'Sunucu hatası!', error: err.message });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('----------------------------------------');
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
  console.log(`Ana URL: http://localhost:${PORT}`);
  console.log(`API URL: http://localhost:${PORT}/api`);
  console.log(`Test URL: http://localhost:${PORT}/api/test`);
  console.log('----------------------------------------');
}); 