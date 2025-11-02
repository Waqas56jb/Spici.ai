import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaCoins, FaCheckCircle, FaTimes
} from 'react-icons/fa';
import Sidebar from './Sidebar';
import Header from './Header';
import './GiftsCoinsPage.css';
import groupImg from '../assets/images/group.png';

export default function GiftsCoinsPage() {
  const navigate = useNavigate();
  const [selectedPack, setSelectedPack] = useState(null);

  const benefits = [
    { text: 'Boost your', bold: 'Bonding level', suffix: 'instantly' },
    { text: 'Unlock', bold: 'exclusive features', suffix: 'and content' },
    { text: 'Show appreciation and stand out from the crowd' },
    { text: 'Earn XP and climb the', bold: 'relationship meter' },
  ];

  const coinPacks = [
    { id: 1, name: 'Tiny Tease', coins: 300, bonus: 0, price: 2.99, currency: '€' },
    { id: 2, name: 'Starter Start', coins: 700, bonus: 35, price: 6.99, currency: '€' },
    { id: 3, name: 'Spici Crush', coins: 1500, bonus: 150, price: 14.99, currency: '€' },
    { id: 4, name: 'Premium Pack', coins: 3000, bonus: 600, price: 29.99, currency: '€', bestValue: true },
    { id: 5, name: 'Obsession Pack', coins: 6000, bonus: 1800, price: 59.99, currency: '€' },
    { id: 6, name: 'Ultra Pack', coins: 10000, bonus: 4000, price: 99.99, currency: '€' },
  ];

  const handlePurchase = (packId) => {
    setSelectedPack(packId);
    // Handle purchase logic here
    console.log('Purchasing pack:', packId);
  };

  return (
    <div className="gifts-coins-layout">
      <Header />
      <Sidebar />
      <main className="gifts-coins-main">
        <div className="gifts-coins-content">
          {/* Top Banner */}
          <div className="gifts-coins-banner">
            <div className="gifts-coins-banner__content">
              <div className="gifts-coins-banner__text">
                <h1 className="gifts-coins-banner__title">
                  Fuel the <span className="gifts-coins-banner__bold">spark</span>. Send gifts. Earn <span className="gifts-coins-banner__bold">connection</span>.
                </h1>
              </div>
              <div className="gifts-coins-banner__image">
                <img src={groupImg} alt="Women" className="gifts-coins-banner__img" />
              </div>
            </div>
          </div>

          {/* Bottom Content Panels */}
          <div className="gifts-coins-panels">
            {/* Left Panel - Benefits */}
            <div className="gifts-coins-panel gifts-coins-panel--benefits">
              <h2 className="gifts-coins-panel__title">Benefits of Gifting</h2>
              <ul className="gifts-coins-benefits">
                {benefits.map((benefit, index) => (
                  <li key={index} className="gifts-coins-benefit">
                    <FaCheckCircle className="gifts-coins-benefit__icon" />
                    <span className="gifts-coins-benefit__text">
                      {benefit.text}
                      {benefit.bold && (
                        <>
                          {' '}<strong>{benefit.bold}</strong>
                        </>
                      )}
                      {benefit.suffix && ` ${benefit.suffix}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Panel - Coin Packs */}
            <div className="gifts-coins-panel gifts-coins-panel--packs">
              <h2 className="gifts-coins-panel__title">Coin Packs</h2>
              <div className="gifts-coins-packs">
                {coinPacks.map((pack) => (
                  <div
                    key={pack.id}
                    className={`gifts-coins-pack ${selectedPack === pack.id ? 'gifts-coins-pack--selected' : ''} ${pack.bestValue ? 'gifts-coins-pack--best-value' : ''}`}
                    onClick={() => handlePurchase(pack.id)}
                  >
                    {pack.bestValue && (
                      <div className="gifts-coins-pack__badge">Best Value</div>
                    )}
                    <div className="gifts-coins-pack__header">
                      <h3 className="gifts-coins-pack__name">{pack.name}</h3>
                    </div>
                    <div className="gifts-coins-pack__info">
                      <div className="gifts-coins-pack__coins">
                        <FaCoins className="gifts-coins-pack__coin-icon" />
                        <span className="gifts-coins-pack__amount">{pack.coins.toLocaleString()}</span>
                      </div>
                      {pack.bonus > 0 && (
                        <div className="gifts-coins-pack__bonus">
                          + {pack.bonus.toLocaleString()} Bonus
                        </div>
                      )}
                      {pack.bonus === 0 && (
                        <div className="gifts-coins-pack__bonus gifts-coins-pack__bonus--none">
                          + 0 Bonus
                        </div>
                      )}
                    </div>
                    <div className="gifts-coins-pack__price">
                      {pack.price.toFixed(2)}{pack.currency}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
