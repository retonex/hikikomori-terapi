const Journal = require('../models/Journal');

// @desc    Günlük girişi oluştur
// @route   POST /api/journal
// @access  Private
const createEntry = async (req, res) => {
  try {
    const { title, content, mood, activities, date } = req.body;

    const entry = await Journal.create({
      user: req.user._id,
      title,
      content,
      mood,
      activities,
      date
    });

    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Kullanıcının günlük girişlerini getir
// @route   GET /api/journal
// @access  Private
const getEntries = async (req, res) => {
  try {
    const entries = await Journal.find({ user: req.user._id }).sort({ date: -1 });
    res.json(entries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Günlük girişini güncelle
// @route   PUT /api/journal/:id
// @access  Private
const updateEntry = async (req, res) => {
  try {
    const entry = await Journal.findById(req.params.id);

    if (!entry) {
      return res.status(404).json({ message: 'Günlük girişi bulunamadı' });
    }

    // Kullanıcı kontrolü
    if (entry.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Yetkisiz erişim' });
    }

    const updatedEntry = await Journal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Günlük girişini sil
// @route   DELETE /api/journal/:id
// @access  Private
const deleteEntry = async (req, res) => {
  try {
    const entry = await Journal.findById(req.params.id);

    if (!entry) {
      return res.status(404).json({ message: 'Günlük girişi bulunamadı' });
    }

    // Kullanıcı kontrolü
    if (entry.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Yetkisiz erişim' });
    }

    await entry.remove();
    res.json({ message: 'Günlük girişi silindi' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createEntry,
  getEntries,
  updateEntry,
  deleteEntry
}; 