import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Modules.css';
import understanding from '../assets/understanding.jpg';
import internetAddiction from '../assets/internet-addiction.jpg';
import socialization from '../assets/socialization.jpg';
import routine from '../assets/routine.jpg';
import relaxation from '../assets/relaxation.jpg';

const Modules = () => {
  const navigate = useNavigate();

  const modules = [
    {
      id: 'sosyal-izolasyon',
      title: 'Sosyal İzolasyonu Anlamak',
      description: 'Hikikomori sendromunun nedenleri ve etkileri hakkında bilgilendirici içerikler',
      icon: '🏠',
      image: understanding
    },
    {
      id: 'internet-bagimliligi',
      title: 'İnternet Bağımlılığı Kontrolü',
      description: 'Dijital detoks teknikleri ve sağlıklı internet kullanım alışkanlıkları geliştirme',
      icon: '💻',
      image: internetAddiction
    },
    {
      id: 'adim-adim-sosyallesme',
      title: 'Adım Adım Sosyalleşme',
      description: 'Kademeli maruziyet teknikleri ve pratik alıştırmalar',
      icon: '👥',
      image: socialization
    },
    {
      id: 'gunluk-rutinler',
      title: 'Günlük Rutinler',
      description: 'Sağlıklı yaşam ve günlük aktivite planlaması',
      icon: '📅',
      image: routine
    },
    {
      id: 'gevseme-teknikleri',
      title: 'Gevşeme Teknikleri',
      description: 'Anksiyete ve stresle başa çıkma egzersizleri',
      icon: '🧘',
      image: relaxation
    }
  ];

  const handleModuleClick = (moduleId) => {
    navigate(`/modul/${moduleId}`);
  };

  return (
    <div className="modules">
      <h2>İyileşme ve Güçlenme Rehberi
      </h2>
      <div className="modules-grid">
        {modules.map((module, index) => (
          <motion.div
            key={index}
            className="module-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="module-image">
              <img src={module.image} alt={module.title} />
            </div>
            <div className="module-icon">{module.icon}</div>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleModuleClick(module.id)}
            >
              Başla
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Modules; 