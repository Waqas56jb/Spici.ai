import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaUser, FaEnvelope, FaLock, FaCheckCircle, 
  FaBell, FaMoon, FaGlobe, FaCrown, FaQuestionCircle, 
  FaFileAlt, FaBars, FaTrash
} from 'react-icons/fa';
import Sidebar from './Sidebar';
import Header from './Header';
import SpiciReactivationModal from './SpiciReactivationModal';
import './SettingsPage.css';
import img904 from '../assets/images/904.png';

export default function SettingsPage() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [showSpiciReactivation, setShowSpiciReactivation] = useState(false);

  const handleSpiciClick = () => {
    setShowSpiciReactivation(true);
  };

  return (
    <div className="settings-layout">
      <Header />
      <Sidebar onSpiciClick={handleSpiciClick} />
      <main className="settings-main">
        <div className="settings-content">
          {/* Header */}
          <div className="settings-header">
            <button className="settings-back" onClick={() => navigate(-1)}>
              <FaArrowLeft />
            </button>
            <h1 className="settings-title">Settings</h1>
          </div>

          {/* User Profile Section */}
          <div className="settings-section settings-profile">
            <div className="settings-profile__avatar">
              <img src={img904} alt="Anna Blue" />
            </div>
            <div className="settings-profile__info">
              <h2 className="settings-profile__name">Anna Blue</h2>
              <p className="settings-profile__email">sarah.johnson@email.com</p>
            </div>
          </div>

          {/* Account Controls */}
          <div className="settings-section">
            <h3 className="settings-section__title">Account Controls</h3>
            <div className="settings-list">
              <div className="settings-item" onClick={() => {}}>
                <div className="settings-item__left">
                  <FaUser className="settings-item__icon" />
                  <span className="settings-item__text">Edit Profile</span>
                </div>
                <FaArrowLeft className="settings-item__arrow" style={{ transform: 'rotate(180deg)' }} />
              </div>
              <div className="settings-item" onClick={() => {}}>
                <div className="settings-item__left">
                  <FaEnvelope className="settings-item__icon" />
                  <span className="settings-item__text">Change Email</span>
                </div>
                <FaArrowLeft className="settings-item__arrow" style={{ transform: 'rotate(180deg)' }} />
              </div>
              <div className="settings-item" onClick={() => {}}>
                <div className="settings-item__left">
                  <FaLock className="settings-item__icon" />
                  <span className="settings-item__text">Change Password</span>
                </div>
                <FaArrowLeft className="settings-item__arrow" style={{ transform: 'rotate(180deg)' }} />
              </div>
              <div className="settings-item" onClick={() => {}}>
                <div className="settings-item__left">
                  <FaQuestionCircle className="settings-item__icon" />
                  <span className="settings-item__text">Age Verification</span>
                  <span className="settings-item__verified">
                    <FaCheckCircle className="settings-item__check" />
                    Verified
                  </span>
                </div>
                <FaArrowLeft className="settings-item__arrow" style={{ transform: 'rotate(180deg)' }} />
              </div>
            </div>
          </div>

          {/* App Preferences */}
          <div className="settings-section">
            <h3 className="settings-section__title">App Preferences</h3>
            <div className="settings-list">
              <div className="settings-item">
                <div className="settings-item__left">
                  <FaBell className="settings-item__icon" />
                  <span className="settings-item__text">Notifications</span>
                </div>
                <label className="settings-toggle">
                  <input
                    type="checkbox"
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                  />
                  <span className="settings-toggle__slider"></span>
                </label>
              </div>
              <div className="settings-item">
                <div className="settings-item__left">
                  <FaMoon className="settings-item__icon" />
                  <span className="settings-item__text">Dark Mode</span>
                </div>
                <label className="settings-toggle">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                  />
                  <span className="settings-toggle__slider"></span>
                </label>
              </div>
              <div className="settings-item" onClick={() => {}}>
                <div className="settings-item__left">
                  <FaGlobe className="settings-item__icon" />
                  <div className="settings-item__content">
                    <span className="settings-item__text">Language</span>
                    <span className="settings-item__subtext">English (US)</span>
                  </div>
                </div>
                <FaArrowLeft className="settings-item__arrow" style={{ transform: 'rotate(180deg)' }} />
              </div>
            </div>
          </div>

          {/* Spici+ Premium */}
          <div className="settings-section settings-premium">
            <div className="settings-premium__left">
              <div className="settings-premium__icon">
                <FaCrown />
              </div>
              <div className="settings-premium__info">
                <h3 className="settings-premium__title">Spici+ Premium</h3>
                <p className="settings-premium__subtitle">Active subscription</p>
              </div>
            </div>
            <div className="settings-premium__right">
              <div className="settings-premium__price">$9.99/month</div>
              <p className="settings-premium__renews">Renews Dec 15</p>
            </div>
          </div>

          {/* Support & Legal */}
          <div className="settings-section">
            <h3 className="settings-section__title">Support & Legal</h3>
            <div className="settings-list">
              <div className="settings-item" onClick={() => navigate('/help-center')}>
                <div className="settings-item__left">
                  <FaQuestionCircle className="settings-item__icon" />
                  <span className="settings-item__text">Help Center</span>
                </div>
                <FaArrowLeft className="settings-item__arrow" style={{ transform: 'rotate(180deg)' }} />
              </div>
              <div className="settings-item" onClick={() => {}}>
                <div className="settings-item__left">
                  <FaFileAlt className="settings-item__icon" />
                  <span className="settings-item__text">Terms & Privacy Policy</span>
                </div>
                <FaArrowLeft className="settings-item__arrow" style={{ transform: 'rotate(180deg)' }} />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="settings-actions">
            <button className="settings-btn settings-btn--primary" onClick={() => navigate('/subscription')}>
              <FaBars />
              <span>Manage Subscription</span>
            </button>
            <button className="settings-btn settings-btn--danger">
              <FaTrash />
              <span>Delete Account</span>
            </button>
          </div>
        </div>
      </main>
      <SpiciReactivationModal 
        isOpen={showSpiciReactivation} 
        onClose={() => setShowSpiciReactivation(false)} 
      />
    </div>
  );
}


