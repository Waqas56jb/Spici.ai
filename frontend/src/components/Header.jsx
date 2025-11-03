import React from 'react';
import { FaFire } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from './Logo';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="spici-header">
      <div className="header__logo" onClick={() => navigate('/') }>
        {/* If/when a branded logo asset is available, swap into Logo component via props */}
        <FaFire className="header__logo-icon" />
        <span className="header__logo-text">Spici.ai</span>
      </div>
      <nav className="header__nav">
        <span className="header__nav-link">Girls</span>
        <span className="header__nav-link header__nav-link--active">Anime</span>
        <span className="header__nav-link">Guys</span>
      </nav>
      <div className="header__actions">
        <button className="header__login" onClick={()=>navigate('/')}>Login</button>
        <button className="header__signup" onClick={()=>navigate('/signup')}>Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
