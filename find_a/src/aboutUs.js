import React, { useState } from 'react';
import './aboutUs.css';
import './background.css';
import aviImg from './assets/avi.png';
import nehemiahImg from './assets/nehemiah.jpg';
import hamedImg from './assets/hamed.jpg';
import marionImg from './assets/marion.jpg';
import johnImg from './assets/john.jpg';
import joujiImg from './assets/jouji.jpg';
import github from './assets/github.png';
import linkedin from'./assets/linkedin.png';

function AboutUs() {

    const [showOverlay, setShowOverlay] = useState(false);
    const [Person, setPerson] = useState("");

    const openOverlay = (personClass) => {
        setPerson(personClass);
        setShowOverlay(true);
    };

    const closeOverlay = () => {
        setShowOverlay(false);
        setPerson("");
    };

    const socialLinks = {
        aviClick: {
            github: "https://github.com/avip01",
            linkedin: "https://linkedin.com/in/arpatel2004"
        }
    };

    return (
        <main>
            <div className="aboutUs">
                <h1>Find Me A</h1>
            </div>

            <div className="description">
                <h1 className="appTitle">About Us</h1>
                <div className="scrolling">
                    <p className="summary">
                        Welcome to Find Me A, your go-to platform designed to transform online connections into
                        real-world
                        encounters. In an age where screens dominate, our app serves as a vibrant bridge to actual
                        face-to-face interactions. Whether you're searching for a study group, a fitness enthusiast, a
                        business mentor, or just a friendly gathering, Find Me A brings these connections to your
                        fingertips.
                    </p>

                    <p className="summary">
                        At Find Me A, we believe that true community thrives beyond digital interactions. Our
                        innovative platform uses a dynamic live map to display local events, meet-ups, and opportunities
                        nearby, making it easier than ever to engage with the world around you. From academic tutors to
                        gym
                        buddies and everything in between, our diverse categories ensure that you'll find your ideal
                        meeting, tailored to your interests and location.
                    </p>

                    <p className="summary">
                        Join Find Me A to explore, connect, and participate in a myriad of activities and events
                        that fuel your passions. Step out, meet new people, learn new things, and create meaningful
                        experiences.
                        Because life happens offline, and your next great adventure is just around the corner, waiting
                        for you to
                        say, "Find Me A!"
                    </p>
                </div>
            </div>

            <div className="photos">
                <div className="avi" onClick={() => openOverlay("aviClick")}>
                    <img src={aviImg} alt="Picture of Avi"/>
                    <span className="loader"></span>
                </div>
                <div className="nehemiah" onClick={() => openOverlay("nehemiahClick")}>
                    <img src={nehemiahImg} alt="Picture of Nehemiah"/>
                    <span className="loader loader2"></span>
                </div>
                <div className="hamed" onClick={() => openOverlay("hamedClick")}>
                    <img src={hamedImg} alt="Picture of Mouhamadou"/>
                    <span className="loader loader3"></span>
                </div>
                <div className="marion" onClick={() => openOverlay("marionClick")}>
                    <img src={marionImg} alt="Picture of Marion"/>
                    <span className="loader loader4"></span>
                </div>
                <div className="john" onClick={() => openOverlay("johnClick")}>
                    <img src={johnImg} alt="Picture of John"/>
                    <span className="loader loader5"></span>
                </div>
                <div className="jouji" onClick={() => openOverlay("joujiClick")}>
                    <img src={joujiImg} alt="Picture of Jouji"/>
                    <span className="loader loader6"></span>
                </div>
            </div>

            <div className={`overlay ${showOverlay ? "overlayClick" : ""} ${Person}`} onClick={closeOverlay}>
                <div className="circleClick" onClick={(e) => e.stopPropagation()}>
                    {Person && socialLinks[Person] && (
                        <div className="socialLinks">
                            <a href={socialLinks[Person].github} target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub"/>
                            </a>
                            <a href={socialLinks[Person].linkedin} target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn"/>
                            </a>
                        </div>
                    )}
                </div>
            </div>

        </main>
    );
}

export default AboutUs;
