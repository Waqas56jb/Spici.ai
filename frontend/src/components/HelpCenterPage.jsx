import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaFlag, FaRobot, FaCreditCard, FaExclamationTriangle,
  FaQuestionCircle, FaEnvelope, FaComments, FaFileAlt, FaShieldAlt,
  FaExternalLinkAlt, FaChevronRight, FaChevronDown
} from 'react-icons/fa';
import Sidebar from './Sidebar';
import Header from './Header';
import './HelpCenterPage.css';

export default function HelpCenterPage() {
  const navigate = useNavigate();
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const reportIssues = [
    { icon: FaRobot, text: 'Report AI Behavior', path: '#' },
    { icon: FaCreditCard, text: 'Report a Payment Issue', path: '#' },
    { icon: FaExclamationTriangle, text: 'Report NSFW or Inappropriate Content', path: '#' },
  ];

  const faqs = [
    {
      question: 'How do I activate Spici+?',
      answer: 'To activate Spici+, go to Settings and click on "Manage Subscription". Choose your preferred plan and complete the payment. Your premium features will be activated immediately after payment confirmation.'
    },
    {
      question: 'What happens if I cancel my subscription?',
      answer: 'If you cancel your subscription, you will continue to have access to Spici+ features until the end of your current billing period. After that, your account will revert to the free tier, and premium features will be disabled.'
    },
    {
      question: 'Is my data private?',
      answer: 'Yes, your privacy is our top priority. All conversations are encrypted and stored securely. We never share your personal information with third parties. You can read our Privacy Policy for more details.'
    },
    {
      question: 'How do I delete my account?',
      answer: 'To delete your account, go to Settings and scroll down to find the "Delete Account" button. Please note that account deletion is permanent and cannot be undone. All your data, conversations, and history will be permanently removed.'
    },
  ];

  const policies = [
    { text: 'Terms of Service', path: '#' },
    { text: 'Privacy Policy', path: '#' },
    { text: 'Content & Safety Guidelines', path: '#' },
  ];

  return (
    <div className="help-center-layout">
      <Header />
      <Sidebar />
      <main className="help-center-main">
        <div className="help-center-content">
          {/* Header */}
          <div className="help-center-header">
            <button className="help-center-back" onClick={() => navigate(-1)}>
              <FaArrowLeft />
            </button>
            <div className="help-center-title-wrapper">
              <h1 className="help-center-title">Help & Support</h1>
              <p className="help-center-subtitle">We're here to help you enjoy Spici safely.</p>
            </div>
          </div>

          {/* Report an Issue Section */}
          <div className="help-section">
            <div className="help-section__header">
              <FaFlag className="help-section__icon" />
              <h2 className="help-section__title">Report an Issue</h2>
            </div>
            <div className="help-section__list">
              {reportIssues.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className="help-section__item"
                    onClick={() => navigate(item.path)}
                  >
                    <div className="help-section__item-left">
                      <IconComponent className="help-section__item-icon" />
                      <span className="help-section__item-text">{item.text}</span>
                    </div>
                    <FaChevronRight className="help-section__item-arrow" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="help-section">
            <div className="help-section__header">
              <FaQuestionCircle className="help-section__icon" />
              <h2 className="help-section__title">Frequently Asked Questions</h2>
            </div>
            <div className="help-section__list">
              {faqs.map((faq, index) => (
                <div key={index} className="help-faq">
                  <div 
                    className="help-faq__question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="help-faq__question-text">{faq.question}</span>
                    {expandedFAQ === index ? (
                      <FaChevronDown className="help-faq__arrow" />
                    ) : (
                      <FaChevronRight className="help-faq__arrow" />
                    )}
                  </div>
                  {expandedFAQ === index && (
                    <div className="help-faq__answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="help-section">
            <div className="help-section__header">
              <FaEnvelope className="help-section__icon" />
              <h2 className="help-section__title">Contact Us</h2>
            </div>
            <div className="help-section__list">
              <div className="help-section__item">
                <div className="help-section__item-left">
                  <FaEnvelope className="help-section__item-icon" />
                  <div className="help-section__item-content">
                    <span className="help-section__item-text">Email Support</span>
                    <span className="help-section__item-subtext">support@spici.ai</span>
                  </div>
                </div>
              </div>
              <div className="help-section__item help-section__item--disabled">
                <div className="help-section__item-left">
                  <FaComments className="help-section__item-icon" />
                  <div className="help-section__item-content">
                    <span className="help-section__item-text">Chat with Support</span>
                    <span className="help-section__item-subtext">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policies & Guidelines */}
          <div className="help-section">
            <div className="help-section__header">
              <FaFileAlt className="help-section__icon" />
              <h2 className="help-section__title">Policies & Guidelines</h2>
            </div>
            <div className="help-section__list">
              {policies.map((policy, index) => (
                <div 
                  key={index} 
                  className="help-section__item help-section__item--link"
                  onClick={() => navigate(policy.path)}
                >
                  <div className="help-section__item-left">
                    <FaFileAlt className="help-section__item-icon" />
                    <span className="help-section__item-text">{policy.text}</span>
                  </div>
                  <FaExternalLinkAlt className="help-section__item-arrow" />
                </div>
              ))}
            </div>
          </div>

          {/* Emergency & Safety */}
          <div className="help-section">
            <div className="help-section__header">
              <FaShieldAlt className="help-section__icon" />
              <h2 className="help-section__title">Emergency & Safety</h2>
            </div>
            <div className="help-safety-box">
              <p className="help-safety-box__text">
                If you ever feel uncomfortable, please stop the chat and report the message immediately. 
                Spici.ai is a fictional experience designed for adults only.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
