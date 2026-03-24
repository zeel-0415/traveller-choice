import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import Visa from './pages/Visa';
import Cruise from './pages/Cruise';
import Forex from './pages/Forex';
import Contact from './pages/Contact';
import GoaPackages from './pages/GoaPackages';

export default function App() {
  const [authMode, setAuthMode] = useState(null); // 'signin' | 'join' | null

  return (
    <BrowserRouter>
      <Navbar onSignIn={() => setAuthMode('signin')} onJoin={() => setAuthMode('join')} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/cruise" element={<Cruise />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/packages/goa" element={<GoaPackages />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ChatBot />
      {authMode && <AuthModal mode={authMode} onClose={() => setAuthMode(null)} />}
    </BrowserRouter>
  );
}
