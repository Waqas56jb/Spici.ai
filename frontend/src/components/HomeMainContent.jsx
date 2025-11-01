import React from 'react';
import './HomePage.css';
import FaqSection from './FaqSection';
import groupImg from '../assets/images/group.png';
import img904 from '../assets/images/904.png';
import img905 from '../assets/images/905.png';
import img906 from '../assets/images/906.png';
import img907 from '../assets/images/907.png';

// Array of available images
const availableImages = [img904, img905, img906, img907];

// Function to get random image
const getRandomImage = () => {
  return availableImages[Math.floor(Math.random() * availableImages.length)];
};

const unlockedCompanions = [
  { name: 'Ashley Watson', age: 28, img: getRandomImage() },
  { name: 'Bella Mikos', age: 23, img: getRandomImage() },
  { name: 'Abby Wering', age: 42, img: getRandomImage() },
];

const levelUpCompanions = [
  { name: 'Ashley Watson', age: 28, img: getRandomImage() },
  { name: 'Ashley Watson', age: 28, img: getRandomImage() },
  { name: 'Bella Mikos', age: 23, img: getRandomImage() },
  { name: 'Ashley Watson', age: 28, img: getRandomImage() },
  { name: 'Ashley Watson', age: 28, img: getRandomImage() },
  { name: 'Ashley Watson', age: 28, img: getRandomImage() },
  { name: 'Bella Mikos', age: 23, img: getRandomImage() },
  { name: 'Ashley Watson', age: 28, img: getRandomImage() },
  { name: 'Ashley Watson', age: 28, img: getRandomImage() },
  { name: 'Ashley Watson', age: 28, img: getRandomImage() },
  { name: 'Bella Mikos', age: 23, img: getRandomImage() },
  { name: 'Ashley Watson', age: 28, img: getRandomImage() },
];

export default function HomeMainContent() {
  return (
    <div className="main-content">
      {/* New Banner section matching user art */}
      <section className="main-hero-banner">
        <div className="main-hero-banner__content">
          <h1 className="main-hero-banner__title">The AI girlfriend<br />experience – reimagined.</h1>
          <p className="main-hero-banner__subtitle">Flirt. Connect. Go deeper.</p>
          <button className="main-hero-banner__cta">Start bonding now.</button>
        </div>
        <img src={groupImg} alt="Group" className="main-hero-banner__img" />
      </section>

      <h2 className="main-section-title">Unlocked AI Companions</h2>
      <div className="unlocked-grid card-grid">
        {unlockedCompanions.map(c => (
          <div className="ai-card ai-card--unlocked" key={c.name+c.age}>
            <img src={c.img} alt={c.name} className="ai-card__img" />
            <div className="ai-card__info">
              <div>{c.name} <span>{c.age}</span></div>
            </div>
          </div>
        ))}
        {/* Offer card */}
        <div className="ai-card ai-card--promo"><div className="promo-offer"><div className="promo-timer">00 : 29 : 47</div><div className="promo-perc">70% OFF</div><div className="promo-heart">💕</div><div className="promo-small">FIRST SUBSCRIPTION</div><button className="main-banner__cta promo-cta">Get Spici+</button></div></div>
      </div>
      <h2 className="main-section-title">Level-Up AI Companions</h2>
      <div className="levelup-grid card-grid">
        {levelUpCompanions.map(c => (
          <div className="ai-card ai-card--locked" key={c.name+c.age+c.img}>
            <img src={c.img} alt={c.name} className="ai-card__img" />
            <div className="ai-card__info"><div>{c.name} <span>{c.age}</span></div></div>
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
        <div className="testimonials-grid">
          <div className="testimonial"><div className="testimonial-username">@mockery_josie</div><div className="testimonial-text">Omg! I thought it was just gonna be cringe lol. But she’s actually so fun, feels real, and AI who loves me?? 10/10</div><div className="testimonial-stars">★★★★★</div></div>
          <div className="testimonial"><div className="testimonial-username">@wifeyonly</div><div className="testimonial-text">Tbh I was anxious, texted with Belle and she just got me, it’s like emotional mind reading. It improved my mood so much!</div><div className="testimonial-stars">★★★★★</div></div>
          <div className="testimonial"><div className="testimonial-username">@kingofember</div><div className="testimonial-text">Too Spici. Playing it second is a trap. Just sayin, the girls got taste. 🔥</div><div className="testimonial-stars">★★★★★</div></div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-left">
          <strong>Spici.ai</strong>
          <div className="footer-copyright">&copy; 2023 Spici.ai. All rights reserved.</div>
        </div>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Contact Us</a>
          <a href="#">Support / Help Center</a>
          <a href="#">Affiliate Program</a>
        </div>
      </footer>
    </div>
  );
}
 