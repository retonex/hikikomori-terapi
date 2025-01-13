import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
>>>>>>> f3d1fd6d22cf79e721fbd5679683f7fbcda7da83
import './App.css';

// Bileşen importları
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modules from './components/Modules';
import ModuleDetail from './components/ModuleDetail';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
<<<<<<< HEAD
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

=======
import Journal from './components/Journal';
import ThemeToggle from './components/ThemeToggle';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { AuthProvider, useAuth } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
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
            <Route 
              path="/gunlugum" 
              element={
                <RequireAuth>
                  <Journal />
                </RequireAuth>
              } 
            />
            <Route path="/giris" element={<Login />} />
            <Route path="/kayit" element={<Register />} />
          </Routes>
          <ThemeToggle />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

// Korumalı Route bileşeni
function RequireAuth({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (!user) {
    return <Navigate to="/giris" />;
  }

  return children;
}

>>>>>>> f3d1fd6d22cf79e721fbd5679683f7fbcda7da83
export default App;
