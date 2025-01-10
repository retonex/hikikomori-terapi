const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Token oluşturma
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

// @desc    Kullanıcı kaydı
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    console.log('Kayıt isteği alındı:', req.body);
    
    const { name, email, password } = req.body;

    // Tüm alanların dolu olduğunu kontrol et
    if (!name || !email || !password) {
      console.log('Eksik alan:', { name, email, password: password ? 'var' : 'yok' });
      return res.status(400).json({ 
        message: 'Lütfen tüm alanları doldurun'
      });
    }

    // Email kontrolü
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log('Email zaten kayıtlı:', email);
      return res.status(400).json({ 
        message: 'Bu email adresi zaten kayıtlı'
      });
    }

    // Kullanıcı oluştur
    const user = await User.create({
      name,
      email,
      password
    });

    if (user) {
      console.log('Kullanıcı oluşturuldu:', user._id);
      const token = generateToken(user._id);
      
      res.status(201).json({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email
        },
        token
      });
    }
  } catch (error) {
    console.error('Kayıt hatası:', error);
    res.status(400).json({ 
      message: 'Kayıt işlemi başarısız',
      error: error.message 
    });
  }
};

// @desc    Kullanıcı girişi
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    console.log('Giriş isteği alındı:', { email: req.body.email });
    
    const { email, password } = req.body;

    // Email ve şifre kontrolü
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Lütfen email ve şifrenizi girin'
      });
    }

    // Kullanıcıyı bul
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      console.log('Giriş başarılı:', user._id);
      const token = generateToken(user._id);
      
      res.json({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email
        },
        token
      });
    } else {
      console.log('Geçersiz giriş denemesi:', email);
      res.status(401).json({ 
        message: 'Geçersiz email veya şifre'
      });
    }
  } catch (error) {
    console.error('Giriş hatası:', error);
    res.status(400).json({ 
      message: 'Giriş yapılamadı',
      error: error.message 
    });
  }
};

// @desc    Kullanıcı bilgilerini getir
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    console.error('Kullanıcı bilgileri getirme hatası:', error);
    res.status(400).json({ 
      message: 'Kullanıcı bilgileri alınamadı',
      error: error.message 
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getMe
}; 