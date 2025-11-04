import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Header from './Header';
import SpiciReactivationModal from './SpiciReactivationModal';
import './PlanPage.css';
import img904 from '../assets/images/904.png';
import img905 from '../assets/images/905.png';
import img906 from '../assets/images/906.png';
import img907 from '../assets/images/907.png';
import image from '../assets/images/image 3.png';

const chatImages = [img904, img905, img906, img907];

const plans = [
  { id: 1, name: '1 Month', price: '$19.99', billed: '$119.88', discount: '35% off' },
  { id: 2, name: '3 Months', price: '$14.99', billed: '$119.88', discount: '50% off', popular: true },
  { id: 3, name: '12 Months', price: '$9.99', billed: '$119.88', discount: '70% off', best: true },
];

const benefits = [
  'Relationship Meter',
  'AI Girlfriend Creation',
  'Image Generation',
  'AI Phone Calls',
  'Unlimited Texts',
  'Token Rewards',
  'Blur Removal',
];

export default function PlanPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [selectedPlan, setSelectedPlan] = useState(3);
  const [showSpiciReactivation, setShowSpiciReactivation] = useState(false);

  const handleSpiciClick = () => {
    setShowSpiciReactivation(true);
  };

  return (
    <div className="plan-layout">
      <Header />
      <Sidebar onSpiciClick={handleSpiciClick} />
      <main className="plan-main">
        <div className="plan-content">
          <h1 className="plan-title">Choose Your Plan</h1>
          <p className="plan-subtitle">100% Anonymous. You can cancel anytime.</p>

          <div className="plan-wrapper">
            {/* Featured Image Section */}
            <div className="plan-featured">
              <div className="plan-featured__image">
                <img src={image} alt="Featured" />
                <div className="plan-featured__overlay">
                  <div className="plan-featured__badge" style={{color: '#F32A5D'}}>Get an Exclusive Discount Only Today!</div>
                  <div className="plan-featured__text">Up to 70% off for first subscription.</div>
                </div>
              </div>
            </div>

            {/* Plans Section */}
            <div className="plan-options">
              {plans.map(plan => (
                <div
                  key={plan.id}
                  className={`plan-card ${selectedPlan === plan.id ? 'plan-card--selected' : ''} ${plan.best ? 'plan-card--best' : ''}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.best && <div className="plan-card__badge">Best Value</div>}
                  {plan.popular && <div className="plan-card__popular">Most Popular</div>}
                  <div className="plan-card__discount">{plan.discount}</div>
                  <h3 className="plan-card__name">{plan.name}</h3>
                  <div className="plan-card__price">{plan.price} <span style={{color: '#9CA3AF', fontSize: '20px'}}>/month</span></div>
                  <div className="plan-card__billed">Billed as {plan.billed}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="plan-payment">
            <button
              className={`plan-payment__btn ${paymentMethod === 'card' ? 'plan-payment__btn--active' : ''}`}
              style={{ flex: '1' }}
              onClick={() => setPaymentMethod('card')}
            >
              Pay with Card
            </button>
            <button
              style={{ flex: '1' }}
              className={`plan-payment__btn plan-payment__btn--crypto ${paymentMethod === 'crypto' ? 'plan-payment__btn--active' : ''}`}
              onClick={() => setPaymentMethod('crypto')}
            >
              Pay with Crypto
            </button>
          </div>

          {/* Premium Benefits */}
          <div className="plan-benefits">
            <h2 className="plan-benefits__title">Premium Benefits</h2>
            <div className="plan-benefits__list">
              {benefits.map((benefit, index) => (
                <div key={index} className="plan-benefit">
                  <FaCheck className="plan-benefit__icon" />
                  <span className="plan-benefit__text">{benefit}</span>
                </div>
              ))}
            </div>
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

