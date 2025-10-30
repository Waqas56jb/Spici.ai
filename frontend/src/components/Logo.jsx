import React from 'react';
import { FaFire } from 'react-icons/fa';

function Logo() {
  return (
    <div className="logo">
      <FaFire className="logo__icon" />
      <span className="logo__text">Spici.ai</span>
    </div>
  );
}

export default Logo;
