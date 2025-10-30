import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function SignInCard() {
  const navigate = useNavigate();
  return (
    <div className="signup">
      <h2 className="signup__title">Sign In to Your Account</h2>

      <form className="signup__form" onSubmit={e => { e.preventDefault(); navigate('/terms-consent'); }}>
        <input className="input" type="text" placeholder="First Name" />
        <input className="input" type="email" placeholder="Email Address" />
        <input className="input" type="password" placeholder="Password" />

        <button className="btn btn--primary" type="submit">SIGN IN</button>
      </form>

      <div className="signup-switch">
        Don't have an account?{' '}
        <button className="signup-link" type="button" onClick={() => navigate('/signup')}>Sign up</button>
      </div>

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
    </div>
  );
}

export default SignInCard;
