import React, { useState, useEffect } from 'react';
import './login.css';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);

    const titles = ['friend', 'mentor', 'tutor'];

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt with:', { username, password });
    };

    return (
        <div className="loginPage">
            <div className="login-header">
                <div className="logo-container">
                    <div className="logo">
                    </div>
                </div>
                <h1 className="header-title">
                    Find Me A <span>{titles[titleIndex]}</span>
                </h1>
            </div>


            <div className="login-container">
                <div className="login-info">
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="username-input">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                               placeholder="Username:" className="form-input"/>
                    </div>

                    <div className="password-input">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password:" className="form-input"/>
                    </div>

                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </div>

            <div className="signup-section">
                Div (green background, rounded corners) containing a for Sign Up
            </div>
        </div>
    );
};

export default Login;