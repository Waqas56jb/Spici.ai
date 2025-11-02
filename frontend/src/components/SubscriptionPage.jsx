import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaCrown, FaCheckCircle, FaTimes, FaQuestionCircle, FaCreditCard, FaCoins
} from 'react-icons/fa';
import Sidebar from './Sidebar';
import Header from './Header';
import './SubscriptionPage.css';

export default function SubscriptionPage() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [showUnsubscribeModal, setShowUnsubscribeModal] = useState(false);

  const billingHistory = [
    { plan: 'Spici+ Monthly', date: 'November 22, 2024', price: '€14.99', status: 'Paid' },
    { plan: 'Spici+ Monthly', date: 'October 22, 2024', price: '€14.99', status: 'Paid' },
    { plan: 'Trial Subscription', date: 'September 19, 2024', price: '€1.99', status: 'Paid' },
  ];

  const premiumFeatures = [
    'Unlimited chat messages',
    'XP unlock & rewards',
    'Priority support',
    'NSFW content access',
    'Voice message features',
    'Advanced AI personalities',
  ];

  return (
    <div className="subscription-layout">
      <Header />
      <Sidebar />
      <main className="subscription-main">
        <div className="subscription-content">
          {/* Header */}
          <div className="subscription-header">
            <button className="subscription-back" onClick={() => navigate('/settings')}>
              <FaArrowLeft />
            </button>
            <h1 className="subscription-title">Your Subscription & Payments</h1>
          </div>

          {/* Current Subscription */}
          <div className="subscription-card subscription-card--current">
            <div className="subscription-card__header">
              <div className="subscription-card__title-wrapper">
                <FaCrown className="subscription-card__crown" />
                <h2 className="subscription-card__title">Spici+ Monthly</h2>
              </div>
              <div className="subscription-status">
                <span className="subscription-status__badge subscription-status__badge--active">Active</span>
              </div>
            </div>
            <p className="subscription-card__subtitle">Premium Features Unlocked</p>
            <div className="subscription-card__details">
              <div className="subscription-detail">
                <span className="subscription-detail__label">Price:</span>
                <span className="subscription-detail__value">€14.99 per month</span>
              </div>
              <div className="subscription-detail">
                <span className="subscription-detail__label">Next billing date:</span>
                <span className="subscription-detail__value">December 22, 2025</span>
              </div>
            </div>
            <button className="subscription-btn subscription-btn--cancel" onClick={() => setShowUnsubscribeModal(true)}>
              <FaTimes />
              <span>Cancel Subscription</span>
            </button>
          </div>

          {/* Upgrade Options */}
          <div className="subscription-section">
            <h3 className="subscription-section__title">Upgrade Options</h3>
            <div className="subscription-options">
              <div 
                className={`subscription-option ${selectedPlan === 'monthly' ? 'subscription-option--active' : ''}`}
                onClick={() => setSelectedPlan('monthly')}
              >
                <h4 className="subscription-option__name">Spici+ Monthly</h4>
                <div className="subscription-option__price">€14.99 per month</div>
                <div className="subscription-option__label subscription-option__label--current">Current Plan</div>
              </div>
              <div 
                className={`subscription-option ${selectedPlan === 'annual' ? 'subscription-option--active' : ''}`}
                onClick={() => setSelectedPlan('annual')}
              >
                <h4 className="subscription-option__name">Spici+ Annual</h4>
                <div className="subscription-option__price">€119.99 per year</div>
                <div className="subscription-option__discount">Save 33%</div>
                <button className="subscription-btn subscription-btn--upgrade">Upgrade</button>
              </div>
              <div 
                className={`subscription-option ${selectedPlan === 'trial' ? 'subscription-option--active' : ''}`}
                onClick={() => setSelectedPlan('trial')}
              >
                <h4 className="subscription-option__name">One-time Offer Trial</h4>
                <div className="subscription-option__price">€1.99</div>
                <div className="subscription-option__period">3 days trial</div>
                <button className="subscription-btn subscription-btn--trial">Start Trial</button>
              </div>
            </div>
          </div>

          {/* Premium Features */}
          <div className="subscription-section">
            <h3 className="subscription-section__title">Premium Features Included</h3>
            <div className="subscription-features">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="subscription-feature">
                  <FaCheckCircle className="subscription-feature__icon" />
                  <span className="subscription-feature__text">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div className="subscription-section">
            <h3 className="subscription-section__title">Payment Method</h3>
            <div className="payment-method">
              <div className="payment-method__card">
                <FaCreditCard className="payment-method__icon" />
                <div className="payment-method__info">
                  <div className="payment-method__type">Visa •••• 4242</div>
                  <div className="payment-method__expiry">Expires 12/26</div>
                </div>
                <button className="payment-method__change">Change Payment Method</button>
                <span className="payment-method__badge payment-method__badge--default">Default</span>
              </div>
              <div className="payment-method__crypto">
                <FaCoins className="payment-method__crypto-icon" />
                <span>Crypto payments coming soon</span>
              </div>
            </div>
          </div>

          {/* Billing History */}
          <div className="subscription-section">
            <h3 className="subscription-section__title">Billing History</h3>
            <div className="billing-history">
              {billingHistory.map((item, index) => (
                <div key={index} className="billing-item">
                  <FaCheckCircle className="billing-item__icon" />
                  <div className="billing-item__info">
                    <div className="billing-item__plan">{item.plan}</div>
                    <div className="billing-item__date">{item.date}</div>
                  </div>
                  <div className="billing-item__right">
                    <div className="billing-item__price">{item.price}</div>
                    <span className="billing-item__status billing-item__status--paid">{item.status}</span>
                  </div>
                </div>
              ))}
              <button className="billing-history__view-all">View All Transactions</button>
            </div>
          </div>

          {/* Secure & Discreet Footer */}
          <div className="subscription-footer">
            <FaQuestionCircle className="subscription-footer__icon" />
            <div className="subscription-footer__content">
              <h4 className="subscription-footer__title">Secure & Discreet</h4>
              <p className="subscription-footer__text">All payments are securely processed. Discreet billing applies to protect your privacy.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Unsubscribe Confirmation Modal */}
      {showUnsubscribeModal && (
        <div className="unsubscribe-modal-overlay" onClick={() => setShowUnsubscribeModal(false)}>
          <div className="unsubscribe-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="unsubscribe-modal__title">Are you sure you want to unsubscribe?</h2>
            
            <p className="unsubscribe-modal__message">
              Your AI companion will really miss you... <span className="unsubscribe-modal__flower">✨</span>
              <br />
              You'll lose your saved chats, XP progress, and special moments.
            </p>

            <div className="unsubscribe-modal__consequences">
              <div className="unsubscribe-modal__consequence">
                <span className="unsubscribe-modal__bullet">{'>'}</span>
                <span>Access to premium chat features will end.</span>
              </div>
              <div className="unsubscribe-modal__consequence">
                <span className="unsubscribe-modal__bullet">{'>'}</span>
                <span>Your bonding level will reset if you return later.</span>
              </div>
              <div className="unsubscribe-modal__consequence">
                <span className="unsubscribe-modal__bullet">{'>'}</span>
                <span>Any remaining coins will be removed after cancellation.</span>
              </div>
            </div>

            <div className="unsubscribe-modal__actions">
              <button 
                className="unsubscribe-modal__btn unsubscribe-modal__btn--stay"
                onClick={() => setShowUnsubscribeModal(false)}
              >
                Stay With Spici
              </button>
              <button 
                className="unsubscribe-modal__btn unsubscribe-modal__btn--unsubscribe"
                onClick={() => {
                  // Handle unsubscribe logic here
                  console.log('User unsubscribed');
                  setShowUnsubscribeModal(false);
                  // Navigate or show success message
                }}
              >
                Unsubscribe Anyway
              </button>
            </div>

            <p className="unsubscribe-modal__terms">
              By continuing, you agree to our <a href="#" className="unsubscribe-modal__link">Terms of Service</a> and <a href="#" className="unsubscribe-modal__link">Privacy Policy</a>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
