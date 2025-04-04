import React from 'react';
import './aboutUs.css';
import aviImg from './assets/avi.png';
import nehemiahImg from './assets/nehemiah.jpg';
import hamedImg from './assets/hamed.jpg';
import marionImg from './assets/marion.jpg';
import johnImg from './assets/john.jpg';
import joujiImg from './assets/jouji.jpg';

function AboutUs() {
    return (
        <main>
            <div className="aboutUs">
                <h1>About Us</h1>
            </div>

            <div className="description">
                <h1 className="appTitle">Find Me A</h1>
                <div className="scrolling">
                <p className="summary">
                    Welcome to Find Me A, your go-to platform designed to transform online connections into real-world
                    encounters. In an age where screens dominate, our app serves as a vibrant bridge to actual
                    face-to-face interactions. Whether you're searching for a study group, a fitness enthusiast, a
                    business mentor, or just a friendly gathering, Find Me A brings these connections to your
                    fingertips.
                    </p>

                    <p className="summary">
                    At Find Me A, we believe that true community thrives beyond digital interactions. Our
                    innovative platform uses a dynamic live map to display local events, meet-ups, and opportunities
                    nearby, making it easier than ever to engage with the world around you. From academic tutors to gym
                    buddies and everything in between, our diverse categories ensure that you'll find your ideal
                    meeting, tailored to your interests and location.
                    </p>

                    <p className="summary">
                    Join Find Me A to explore, connect, and participate in a myriad of activities and events
                    that fuel your passions. Step out, meet new people, learn new things, and create meaningful experiences.
                    Because life happens offline, and your next great adventure is just around the corner, waiting for you to
                    say, "Find Me A!"
                    </p>
                </div>
            </div>

            <div className="photos">
                <div className="avi">
                    <img src={aviImg} alt="Picture of Avi"/>
                    <span className="loader"></span>
                </div>
                <div className="nehemiah">
                    <img src={nehemiahImg} alt="Picture of Nehemiah"/>
                    <span className="loader loader2"></span>
                </div>
                <div className="hamed">
                    <img src={hamedImg} alt="Picture of Mouhamadou"/>
                    <span className="loader loader3"></span>
                </div>
                <div className="marion">
                    <img src={marionImg} alt="Picture of Marion"/>
                    <span className="loader loader4"></span>
                </div>
                <div className="john">
                    <img src={johnImg} alt="Picture of John"/>
                    <span className="loader loader5"></span>
                </div>
                <div className="jouji">
                    <img src={joujiImg} alt="Picture of Jouji"/>
                    <span className="loader loader6"></span>
                </div>
            </div>
        </main>
    );
}

export default AboutUs;
