import React from 'react';
import './landing.css'; // Import the new CSS file

function Landing() {
    return (
        <div className="landing-container">
            <div id="event-bar">
                <div id="event-search"></div>
                <h1> events</h1>
                <div className="event">Event 1</div>
                <div className="event">Event 2</div>
                <div className="event">Event 3</div>
                <div className="event">Event 4</div>
                <div className="event">Event 5</div>
            </div>
            <div className="main-content">
               
            </div>
        </div>
    );
}

export default Landing;