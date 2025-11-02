import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaRocket, FaGem, FaGift, FaTrophy, FaCoins, FaShieldAlt, FaCheckCircle,
  FaPlus, FaMinus, FaMedal, FaCreditCard, FaCcVisa, FaCcMastercard,
  FaCcAmex, FaCcPaypal
} from 'react-icons/fa';
import Sidebar from './Sidebar';
import Header from './Header';
import './CoinsPage.css';

export default function CoinsPage() {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);

  const currentCoins = 1900;

  const features = [
    {
      icon: FaRocket,
      title: 'Unlock more challenges',
      description: 'Instantly access new levels.'
    },
    {
      icon: FaGem,
      title: 'Exclusive power-ups',
      description: 'Get unique badges & items.'
    },
    {
      icon: FaGift,
      title: 'Daily login bonuses',
      description: 'Earn rewards every day.'
    },
    {
      icon: FaTrophy,
      title: 'Keep your streak',
      description: 'Maintain your high level.'
    },
  ];

  const coinPackages = [
    {
      id: 1,
      coins: 100,
      bonus: 5,
      price: 0.99,
      icon: 'single',
      popular: false,
      bestValue: false
    },
    {
      id: 2,
      coins: 500,
      bonus: 30,
      price: 3.99,
      icon: 'stack',
      popular: false,
      bestValue: false
    },
    {
      id: 3,
      coins: 1200,
      bonus: 150,
      price: 9.99,
      icon: 'chest-open',
      popular: true,
      bestValue: false
    },
    {
      id: 4,
      coins: 5000,
      bonus: 600,
      price: 49.99,
      icon: 'chest-closed',
      popular: false,
      bestValue: true
    },
  ];

  const recentActivity = [
    { type: 'bought', icon: FaPlus, text: 'Bought 1,200 Coins', date: 'Oct 18, 2025', color: '#10b981' },
    { type: 'used', icon: FaMinus, text: 'Used 300 Coins', date: 'Oct 17, 2025', color: '#ef4444' },
    { type: 'bonus', icon: FaMedal, text: 'Streak Bonus: 50 Coins', date: 'Oct 16, 2025', color: '#fbbf24' },
  ];

  const handlePurchase = (packageId) => {
    setSelectedPackage(packageId);
    // Handle purchase logic here
    console.log('Purchasing package:', packageId);
  };

  return (
    <div className="coins-layout">
      <Header />
      <Sidebar />
      <main className="coins-main">
        <div className="coins-content">
          {/* Current Coins Display */}
          <div className="coins-banner">
            <div className="coins-banner__content">
              <span className="coins-banner__text">You have</span>
              <FaCoins className="coins-banner__icon" />
              <span className="coins-banner__amount">{currentCoins.toLocaleString()} Coins</span>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="coins-features">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="coins-feature-card">
                  <IconComponent className="coins-feature-card__icon" />
                  <h3 className="coins-feature-card__title">{feature.title}</h3>
                  <p className="coins-feature-card__description">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Coin Purchase Options */}
          <div className="coins-packages">
            {coinPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`coins-package ${pkg.popular ? 'coins-package--popular' : ''} ${pkg.bestValue ? 'coins-package--best-value' : ''} ${selectedPackage === pkg.id ? 'coins-package--selected' : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="coins-package__badge coins-package__badge--popular">Most Popular</div>
                )}
                {pkg.bestValue && (
                  <div className="coins-package__badge coins-package__badge--best-value">Best Value</div>
                )}
                
                <div className="coins-package__icon-wrapper">
                  {pkg.icon === 'single' && <FaCoins className="coins-package__icon coins-package__icon--single" />}
                  {pkg.icon === 'stack' && (
                    <div className="coins-package__icon-stack">
                      <FaCoins className="coins-package__icon" />
                      <FaCoins className="coins-package__icon" />
                      <FaCoins className="coins-package__icon" />
                    </div>
                  )}
                  {pkg.icon === 'chest-open' && (
                    <div className="coins-package__icon-chest coins-package__icon-chest--open">
                      <FaCoins className="coins-package__icon" />
                      <FaCoins className="coins-package__icon" />
                      <FaCoins className="coins-package__icon" />
                    </div>
                  )}
                  {pkg.icon === 'chest-closed' && (
                    <div className="coins-package__icon-chest coins-package__icon-chest--closed">
                      <FaCoins className="coins-package__icon" />
                    </div>
                  )}
                </div>
                
                <div className="coins-package__info">
                  <div className="coins-package__amount">
                    {pkg.coins.toLocaleString()} Coins
                    {pkg.bonus > 0 && (
                      <span className="coins-package__bonus"> + {pkg.bonus} Bonus</span>
                    )}
                  </div>
                  <div className="coins-package__price">${pkg.price.toFixed(2)}</div>
                </div>
                
                <button 
                  className="coins-package__button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/gifts-coins');
                  }}
                >
                  Purchase
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Sections */}
          <div className="coins-bottom">
            {/* Secure Payment Section */}
            <div className="coins-section coins-section--payment">
              <h3 className="coins-section__title">Secure Payment</h3>
              <div className="coins-section__content">
                <div className="coins-payment-info">
                  <FaShieldAlt className="coins-payment-info__icon" />
                  <div className="coins-payment-info__text">
                    <span className="coins-payment-info__title">256-bit SSL encryption</span>
                    <span className="coins-payment-info__subtitle">Your payment information is secure</span>
                  </div>
                </div>
                <div className="coins-payment-methods">
                  <FaCcVisa className="coins-payment-method" />
                  <FaCcMastercard className="coins-payment-method" />
                  <FaCcAmex className="coins-payment-method" />
                  <FaCcPaypal className="coins-payment-method" />
                </div>
              </div>
            </div>

            {/* Recent Activity Section */}
            <div className="coins-section coins-section--activity">
              <h3 className="coins-section__title">Recent Activity</h3>
              <div className="coins-section__content">
                <div className="coins-activity-list">
                  {recentActivity.map((activity, index) => {
                    const IconComponent = activity.icon;
                    return (
                      <div key={index} className="coins-activity-item">
                        <IconComponent className="coins-activity-item__icon" style={{ color: activity.color }} />
                        <div className="coins-activity-item__content">
                          <span className="coins-activity-item__text">{activity.text}</span>
                          <span className="coins-activity-item__date">{activity.date}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
