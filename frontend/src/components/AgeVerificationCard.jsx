import React from 'react';
import { useNavigate } from 'react-router-dom';

function AgeVerificationCard() {
  const navigate = useNavigate();
  return (
    <div className="age-verify">
      <div className="age-verify__icon-glow">
        <svg width="100" height="100" viewBox="0 0 100 100" className="age-verify__svg-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="#FF298A" />
          <g>
            <polygon points="50,30 66,66 34,66" fill="#fff" />
            <rect x="47" y="49" width="6" height="14" rx="3" fill="#FF298A" />
            <circle cx="50" cy="62" r="3" fill="#FF298A" />
          </g>
          <g>
            <polygon points="50,38 60,62 40,62" fill="#fff"/>
            <rect x="48.2" y="47.5" width="3.6" height="10.5" rx="1.8" fill="#FF298A"/>
            <circle cx="50" cy="59" r="2" fill="#FF298A"/>
          </g>
        </svg>
      </div>
      <h2 className="age-verify__title">Age Verification Required</h2>
      <p className="age-verify__desc">You must be 18 or older to use Spici.ai.</p>
      <button className="btn btn--primary" type="button" onClick={() => navigate('/')}>Go Back</button>
      <div className="age-verify__footer">Please verify your age before continuing</div>
    </div>
  );
}
export default AgeVerificationCard;
