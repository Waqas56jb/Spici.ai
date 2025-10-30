import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import SignupCard from './components/SignupCard';
import AgeVerificationCard from './components/AgeVerificationCard';
import './styles/signup.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Logo />
        <div className="card">
          <Routes>
            <Route path="/" element={<SignupCard />} />
            <Route path="/age-verification" element={<AgeVerificationCard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
