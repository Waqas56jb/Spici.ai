import React from 'react';
import './HomePage.css';
import Header from './Header';
import Sidebar from './Sidebar';
import HomeMainContent from './HomeMainContent';

export default function HomePage() {
  return (
    <div className="home-layout">
      <Header />
      <Sidebar />
      <HomeMainContent />
    </div>
  );
}
