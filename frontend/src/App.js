import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignupCard from './components/SignupCard';
import AgeVerificationCard from './components/AgeVerificationCard';
import SignInCard from './components/SignInCard';
import TermsConsent from './components/TermsConsent';
import AgeGate from './components/AgeGate';
import HomePage from './components/HomePage';
import './styles/signup.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<div className="card"><SignInCard /></div>} />
          <Route path="/signup" element={<div className="card"><SignupCard /></div>} />
          <Route path="/age-verification" element={<AgeVerificationCard />} />
          <Route path="/terms-consent" element={<TermsConsent />} />
          <Route path="/age-gate" element={<AgeGate />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
