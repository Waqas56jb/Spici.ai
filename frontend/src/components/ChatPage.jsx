import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaSearch, FaComments, FaUser, FaStar, FaGem, FaUsers, FaQuestionCircle, FaCog, FaVideo, FaInfoCircle, FaGift, FaPaperPlane, FaCoins, FaGlobe, FaTimes, FaLock, FaCrown, FaChartLine, FaMicrophone, FaPlane, FaVolumeUp, FaSmile } from 'react-icons/fa';
import { FaFire } from 'react-icons/fa';
import Sidebar from './Sidebar';
import img904 from '../assets/images/904.png';
import img905 from '../assets/images/905.png';
import img906 from '../assets/images/906.png';
import img907 from '../assets/images/907.png';
import './ChatPage.css';

const chatImages = [img904, img905, img906, img907];

const conversations = [
  { id: 1, name: 'Olivia', lastMessage: "I'm doing great, thanks!", time: 'Now', unread: 1, avatar: chatImages[0], online: true },
  { id: 2, name: 'Sophia', lastMessage: "Hey, how's your day going?", time: '2m', unread: 0, avatar: chatImages[1], online: false },
  { id: 3, name: 'Emma', lastMessage: 'Just finished a great book. A...', time: '15m', unread: 0, avatar: chatImages[2], online: true },
  { id: 4, name: 'Isabella', lastMessage: "I'm planning a trip to the coa...", time: '1h', unread: 0, avatar: chatImages[3], online: false },
  { id: 5, name: 'Mia', lastMessage: "I'm trying out a new recipe t...", time: '2h', unread: 0, avatar: chatImages[0], online: true },
];

const messages = [
  { id: 1, sender: 'user', text: "Hey Olivia, I'm looking for some advice on planning a surprise birthday party for my best friend. Any ideas?", time: '10:30' },
  { id: 2, sender: 'ai', text: "Hi there! How are you today?", avatar: chatImages[0], time: '10:32' },
  { id: 3, sender: 'ai', text: "That sounds exciting! Tell me a bit about your friend. What are their interests and hobbies?", avatar: chatImages[0], time: '10:34' },
];

export default function ChatPage() {
  const navigate = useNavigate();
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageText, setMessageText] = useState('');
  const [showConversations, setShowConversations] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSpiciModal, setShowSpiciModal] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [contentAgreed, setContentAgreed] = useState(false);
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [selectedGift, setSelectedGift] = useState(null);
  const [showGiftNotification, setShowGiftNotification] = useState(true);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText.trim()) {
      // Handle message sending
      setMessageText('');
    }
  };

  const handleGiftClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Close Spici modal if open
    if (showSpiciModal) {
      setShowSpiciModal(false);
    }
    setShowGiftModal(true);
  };

  const handleSendGift = (giftId, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Sending gift:', giftId);
    // Here you would normally send the gift via API
    setShowGiftModal(false);
    setShowGiftNotification(true);
    // Auto-hide notification after 5 seconds
    setTimeout(() => setShowGiftNotification(false), 5000);
  };

  return (
    <div className="chat-layout">
      {/* Mobile Overlay */}
      {(showConversations || showProfile) && (
        <div 
          className="chat-overlay chat-overlay--active"
          onClick={() => {
            setShowConversations(false);
            setShowProfile(false);
          }}
        />
      )}

      {/* Top Header */}
      <header className="chat-header">
        <div className="chat-header__logo" onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>
          <FaFire className="chat-header__logo-icon" />
          <span className="chat-header__logo-text">Spici.ai</span>
        </div>
        <nav className="chat-header__nav">
          <span 
            className="chat-header__nav-link" 
            onClick={() => {/* Filter by Girls */}}
            style={{ cursor: 'pointer' }}
          >
            Girls
          </span>
          <span 
            className="chat-header__nav-link chat-header__nav-link--active" 
            onClick={() => {/* Filter by Anime */}}
            style={{ cursor: 'pointer' }}
          >
            Anime
          </span>
          <span 
            className="chat-header__nav-link" 
            onClick={() => {/* Filter by Guys */}}
            style={{ cursor: 'pointer' }}
          >
            Guys
          </span>
        </nav>
        <div className="chat-header__actions">
          <div className="chat-header__coins" onClick={() => navigate('/coins')} style={{ cursor: 'pointer' }}>
            <FaCoins className="chat-header__coins-icon" />
            <span>1900</span>
          </div>
          <button className="chat-header__plan" onClick={() => navigate('/plan')}>Become Spici+</button>
          <div className="chat-header__profile" onClick={() => navigate('/settings')} style={{ cursor: 'pointer' }}>
            <img src={chatImages[1]} alt="Profile" />
          </div>
        </div>
      </header>

      {/* Left Icon Sidebar */}
      <aside className="chat-sidebar">
        <button 
          className="chat-sidebar__hamburger"
          onClick={() => setShowConversations(!showConversations)}
        >
          <FaBars />
        </button>
        <div 
          className="chat-sidebar__avatar" 
          onClick={() => navigate('/profile')}
          style={{ cursor: 'pointer' }}
        >
          <img src={chatImages[0]} alt="User" />
        </div>
        <nav className="chat-sidebar__nav">
          <button className="chat-sidebar__icon" onClick={() => navigate('/home')}><FaGlobe /></button>
          <button className="chat-sidebar__icon chat-sidebar__icon--active" onClick={() => navigate('/chat')}><FaComments /></button>
          <button className="chat-sidebar__icon" onClick={() => navigate('/profile')}><FaUser /></button>
          <button className="chat-sidebar__icon" onClick={() => navigate('/favourites')}><FaStar /></button>
          <button className="chat-sidebar__icon chat-sidebar__icon--gem" onClick={() => navigate('/plan')}><FaGem /></button>
        </nav>
        <div className="chat-sidebar__bottom">
          <button className="chat-sidebar__icon" onClick={() => navigate('/home')} title="Affiliate"><FaUsers /></button>
          <button className="chat-sidebar__icon" onClick={() => navigate('/help-center')} title="Help Center"><FaQuestionCircle /></button>
          <button className="chat-sidebar__icon" onClick={() => navigate('/settings')} title="Settings"><FaCog /></button>
          <button className="chat-sidebar__icon" onClick={() => navigate('/help-center')} title="FAQ"><FaQuestionCircle /></button>
        </div>
      </aside>

      {/* Conversation List */}
      <aside className={`chat-conversations ${showConversations ? 'chat-conversations--open' : ''}`}>
        <div className="chat-conversations__search">
          <FaSearch className="chat-conversations__search-icon" />
          <input type="text" placeholder="Q Search conversations" />
        </div>
        <div className="chat-conversations__list">
          {conversations.map(conv => (
            <div
              key={conv.id}
              className={`chat-conversation ${selectedConversation.id === conv.id ? 'chat-conversation--active' : ''}`}
              onClick={() => {
                setSelectedConversation(conv);
                setShowConversations(false);
              }}
            >
              <div className="chat-conversation__avatar">
                <img src={conv.avatar} alt={conv.name} />
                {conv.online && <span className="chat-conversation__online"></span>}
              </div>
              <div className="chat-conversation__content">
                <div className="chat-conversation__header">
                  <span className="chat-conversation__name">{conv.name}</span>
                  <span className="chat-conversation__time">{conv.time}</span>
                </div>
                <div className="chat-conversation__message">{conv.lastMessage}</div>
              </div>
              {conv.unread > 0 && (
                <span className="chat-conversation__badge">{conv.unread}</span>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Chat Window */}
      <main className="chat-main">
        <div className="chat-main__header">
          <div className="chat-main__user">
            <button 
              className="chat-main__back-btn" 
              onClick={() => setShowConversations(true)}
            >
              ←
            </button>
            <div className="chat-main__user-avatar" onClick={() => setShowProfile(!showProfile)}>
              <img src={selectedConversation.avatar} alt={selectedConversation.name} />
              {selectedConversation.online && <span className="chat-main__online"></span>}
            </div>
            <div className="chat-main__user-info">
              <span className="chat-main__user-name">{selectedConversation.name}</span>
              <span className="chat-main__user-status">Online</span>
            </div>
          </div>
          <div className="chat-main__actions">
            <div className="chat-main__flame">
              <FaFire />
              <div className="chat-main__progress">
                <div className="chat-main__progress-bar"></div>
              </div>
              <FaGift className="chat-main__gift-icon" />
            </div>
            <button className="chat-main__action-btn" onClick={() => {/* Handle volume */}} title="Volume"><FaVolumeUp /></button>
          </div>
        </div>

        <div className="chat-main__messages">
          {showGiftNotification && (
            <div className="chat-gift-notification">
              <FaGift className="chat-gift-notification__icon" />
              <span className="chat-gift-notification__text">Gift sent successfully!</span>
              <div className="chat-gift-notification__xp">
                <FaStar className="chat-gift-notification__star" />
                <span>+7 XP</span>
              </div>
              <div className="chat-gift-notification__mood">
                <FaSmile className="chat-gift-notification__smile" />
                <span>Happy</span>
              </div>
              <button 
                className="chat-gift-notification__close" 
                onClick={() => setShowGiftNotification(false)}
              >
                <FaTimes />
              </button>
            </div>
          )}
          {messages.map(msg => {
            if (msg.type === 'locked-image') {
              return (
                <div key={msg.id} className="chat-message chat-message--locked">
                  <img src={msg.avatar} alt="AI" className="chat-message__avatar" />
                  <div className="chat-message__locked-image">
                    <div className="chat-message__locked-overlay">
                      <FaLock className="chat-message__locked-icon" />
                      <p className="chat-message__locked-text">She sent you something special...</p>
                      <button className="chat-message__locked-btn" onClick={() => setShowSpiciModal(true)}>
                        Get Spici+ to reveal it
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <div key={msg.id} className={`chat-message chat-message--${msg.sender}`}>
                {msg.sender === 'ai' && (
                  <img src={msg.avatar} alt="AI" className="chat-message__avatar" />
                )}
                {msg.sender === 'user' && (
                  <img src={chatImages[1]} alt="User" className="chat-message__avatar" />
                )}
                <div className="chat-message__bubble">
                  <p className="chat-message__text">{msg.text}</p>
                  <span className="chat-message__time">{msg.time}</span>
                </div>
              </div>
            );
          })}
        </div>

        <form className="chat-main__input" onSubmit={handleSendMessage}>
          <button type="button" className="chat-main__input-icon" onClick={handleGiftClick}><FaGift /></button>
          <div className="chat-main__input-wrapper">
            <input
              type="text"
              placeholder="Type a message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            <button type="submit" className="chat-main__send-btn">
              <FaPaperPlane />
              <span>Send</span>
            </button>
          </div>
        </form>
      </main>

      {/* Profile Panel */}
      <aside className={`chat-profile ${showProfile ? 'chat-profile--open' : ''}`}>
        <div className="chat-profile__header">
          <h3 className="chat-profile__title">Profile</h3>
          <button className="chat-profile__menu" onClick={() => setShowProfile(false)}>×</button>
        </div>
        <div className="chat-profile__image">
          <img src={selectedConversation.avatar} alt={selectedConversation.name} />
        </div>
        <div className="chat-profile__info">
          <h2 className="chat-profile__name">{selectedConversation.name} 23</h2>
          <p className="chat-profile__role">AI Companion</p>
        </div>
        <div className="chat-profile__actions">
          <button className="chat-profile__btn chat-profile__btn--call" onClick={() => {
            // Handle video call functionality
            console.log('Video call initiated');
          }}>
            <FaVideo />
            <span>Call me</span>
          </button>
          <button className="chat-profile__btn chat-profile__btn--gift" onClick={handleGiftClick}>
            <FaGift />
            <span>Send a gift</span>
          </button>
        </div>
        <div className="chat-profile__about">
          <h4 className="chat-profile__about-title">About {selectedConversation.name}</h4>
          <p className="chat-profile__about-text">
            {selectedConversation.name} is a sophisticated AI companion designed to provide personalized advice and support. 
            With a focus on empathy and understanding, {selectedConversation.name} offers guidance on various topics, from 
            personal development to event planning, ensuring each interaction is tailored to your unique needs and preferences.
          </p>
        </div>
      </aside>

      {/* Activate Spici+ Modal */}
      {showSpiciModal && (
        <div className="spici-modal-overlay" onClick={() => setShowSpiciModal(false)}>
          <div className="spici-modal" onClick={(e) => e.stopPropagation()}>
            <button className="spici-modal__close" onClick={() => setShowSpiciModal(false)}>
              <FaTimes />
            </button>
            <div className="spici-modal__header">
              <FaCrown className="spici-modal__crown" />
              <h2 className="spici-modal__title">Activate Spici+</h2>
            </div>
            <p className="spici-modal__description">
              Please confirm you are 18+ and agree to view fictional AI-generated adult content.
            </p>
            <div className="spici-modal__checkboxes">
              <label className="spici-modal__checkbox">
                <input
                  type="checkbox"
                  checked={ageConfirmed}
                  onChange={(e) => setAgeConfirmed(e.target.checked)}
                />
                <span>I confirm I am 18+</span>
              </label>
              <label className="spici-modal__checkbox">
                <input
                  type="checkbox"
                  checked={contentAgreed}
                  onChange={(e) => setContentAgreed(e.target.checked)}
                />
                <span>I agree to view fictional AI-generated erotic content</span>
              </label>
            </div>
            <div className="spici-modal__benefits">
              <h3 className="spici-modal__benefits-title">Spici+ Benefits</h3>
              <div className="spici-modal__benefit">
                <span className="spici-modal__benefit-icon" style={{ fontSize: '1.1rem', color: '#ff179e' }}>∞</span>
                <span>Unlimited chat messages</span>
              </div>
              <div className="spici-modal__benefit">
                <FaChartLine className="spici-modal__benefit-icon" />
                <span>Full leveling system</span>
              </div>
              <div className="spici-modal__benefit">
                <FaMicrophone className="spici-modal__benefit-icon" />
                <span>NSFW & voice messages</span>
              </div>
            </div>
            <div className="spici-modal__actions">
              <button 
                className="spici-modal__activate-btn"
                disabled={!ageConfirmed || !contentAgreed}
                onClick={() => {
                  if (ageConfirmed && contentAgreed) {
                    // Handle subscription activation
                    console.log('Activating Spici+ subscription');
                    setShowSpiciModal(false);
                    navigate('/plan');
                  }
                }}
              >
                Activate Spici+ – €1.99 Trial
              </button>
              <button className="spici-modal__cancel-btn" onClick={() => setShowSpiciModal(false)}>
                Cancel
              </button>
            </div>
            <p className="spici-modal__terms">
              By activating, you agree to our <a 
                href="#" 
                className="spici-modal__terms-link"
                onClick={(e) => {
                  e.preventDefault();
                  // Navigate to terms page or open terms modal
                  console.log('Opening Terms of Service');
                }}
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Send a Gift Modal */}
      {showGiftModal && (
        <div className="gift-modal-overlay" onClick={() => setShowGiftModal(false)}>
          <div className="gift-modal" onClick={(e) => e.stopPropagation()}>
            <div className="gift-modal__header">
              <h2 className="gift-modal__title">Send a Gift</h2>
              <button className="gift-modal__close" onClick={() => setShowGiftModal(false)}>
                <FaTimes />
              </button>
            </div>
            
            {/* Small Gifts Grid */}
            <div className="gift-modal__grid">
              <div 
                className={`gift-item ${selectedGift === 'soft-drink' ? 'gift-item--selected' : ''}`}
                onClick={() => setSelectedGift('soft-drink')}
              >
                <div className="gift-item__image gift-item__image--soft-drink">
                  <img src="/3d-summer-cocktail-with-cherry-orange-slice 1.png" alt="Soft Drink" />
                </div>
                <div className="gift-item__name">Soft Drink</div>
                <div className="gift-item__cost">
                  <FaCoins className="gift-item__coin-icon" />
                  <span>300</span>
                </div>
                <button 
                  className="gift-item__send-btn" 
                  onClick={(e) => handleSendGift('soft-drink', e)}
                >
                  Send
                </button>
              </div>

              <div 
                className={`gift-item ${selectedGift === 'rose' ? 'gift-item--selected' : ''}`}
                onClick={() => setSelectedGift('rose')}
              >
                <div className="gift-item__image gift-item__image--rose">
                  <img src="/cute-bright-pastel-pink-roses 1.png" alt="Rose" />
                </div>
                <div className="gift-item__name">Rose</div>
                <div className="gift-item__cost">
                  <FaCoins className="gift-item__coin-icon" />
                  <span>300</span>
                </div>
                <div className="gift-item__xp">
                  <span className="gift-item__xp-icon">⭐</span>
                  <span>4 XP</span>
                </div>
                <button 
                  className="gift-item__send-btn" 
                  onClick={(e) => handleSendGift('rose', e)}
                >
                  Send
                </button>
              </div>

              <div 
                className={`gift-item ${selectedGift === 'chocolate' ? 'gift-item--selected' : ''}`}
                onClick={() => setSelectedGift('chocolate')}
              >
                <div className="gift-item__image gift-item__image--chocolate">
                  <img src="/open-closed-box-with-round-chocolates-festive-pink-heart-shaped-packaging 1.png" alt="Chocolate Box" />
                </div>
                <div className="gift-item__name">Chocolate Box</div>
                <div className="gift-item__cost">
                  <FaCoins className="gift-item__coin-icon" />
                  <span>500</span>
                </div>
                <div className="gift-item__xp">
                  <span className="gift-item__xp-icon">⭐</span>
                  <span>7 XP</span>
                </div>
                <button 
                  className="gift-item__send-btn" 
                  onClick={(e) => handleSendGift('chocolate', e)}
                >
                  Send
                </button>
              </div>

              <div 
                className={`gift-item ${selectedGift === 'parfume' ? 'gift-item--selected' : ''}`}
                onClick={() => setSelectedGift('parfume')}
              >
                <div className="gift-item__image gift-item__image--parfume">
                  <img src="/3d-realistic-perfume-icon-vector-illustration 1.png" alt="Parfume" />
                </div>
                <div className="gift-item__name">Parfume</div>
                <div className="gift-item__cost">
                  <FaCoins className="gift-item__coin-icon" />
                  <span>900</span>
                </div>
                <div className="gift-item__xp">
                  <span className="gift-item__xp-icon">⭐</span>
                  <span>13 XP</span>
                </div>
                <button 
                  className="gift-item__send-btn" 
                  onClick={(e) => handleSendGift('parfume', e)}
                >
                  Send
                </button>
              </div>

              <div 
                className={`gift-item ${selectedGift === 'bag' ? 'gift-item--selected' : ''}`}
                onClick={() => setSelectedGift('bag')}
              >
                <div className="gift-item__image gift-item__image--bag">
                  <img src="/3d-beach-bag-with-heart-details 1.png" alt="Designer Bag" />
                </div>
                <div className="gift-item__name">Designer Bag</div>
                <div className="gift-item__cost">
                  <FaCoins className="gift-item__coin-icon" />
                  <span>1 200</span>
                </div>
                <div className="gift-item__xp">
                  <span className="gift-item__xp-icon">⭐</span>
                  <span>18 XP</span>
                </div>
                <button 
                  className="gift-item__send-btn" 
                  onClick={(e) => handleSendGift('bag', e)}
                >
                  Send
                </button>
              </div>

              <div 
                className={`gift-item ${selectedGift === 'ring' ? 'gift-item--selected' : ''}`}
                onClick={() => setSelectedGift('ring')}
              >
                <div className="gift-item__image gift-item__image--ring">
                  <img src="/wedding-ring-with-diamond-it-realistic-3d-icon 1.png" alt="Diamond Ring" />
                </div>
                <div className="gift-item__name">Diamond Ring</div>
                <div className="gift-item__cost">
                  <FaCoins className="gift-item__coin-icon" />
                  <span>2 500</span>
                </div>
                <div className="gift-item__xp">
                  <span className="gift-item__xp-icon">⭐</span>
                  <span>40 XP</span>
                </div>
                <button 
                  className="gift-item__send-btn" 
                  onClick={(e) => handleSendGift('ring', e)}
                >
                  Send
                </button>
              </div>
            </div>

            {/* Large Special Gift */}
            <div 
              className={`gift-item gift-item--large ${selectedGift === 'plane' ? 'gift-item--selected' : ''}`}
              onClick={() => setSelectedGift('plane')}
            >
              <div className="gift-item__image gift-item__image--plane">
                <img src="/white-realistic-passenger-plane-3d-concepts-commercial-passenger-transportation-travel 1.png" alt="Private Plane" />
              </div>
              <div className="gift-item__content">
                <div className="gift-item__name">Private Plane</div>
                <div className="gift-item__cost">
                  <FaCoins className="gift-item__coin-icon" />
                  <span>5 000</span>
                </div>
                <div className="gift-item__xp">
                  <span className="gift-item__xp-icon">⭐</span>
                  <span>90 XP</span>
                </div>
                <button 
                  className="gift-item__send-btn" 
                  onClick={(e) => handleSendGift('plane', e)}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

