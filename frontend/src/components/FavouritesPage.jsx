import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Header from './Header';
import SpiciReactivationModal from './SpiciReactivationModal';
import './FavouritesPage.css';
import img904 from '../assets/images/904.png';
import img905 from '../assets/images/905.png';
import img906 from '../assets/images/906.png';
import img907 from '../assets/images/907.png';

const chatImages = [img904, img905, img906, img907];

const favourites = [
  { id: 1, name: 'Ashley Watson', age: 28, img: chatImages[0], description: "She doesn't believe in rules. She's loud, laughs too hard, and will absolutely dare you to do something reckless at 2am." },
  { id: 2, name: 'Bella Mikos', age: 23, img: chatImages[1], description: "She doesn't believe in rules. She's loud, laughs too hard, and will absolutely dare you to do something reckless at 2am." },
  { id: 3, name: 'Lila Erne', age: 27, img: chatImages[2], description: "She doesn't believe in rules. She's loud, laughs too hard, and will absolutely dare you to do something reckless at 2am." },
  { id: 4, name: 'Abby Wering', age: 42, img: chatImages[3], description: "She doesn't believe in rules. She's loud, laughs too hard, and will absolutely dare you to do something reckless at 2am." },
  { id: 5, name: 'Ashley Watson', age: 28, img: chatImages[0], description: "She doesn't believe in rules. She's loud, laughs too hard, and will absolutely dare you to do something reckless at 2am." },
  { id: 6, name: 'Bella Mikos', age: 23, img: chatImages[1], description: "She doesn't believe in rules. She's loud, laughs too hard, and will absolutely dare you to do something reckless at 2am." },
];

export default function FavouritesPage() {
  const [showSpiciReactivation, setShowSpiciReactivation] = useState(false);

  const handleSpiciClick = () => {
    setShowSpiciReactivation(true);
  };

  return (
    <div className="favourites-layout">
      <Header />
      <Sidebar onSpiciClick={handleSpiciClick} />
      <main className="favourites-main">
        <h1 className="favourites-title">Your faves, your vibe.</h1>
        <div className="favourites-grid">
          {favourites.map(fav => (
            <div key={fav.id} className="favourites-card">
              <div className="favourites-card__star">
                <FaStar />
              </div>
              <div className="favourites-card__image">
                <img src={fav.img} alt={fav.name} />
              </div>
              <div className="favourites-card__info">
                <h3 className="favourites-card__name">{fav.name} {fav.age}</h3>
                <p className="favourites-card__description">{fav.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <SpiciReactivationModal 
        isOpen={showSpiciReactivation} 
        onClose={() => setShowSpiciReactivation(false)} 
      />
    </div>
  );
}

