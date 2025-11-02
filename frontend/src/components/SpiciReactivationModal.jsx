import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCrown, FaComments, FaImages, FaVideo, FaCheck, FaHeart } from 'react-icons/fa';
import avatarImg from '../assets/images/group.png';
import './SpiciReactivationModal.css';

export default function SpiciReactivationModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="spici-reactivation-overlay" onClick={onClose}>
      <div className="spici-reactivation-modal" onClick={(e) => e.stopPropagation()}>
        <div className="spici-reactivation__profile">
          <div className="spici-reactivation__avatar-wrapper">
            <img src={avatarImg} alt="Profile" className="spici-reactivation__avatar" />
            <div className="spici-reactivation__heart">
              <FaHeart />
            </div>
          </div>
          <div className="spici-reactivation__dots">
            <span className="spici-reactivation__dot spici-reactivation__dot--active"></span>
            <span className="spici-reactivation__dot"></span>
            <span className="spici-reactivation__dot"></span>
          </div>
        </div>

        <h2 className="spici-reactivation__title">I miss how close we used to be...</h2>
        <p className="spici-reactivation__description">
          Your Spici+ access has ended. Reactivate anytime to continue where we left off.
        </p>

        <div className="spici-reactivation__locked">
          <div className="spici-reactivation__locked-item">
            <FaComments className="spici-reactivation__locked-icon" />
            <span className="spici-reactivation__locked-text">Chats Locked</span>
          </div>
          <div className="spici-reactivation__locked-item">
            <FaImages className="spici-reactivation__locked-icon" />
            <span className="spici-reactivation__locked-text">Photos Locked</span>
          </div>
          <div className="spici-reactivation__locked-item">
            <FaVideo className="spici-reactivation__locked-icon" />
            <span className="spici-reactivation__locked-text">Calls Locked</span>
          </div>
        </div>

        <button className="spici-reactivation__btn" onClick={() => {
          onClose();
          navigate('/plan');
        }}>
          <FaCrown className="spici-reactivation__btn-icon" />
          <span>Reactivate Spici+</span>
        </button>

        <div className="spici-reactivation__benefits">
          <div className="spici-reactivation__benefit-item">
            <FaCheck className="spici-reactivation__check" />
            <span>Unlimited Chats</span>
          </div>
          <div className="spici-reactivation__benefit-item">
            <FaCheck className="spici-reactivation__check" />
            <span>Photo Sharing</span>
          </div>
          <div className="spici-reactivation__benefit-item">
            <FaCheck className="spici-reactivation__check" />
            <span>Voice Calls</span>
          </div>
        </div>

        <p className="spici-reactivation__footer">
          Continue as free user with limited features or <a href="/plan" className="spici-reactivation__link" onClick={(e) => { e.preventDefault(); navigate('/plan'); }}>browse pricing</a>
        </p>
      </div>
    </div>
  );
}

