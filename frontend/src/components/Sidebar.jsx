import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaBars, FaGlobe, FaComments, FaUser, FaStar, FaGem,
  FaUsers, FaQuestionCircle, FaCog
} from 'react-icons/fa';
import './HomePage.css';
import avatarImg from '../assets/images/group.png';

export default function Sidebar({ isOpen = true, onToggle, onSpiciClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSpiciClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onSpiciClick) {
      onSpiciClick();
    } else {
      handleNavigation('/plan');
    }
  };

  return (
    <aside className={`spici-sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`} style={{background: 'linear-gradient(180deg, #ff25a0 , #22101B , #22101B , #22101B 100%)'}}>
      <div className="" />
      <button className="sidebar-hamburger" onClick={onToggle}>
        <FaBars />
      </button>
      <div className="sidebar-avatar-wrap">
        <img src={avatarImg} className="sidebar-avatar" alt="Anna Blue Profile" />
      </div>
      <div className="sidebar-user-name">Anna Blue</div>
      <div className="sidebar-divider" />
      <nav className="sidebar-mainnav">
        <div 
          className={`sidebar-link ${isActive('/home') ? 'sidebar-link--active' : ''}`} 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleNavigation('/home');
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleNavigation('/home');
            }
          }}
        >
          <FaGlobe className="sidebar-link-icon" /> <span>Explore</span>
        </div>
        <div 
          className={`sidebar-link ${isActive('/chat') ? 'sidebar-link--active' : ''}`} 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleNavigation('/chat');
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleNavigation('/chat');
            }
          }}
        >
          <FaComments className="sidebar-link-icon" /> <span>Chat</span>
        </div>
        <div 
          className={`sidebar-link ${isActive('/profile') ? 'sidebar-link--active' : ''}`} 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleNavigation('/profile');
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleNavigation('/profile');
            }
          }}
        >
          <FaUser className="sidebar-link-icon" /> <span>Profile</span>
        </div>
        <div 
          className={`sidebar-link ${isActive('/favourites') ? 'sidebar-link--active' : ''}`} 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleNavigation('/favourites');
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleNavigation('/favourites');
            }
          }}
        >
          <FaStar className="sidebar-link-icon" /> <span>Favourites</span>
        </div>
        <div 
          className={`sidebar-link sidebar-link--spici ${isActive('/plan') ? 'sidebar-link--active' : ''}`}
          onClick={handleSpiciClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleSpiciClick(e);
            }
          }}
        >
          <FaGem className="sidebar-link-icon sidebar-link-icon--gem" />
          <span>Become Spici+</span>
          <span className="sidebar-spici-offer" style={{paddingLeft: '5px', paddingRight: '5px'}}>70% OFF</span>
        </div>
      </nav>
      <div className="sidebar-secondarynav" style={{paddingLeft: '34px'}}>
        <div className="sidebar-row" style={{display: 'flex', flexDirection: 'column', fontSize: '20px', fontWeight: 'semibold'}}>
          <span 
            className={`sidebar-link sidebar-link--tiny ${isActive('/help-center') ? 'sidebar-link--active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleNavigation('/help-center');
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigation('/help-center');
              }
            }}
          >
            <FaQuestionCircle /> Help Center
          </span>
          <span className="sidebar-link sidebar-link--tiny"><FaUsers /> Affiliate</span>
        </div>
        <div className="sidebar-row" style={{display: 'flex', flexDirection: 'column', fontSize: '20px', fontWeight: 'semibold'}}>
          <span 
            className={`sidebar-link sidebar-link--tiny ${isActive('/settings') ? 'sidebar-link--active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleNavigation('/settings');
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigation('/settings');
              }
            }}
          >
            <FaCog /> Settings
          </span>
          <span className="sidebar-link sidebar-link--tiny"><FaQuestionCircle /> FAQ</span>
        </div>
      </div>
    </aside>
  );
}
