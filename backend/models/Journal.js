const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Başlık alanı zorunludur']
  },
  content: {
    type: String,
    required: [true, 'İçerik alanı zorunludur']
  },
  mood: {
    type: String,
    required: [true, 'Ruh hali alanı zorunludur']
  },
  activities: [{
    type: String
  }],
  date: {
    type: Date,
    required: [true, 'Tarih alanı zorunludur'],
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Journal', journalSchema); 