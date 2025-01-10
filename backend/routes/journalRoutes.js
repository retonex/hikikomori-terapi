const express = require('express');
const router = express.Router();
const {
  createEntry,
  getEntries,
  updateEntry,
  deleteEntry
} = require('../controllers/journalController');
const { protect } = require('../middleware/auth');

router.route('/')
  .get(protect, getEntries)
  .post(protect, createEntry);

router.route('/:id')
  .put(protect, updateEntry)
  .delete(protect, deleteEntry);

module.exports = router; 