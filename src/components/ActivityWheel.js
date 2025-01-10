import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ActivityWheel.css';

const ActivityWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activities = [
    { name: 'Yürüyüş', color: '#FF6B6B', icon: '🚶' },
    { name: 'Kitap', color: '#4ECDC4', icon: '📚' },
    { name: 'Resim', color: '#45B7D1', icon: '🎨' },
    { name: 'Bahçe', color: '#96CEB4', icon: '🌱' },
    { name: 'Müzik', color: '#FFEEAD', icon: '🎵' },
    { name: 'Yemek', color: '#FFD93D', icon: '👨‍🍳' },
    { name: 'Spor', color: '#6C5B7B', icon: '🏃' },
    { name: 'Hobi', color: '#F7A072', icon: '🎭' }
  ];

  const spinWheel = () => {
    if (!spinning) {
      setSpinning(true);
      const newRotation = rotation + 1800 + Math.random() * 360;
      setRotation(newRotation);

      setTimeout(() => {
        setSpinning(false);
        const selectedIndex = Math.floor((360 - (newRotation % 360)) / (360 / activities.length));
        setSelectedActivity(activities[selectedIndex]);
      }, 3000);
    }
  };

  return (
    <div className="activity-wheel-container">
      <div className="wheel-pointer">▼</div>
      <motion.div
        className="activity-wheel"
        animate={{ rotate: rotation }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        {activities.map((activity, index) => {
          const angle = (360 / activities.length) * index;
          return (
            <div
              key={index}
              className="wheel-section"
              style={{
                transform: `rotate(${angle}deg)`
              }}
            >
              <div className="activity-text">
                <span>{activity.icon}</span>
                {activity.name}
              </div>
            </div>
          );
        })}
      </motion.div>
      <button 
        className="spin-button" 
        onClick={spinWheel}
        disabled={spinning}
      >
        {spinning ? 'Çevriliyor...' : 'Çarkı Çevir'}
      </button>
      {selectedActivity && (
        <div className="selected-activity">
          <h3>Seçilen Aktivite:</h3>
          <div className="activity-result" style={{ backgroundColor: selectedActivity.color }}>
            <span>{selectedActivity.icon}</span>
            <h4>{selectedActivity.name}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityWheel; 