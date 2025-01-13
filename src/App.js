import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Bileşen importları
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modules from './components/Modules';
import ModuleDetail from './components/ModuleDetail';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import Journal from './components/Journal';
import LanguageSelector from './components/LanguageSelector';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <LanguageSelector />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Modules />
            </>
          } />
          <Route path="/moduller" element={<Modules />} />
          <Route path="/iyilestirmevegelistirme" element={<Modules />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/modul/:moduleId" element={<ModuleDetail />} />
          <Route path="/gunlugum" element={<Journal />} />
        </Routes>
        <ThemeToggle />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
