import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignupCard from './components/SignupCard';
import AgeVerificationCard from './components/AgeVerificationCard';
import SignInCard from './components/SignInCard';
import TermsConsent from './components/TermsConsent';
import AgeGate from './components/AgeGate';
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage';
import FavouritesPage from './components/FavouritesPage';
import PlanPage from './components/PlanPage';
import SettingsPage from './components/SettingsPage';
import SubscriptionPage from './components/SubscriptionPage';
import HelpCenterPage from './components/HelpCenterPage';
import CoinsPage from './components/CoinsPage';
import GiftsCoinsPage from './components/GiftsCoinsPage';
import './styles/signup.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><div className="app"><div className="card"><SignInCard /></div></div></>} />
        <Route path="/signup" element={<><Header /><div className="app"><div className="card"><SignupCard /></div></div></>} />
        <Route path="/age-verification" element={<><Header /><div className="app"><AgeVerificationCard /></div></>} />
        <Route path="/terms-consent" element={<TermsConsent />} />
        <Route path="/age-gate" element={<AgeGate />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<CoinsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        <Route path="/coins" element={<CoinsPage />} />
        <Route path="/gifts-coins" element={<GiftsCoinsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
