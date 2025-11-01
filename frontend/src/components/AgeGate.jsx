import React from 'react';
import { useNavigate } from 'react-router-dom';

function AgeGate() {
  const navigate = useNavigate();
  return (
    <div className="age-gate-bg">
      <div className="age-gate-card">
        <h2 className="age-gate-title">Are you 18 or older?</h2>
        <p className="age-gate-desc">
          Spici.ai contains mature content that is only suitable for adults.
          To continue, please confirm that you are at least 18 years old.<br />Your safety and privacy are important to us.
        </p>
        <div className="age-gate-actions">
          <button className="btn age-gate-yes" onClick={() => navigate('/home')}>Yes, I’m 18+</button>
          <button className="btn age-gate-no" onClick={() => navigate('/')}>No, take me back</button>
        </div>
        <div className="age-gate-legal">
          By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}

export default AgeGate;
