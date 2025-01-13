import React, { useState, useEffect } from 'react';
import './Journal.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Journal = () => {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('journalEntries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
   
  const [newEntry, setNewEntry] = useState({
    title: '',
    content: '',
    mood: '😊',
    activities: [],
    date: new Date().toISOString().split('T')[0]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const moods = ['😊', '😐', '😔', '😡', '😴', '🤔', '😰', '😌'];
  const activityOptions = [
    'Sosyal Etkileşim',
    'Dışarı Çıkma',
    'Egzersiz',
    'Meditasyon',
    'Okuma',
    'Hobi Aktivitesi',
    'İnternet Kullanımı Kontrolü',
    'Günlük Rutin'
  ];

  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setEntries(entries.map(entry => 
        entry.id === editingId ? { ...newEntry, id: editingId } : entry
      ));
      setIsEditing(false);
      setEditingId(null);
    } else {
      setEntries([...entries, { ...newEntry, id: Date.now() }]);
    }
    
    setNewEntry({
      title: '',
      content: '',
      mood: '😊',
      activities: [],
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleEdit = (entry) => {
    setIsEditing(true);
    setEditingId(entry.id);
    setNewEntry(entry);
  };

  const handleDelete = (id) => {
    if (window.confirm('Bu günlük girişini silmek istediğinize emin misiniz?')) {
      setEntries(entries.filter(entry => entry.id !== id));
    }
  };

  const handleActivityToggle = (activity) => {
    setNewEntry(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  return (
    <div className="journal">
      <div className="journal-container">
        <h1>Günlüğüm</h1>
        
        <form onSubmit={handleSubmit} className="journal-form">
          <div className="form-group">
            <input
              type="date"
              value={newEntry.date}
              onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              placeholder="Başlık"
              value={newEntry.title}
              onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
              required
            />
          </div>

          <div className="mood-selector">
            <label>Bugünkü Ruh Halim:</label>
            <div className="mood-options">
              {moods.map(mood => (
                <span
                  key={mood}
                  className={`mood ${newEntry.mood === mood ? 'selected' : ''}`}
                  onClick={() => setNewEntry({...newEntry, mood: mood})}
                >
                  {mood}
                </span>
              ))}
            </div>
          </div>

          <div className="activities-selector">
            <label>Bugünkü Aktivitelerim:</label>
            <div className="activities-options">
              {activityOptions.map(activity => (
                <label key={activity} className="activity-option">
                  <input
                    type="checkbox"
                    checked={newEntry.activities.includes(activity)}
                    onChange={() => handleActivityToggle(activity)}
                  />
                  {activity}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <textarea
              placeholder="Bugün neler yaşadın?"
              value={newEntry.content}
              onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            {isEditing ? 'Güncelle' : 'Kaydet'}
          </button>
        </form>

        <div className="journal-entries">
          {entries.sort((a, b) => new Date(b.date) - new Date(a.date)).map(entry => (
            <div key={entry.id} className="journal-entry">
              <div className="entry-header">
                <div className="entry-date">{new Date(entry.date).toLocaleDateString('tr-TR')}</div>
                <div className="entry-mood">{entry.mood}</div>
                <div className="entry-actions">
                  <FaEdit onClick={() => handleEdit(entry)} className="edit-icon" />
                  <FaTrash onClick={() => handleDelete(entry.id)} className="delete-icon" />
                </div>
              </div>
              <h3>{entry.title}</h3>
              <div className="entry-activities">
                {entry.activities.map(activity => (
                  <span key={activity} className="activity-tag">{activity}</span>
                ))}
              </div>
              <p>{entry.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal; 