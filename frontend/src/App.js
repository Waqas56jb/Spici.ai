import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import SignupCard from './components/SignupCard';
import AgeVerificationCard from './components/AgeVerificationCard';
import SignInCard from './components/SignInCard';
import TermsConsent from './components/TermsConsent';
import './styles/signup.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Logo />
        <Routes>
          <Route path="/" element={<div className="card"><SignInCard /></div>} />
          <Route path="/signup" element={<div className="card"><SignupCard /></div>} />
          <Route path="/age-verification" element={<AgeVerificationCard />} />
          <Route path="/terms-consent" element={<TermsConsent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
