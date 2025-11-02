import React, { useState } from 'react';
import './HomePage.css';
import Header from './Header';
import Sidebar from './Sidebar';
import HomeMainContent from './HomeMainContent';
import SpiciReactivationModal from './SpiciReactivationModal';

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showSpiciReactivation, setShowSpiciReactivation] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSpiciClick = () => {
    setShowSpiciReactivation(true);
  };

  return (
    <div className="home-layout">
      <Header />
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} onSpiciClick={handleSpiciClick} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {!isSidebarOpen && (
          <button 
            className="sidebar-toggle-btn"
            onClick={toggleSidebar}
            aria-label="Open sidebar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        )}
        <HomeMainContent />
      </div>

      {/* Spici+ Reactivation Modal */}
      <SpiciReactivationModal 
        isOpen={showSpiciReactivation} 
        onClose={() => setShowSpiciReactivation(false)} 
      />
    </div>
  );
}
