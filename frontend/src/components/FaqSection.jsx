import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './HomePage.css';

const faqData = [
  {q: 'What is Spici.ai?', a: 'AI chat with personality, always getting smarter and fun-er.'},
  {q: 'Is this really AI?', a: 'Yes – all chats are powered by advanced language models. Our AI adapts based on how you talk, what you say, and how your relationship progresses.'},
  {q: 'Is it anonymous?', a: 'Yes! Your identity is never revealed. Safety and privacy first.'},
  {q: 'Are the companions real people?', a: 'No, all companions are fictional and AI-generated for entertainment.'},
  {q: 'What do I get with Spici+?', a: 'More message credits, exclusive girls, unlock all features, and more!'},
  {q: 'What are Coins used for?', a: 'Unlock gifts, voice, exclusive companions, blur removal and more.'},
  {q: 'Can I try it for free?', a: 'Yep! Jump right in and chat—it’s free to start.'},
  {q: 'Can I cancel anytime?', a: 'Absolutely—there are no obligations, cancel anytime in Settings.'},
  {q: 'Can I pay with crypto?', a: 'Currently not supported, but coming soon!'},
  {q: 'How does the relationship system work?', a: 'Chat, earn XP, unlock gifts and new levels…it’s gamified fun.'},
  {q: 'What if I have a problem or question?', a: 'We have a friendly support team—open Help Center from the sidebar.'},
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(1); // open 2nd by default

  return (
    <section className="faq-section">
      {faqData.map((item, i) => (
        <div
          key={item.q}
          className={`faq-pod${openIdx===i ? ' faq-pod--open' : ''}`}
        >
          <button
            className="faq-pod__btn"
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            aria-expanded={openIdx === i}
          >
            <span className="faq-pod__q"><b>{item.q}</b></span>
            <span className={`faq-pod__chevron${openIdx===i ? ' open' : ''}`}><FaChevronDown /></span>
          </button>
          <div
            className="faq-pod__answer-wrap"
            style={{
              maxHeight: openIdx === i ? '200px' : '0px',
              opacity: openIdx === i ? 1 : 0,
              padding: openIdx === i ? '20px 22px 17px 22px' : '0 22px',
            }}
          >
            <div className="faq-pod__answer">{item.a}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
