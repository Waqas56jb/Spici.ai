import React from 'react';
import Logo from './components/Logo';
import SignupCard from './components/SignupCard';
import './styles/signup.css';

function App() {
  return (
    <div className="app">
      <Logo />
      <div className="card">
        <SignupCard />
      </div>
    </div>
  );
}

export default App;
