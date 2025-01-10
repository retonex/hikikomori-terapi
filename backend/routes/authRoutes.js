const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// Test endpoint'i
router.get('/test', (req, res) => {
  res.json({ message: 'Auth routes çalışıyor' });
});

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router; 