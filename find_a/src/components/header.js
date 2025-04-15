import React, { useEffect, useState } from 'react';
import './Header.css';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  // I only want Navigation links on my landing/root page, so I creating a conditional to check for that
  const location = useLocation();
  console.log(location.pathname);
  const isLanding = location.pathname === '/' || location.pathname === '/landing';


  const words = ['mentor', 'friend', 'colleague', 'classmate', 'critic'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <header className="header">
      <Link to="/" className="navbar-logo-link">
        <img src={require('../assets/marion.jpg')} alt="mar" className="navbar-logo" />
      </Link>
      <div className="navbar-center-text">
        Find Me A <span style={{ fontWeight: 'bold' }}>{words[currentWordIndex]}</span>
      </div>
        {/* If on landing page, display buttons. If not, create placeholder to keep overall layout*/}
  {isLanding ? (
    <div className="header-buttons">
      <Link to="/about" className="header-button">About</Link>
      <Link to="/contact" className="header-button">Contact</Link>
    </div>
  ) : (
    <div className="header-buttons placeholder" />
  )}
</header>
  );
}

export default Header;
