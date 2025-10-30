import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function SignupCard() {
  const navigate = useNavigate();
  return (
    <div className="signup">
      <h2 className="signup__title">Create a Free Account</h2>
      <p className="signup__subtitle">Join Spici.ai and continue your conversation</p>

      <form className="signup__form" onSubmit={e => { e.preventDefault(); navigate('/age-verification'); }}>
        <input className="input" type="text" placeholder="First Name" />
        <input className="input" type="email" placeholder="Email Address" />
        <input className="input" type="password" placeholder="Create Password" />

        <div className="dob">
          <select className="select" defaultValue="">
            <option value="" disabled>Day</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <select className="select" defaultValue="">
            <option value="" disabled>Month</option>
            {[
              'January','February','March','April','May','June',
              'July','August','September','October','November','December'
            ].map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <select className="select" defaultValue="">
            <option value="" disabled>Year</option>
            {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <button className="btn btn--primary" type="submit">SIGN UP</button>
      </form>

      <div className="or">Or continue with</div>

      <div className="social">
        <button className="btn btn--social">
          <FcGoogle size={18} />
          <span>Continue with Google</span>
        </button>
        <button className="btn btn--social">
          <FaApple size={18} />
          <span>Continue with Apple</span>
        </button>
      </div>

      <p className="legal">
        By signing up, you confirm you have read and accept the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </p>

      <p className="signin">Already have an account? <a href="#">Sign in</a></p>
    </div>
  );
}

export default SignupCard;
