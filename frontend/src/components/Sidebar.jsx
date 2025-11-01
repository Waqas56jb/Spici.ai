import React from 'react';
import {
  FaBars, FaGlobe, FaComments, FaUser, FaStar, FaGem,
  FaUsers, FaQuestionCircle, FaCog
} from 'react-icons/fa';
import './HomePage.css';
import avatarImg from '../assets/images/group.png';

export default function Sidebar() {
  return (
    <aside className="spici-sidebar">
      <div className="sidebar-gradient" />
      <button className="sidebar-hamburger"><FaBars /></button>
      <div className="sidebar-avatar-wrap">
        <img src={avatarImg} className="sidebar-avatar" alt="Anna Blue Profile" />
      </div>
      <div className="sidebar-user-name">Anna Blue</div>
      <div className="sidebar-divider" />
      <nav className="sidebar-mainnav">
        <div className="sidebar-link">
          <FaGlobe className="sidebar-link-icon" /> <span>Explore</span>
        </div>
        <div className="sidebar-link sidebar-link--active">
          <FaComments className="sidebar-link-icon" /> <span>Chat</span>
        </div>
        <div className="sidebar-link">
          <FaUser className="sidebar-link-icon" /> <span>Profile</span>
        </div>
        <div className="sidebar-link">
          <FaStar className="sidebar-link-icon" /> <span>Favourites</span>
        </div>
        <div className="sidebar-link sidebar-link--spici">
          <FaGem className="sidebar-link-icon sidebar-link-icon--gem" />
          <span>Become Spici+</span>
          <span className="sidebar-spici-offer">70% OFF</span>
        </div>
      </nav>
      <div className="sidebar-secondarynav">
        <div className="sidebar-row">
          <span className="sidebar-link sidebar-link--tiny"><FaUsers /> Affiliate</span>
          <span className="sidebar-link sidebar-link--tiny"><FaQuestionCircle /> Help Center</span>
        </div>
        <div className="sidebar-row">
          <span className="sidebar-link sidebar-link--tiny"><FaCog /> Settings</span>
          <span className="sidebar-link sidebar-link--tiny"><FaQuestionCircle /> FAQ</span>
        </div>
      </div>
    </aside>
  );
}
