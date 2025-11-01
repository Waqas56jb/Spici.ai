import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TermsConsent() {
  const [checks, setChecks] = useState({ a: false, b: false, c: false });
  const allChecked = checks.a && checks.b && checks.c;
  const navigate = useNavigate();

  return (
    <div className="terms">
      <h1 className="terms__title">Terms & Consent</h1>
      <p className="terms__subtitle">Please review and accept our terms before continuing.</p>

      <section className="terms__panel">
        <h3 className="terms__panel-title">Terms of Service</h3>
        <p className="terms__panel-text">
          Welcome to Spici.ai, an AI-powered conversational platform designed for adult users. By accessing
          or using our service, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>
        <p className="terms__panel-text">
          Our platform provides AI-generated conversations and content that may include mature themes. All interactions are
          with artificial intelligence and are purely fictional. No real persons are involved in the generation of responses or content.
        </p>
        <p className="terms__panel-text">
          You acknowledge that you are solely responsible for your use of the service and any consequences thereof. We reserve the right
          to modify, suspend, or terminate your access to the service at any time without prior notice.
        </p>
        <div className="terms__bar">Privacy Policy Summary</div>
      </section>

      <h4 className="terms__section-title">Required Consent</h4>

      <div className="terms__checks">
        <label className="terms__check">
          <input type="checkbox" checked={checks.a} onChange={e => setChecks({ ...checks, a: e.target.checked })} />
          <span>I confirm that I am 18 years or older and legally able to access adult content in my jurisdiction.</span>
        </label>
        <label className="terms__check">
          <input type="checkbox" checked={checks.b} onChange={e => setChecks({ ...checks, b: e.target.checked })} />
          <span>I agree to the Terms of Service and Privacy Policy outlined above.</span>
        </label>
        <label className="terms__check">
          <input type="checkbox" checked={checks.c} onChange={e => setChecks({ ...checks, c: e.target.checked })} />
          <span>I understand that this experience may contain AI-generated adult content and fictional scenarios.</span>
        </label>
      </div>

      <div className="terms__actions">
        <button className="btn terms__decline" type="button">✕ Decline</button>
        <button className="btn terms__accept" type="button" disabled={!allChecked} onClick={()=>{if(allChecked)navigate('/age-gate')}}>
          ✓ Accept & Continue
        </button>
      </div>

      <p className="terms__disclaimer">By using Spici.ai, you acknowledge that all interactions are with artificial intelligence and are for entertainment purposes only.</p>
    </div>
  );
}

export default TermsConsent;
