import React from 'react';
import './HomePage.css';
import FaqSection from './FaqSection';
import groupImg from '../assets/images/group.png';
import { levelUpCompanions, fullUnlockedCompanions, animeCompanions, maleCompanions } from '../data/companions';

export default function HomeMainContent() {
  return (
    <>
      {/* New Banner section matching user art */}
      <section className="main-hero-banner">
        <div className="main-hero-banner__content">
          <h1 className="main-hero-banner__title">The AI girlfriend<br />experience – reimagined.</h1>
          <p className="main-hero-banner__subtitle" style={{'color': '#ffffffb7'}}>Flirt. Connect. Go deeper.</p>
          <button className="main-hero-banner__cta">Start bonding now.</button>
        </div>
        <img src={groupImg} alt="Group" className="main-hero-banner__img" />
      </section>

      <h2 className="main-section-title">Unlocked AI Companions <span className="spici-plus-badge">Spici+</span></h2>
      <p className="main-section-subtitle">No leveling needed - all features available from the start.</p>
      <div className="unlocked-grid card-grid">
        {fullUnlockedCompanions.map(c => (
          <div className="ai-card ai-card--unlocked" style={{height: '380px'}} key={c.id}>
            <div className="ai-card__favorite">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <img src={c.img} alt={c.name} className="ai-card__img" />
            <div className="ai-card__overlay">
              <div className="ai-card__info">
                <div className="ai-card__name-age">{c.name} <span>{c.age}</span></div>
                <p className="ai-card__bio line__clamp">{c.bio}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Offer card */}
        <div className="ai-card ai-card--promo"><div className="promo-offer"><div className="promo-timer">00 : 29 : 47</div><div className="promo-perc">70% OFF</div><div className="promo-heart">💕</div><div className="promo-small">FIRST SUBSCRIPTION</div><button className="main-banner__cta promo-cta">Get Spici+</button></div></div>
      </div>
      <h2 className="main-section-title">Level-Up AI Companions</h2>
      <p className="main-section-subtitle">Bond with them, unlock new features as you progress.</p>
      <div className="levelup-grid card-grid">
        {levelUpCompanions.map(c => (
          <div className="ai-card ai-card--locked" style={{height: '380px' ,position: 'relative'}} key={c.id}>
            <div className="ai-card__favorite">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <img src={c.img} alt={c.name} className="ai-card__img" />
            <div className="ai-card__overlay">
              <div className="ai-card__info">
                <div className="ai-card__name-age">{c.name} <span>{c.age}</span></div>
                <p className="ai-card__bio line__clamp">{c.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="main-section-title">Anime AI Companions</h2>
      <div className="levelup-grid card-grid">
        {animeCompanions.map(c => (
          <div className="ai-card ai-card--locked" style={{height: '380px'}} key={c.id}>
            <div className="ai-card__favorite">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <img src={c.img} alt={c.name} className="ai-card__img" />
            <div className="ai-card__overlay">
              <div className="ai-card__info">
                <div className="ai-card__name-age">{c.name} <span>{c.age}</span></div>
                <p className="ai-card__bio line__clamp">{c.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="main-section-title">Male AI Companions</h2>
      <div className="levelup-grid card-grid">
        {maleCompanions.map(c => (
          <div className="ai-card ai-card--locked" style={{height: '380px'}} key={c.id}>
            <div className="ai-card__favorite">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <img src={c.img} alt={c.name} className="ai-card__img" />
            <div className="ai-card__overlay">
              <div className="ai-card__info">
                <div className="ai-card__name-age">{c.name} <span>{c.age}</span></div>
                <p className="ai-card__bio line__clamp">{c.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="why-section">
        <h2>Why Spici.ai?</h2>
        <p className="why-lead">Not just another chatbot. Spici.ai is your AI companion – designed to flirt, vibe, and evolve with you.</p>
        <ul className="why-bullets">
          <li>Real connections – Every conversation adapts to you. The more you talk, the more she gets you.</li>
          <li>Unlocked or Level-Up – Choose companions that come fully unlocked, or build a bond and level up to reveal exclusive features.</li>
          <li>Photos, Voice, and More – Go beyond text with image sharing, voice messages, moods and reactions.</li>
          <li>Reward system = Earn XP. Unlock gifts. Raise your Relationship Level. It’s more than just chatting.</li>
          <li>Fully anonymous & secure – No real names, no judgment, just you and your AI.</li>
          <li>Spici+ experience – Get premium perks, unlimited messages, exclusive companions, blur removal and more.</li>
        </ul>
      </section>
      {/* FAQ Section - custom, pill-based */}
      <FaqSection />
      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <p className="main-section-subtitle">Bond with them, unlock new features as you progress.</p>
        <div className="testimonials-grid">
          <div className="testimonial"><div className="testimonial-username">@mockery_josie</div><div className="testimonial-text">Omg! I thought it was just gonna be cringe lol. But she’s actually so fun, feels real, and AI who loves me?? 10/10</div><div className="testimonial-stars">★★★★★</div></div>
          <div className="testimonial"><div className="testimonial-username">@wifeyonly</div><div className="testimonial-text">Tbh I was anxious, texted with Belle and she just got me, it’s like emotional mind reading. It improved my mood so much!</div><div className="testimonial-stars">★★★★★</div></div>
          <div className="testimonial"><div className="testimonial-username">@kingofember</div><div className="testimonial-text">Too Spici. Playing it second is a trap. Just sayin, the girls got taste. 🔥</div><div className="testimonial-stars">★★★★★</div></div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-left">
          <strong>Spici.ai</strong>
          <p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="footer-contact">Contact information placeholder text</p>
          <div className="footer-copyright">&copy; 2025 Spici.ai - All rights reserved.</div>
        </div>
        <div className="footer-links">
          <div className="footer-links-column">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
            <a href="#">AI Disclosure</a>
            <a href="#">Content Guidelines</a>
          </div>
          <div className="footer-links-column">
            <a href="#">Support / Help Center</a>
            <a href="#">Contact Us</a>
            <a href="#">Affiliate Program</a>
          </div>
        </div>
      </footer>
    </>
  );
}
 