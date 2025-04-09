import React, { useState, useEffect } from 'react';
import './hero.css';

function Hero() {
    const [currentTitle, setCurrentTitle] = useState(0);
    const titles = ['friend', 'mentor', 'tutor'];

    // Rotate through titles
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-wrapper">
            <div className="top-nav">
                <div className="logo-container">
                    <div className="logo-circle"></div>
                    <span className="logo-text">Image of Logo</span>
                </div>
                <div className="rotating-title">
                    Find Me A <span className="title-rotate">{titles[currentTitle]}</span>
                </div>
            </div>

            <div className="hero-content-container">

                <div className="hero-center-content">
                    <h1 className="main-heading">Welcome to FindMeA</h1>
                </div>

                <div className="hero-buttons-container">
                    <a href="/signUp">
                        <button className="hero-button signup-button">Sign Up</button>
                    </a>
                    <a href="/about">
                        <button className="hero-button about-button">About Us</button>
                    </a>

                </div>
            </div>


            <div className="footer"></div>
        </div>
    );
}
export default Hero;