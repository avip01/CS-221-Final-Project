import React, { useState } from 'react';

const SettingsPage = () => {
    const [isDark, setIsDark] = useState(false);
    const [fontSizeValue, setFontSizeValue] = useState(50);
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [phoneNotifications, setPhoneNotifications] = useState(false);
    const [isPublic, setIsPublic] = useState(false);

    // Color palette from FindMeA site
    const colors = {
        primary: '#5453c9', // Medium purple (button color)
        primaryDark: '#3f3e9e', // Darker purple for hover states
        background: '#f5f5f7', // Light gray background
        headingText: '#333366', // Dark purple text
        text: '#333333', // Dark text
        white: '#ffffff',
        lightGray: '#e0e0e5',
        mediumGray: '#9e9eaa',
    };

    const containerStyle = {
        maxWidth: '1000px',
        padding: '40px 20px',
        backgroundColor: colors.background,
        minHeight: '100vh',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        color: colors.text,
        boxSizing: 'border-box',
    };

    const headingStyle = {
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '0 0 40px 0',
        color: colors.headingText,
    };

    const flexContainerStyle = {
        display: 'flex',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
        gap: '30px',
        justifyContent: 'center',
    };

    const columnStyle = {
        flex: 1,
        maxWidth: '450px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    const sectionHeaderStyle = {
        backgroundColor: colors.primary,
        padding: '12px 20px',
        borderRadius: '6px',
        color: colors.white,
        marginBottom: '20px',
        width: '100%',
        boxSizing: 'border-box',
    };

    const pillBoxStyle = {
        backgroundColor: colors.primary,
        padding: '10px 16px',
        borderRadius: '999px',
        color: colors.white,
        width: '180px',
        textAlign: 'center',
        marginRight: '16px',
    };

    const rowStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        width: '100%',
    };

    const buttonStyle = {
        backgroundColor: colors.primary,
        color: colors.white,
        border: 'none',
        padding: '12px 16px',
        borderRadius: '5px',
        marginBottom: '16px',
        cursor: 'pointer',
        width: '160px',
        fontSize: '14px',
        fontWeight: 'bold',
        transition: 'background-color 0.2s',
    };

    const buttonHoverStyle = {
        ...buttonStyle,
        backgroundColor: colors.primaryDark,
    };

    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Settings ⚙️</h1>

            <div style={flexContainerStyle}>
                {/* Left Column */}
                <div style={columnStyle}>
                    <div style={sectionHeaderStyle}>
                        <div style={{ fontSize: '18px', fontWeight: 'medium' }}>Appearance</div>
                    </div>

                    <div style={rowStyle}>
                        <div style={pillBoxStyle}>
                            Dark Mode Toggle {isDark ? 'on' : 'off'}
                        </div>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={isDark}
                                onChange={() => setIsDark(!isDark)}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div style={rowStyle}>
                        <div style={pillBoxStyle}>
                            Font Size
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={fontSizeValue}
                            onChange={(e) => setFontSizeValue(e.target.value)}
                            style={{ width: '120px' }}
                            className="slider-input"
                        />
                    </div>

                    <div style={{ ...sectionHeaderStyle, marginTop: '20px' }}>
                        <div style={{ fontSize: '18px', fontWeight: 'medium' }}>Notifications</div>
                    </div>

                    <div style={rowStyle}>
                        <div style={pillBoxStyle}>
                            Toggle Email Notifications
                        </div>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={emailNotifications}
                                onChange={() => setEmailNotifications(!emailNotifications)}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div style={rowStyle}>
                        <div style={pillBoxStyle}>
                            Toggle Phone Notifications
                        </div>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={phoneNotifications}
                                onChange={() => setPhoneNotifications(!phoneNotifications)}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

                {/* Right Column */}
                <div style={columnStyle}>
                    <div style={sectionHeaderStyle}>
                        <div style={{ fontSize: '18px', fontWeight: 'medium' }}>Account Settings</div>
                    </div>

                    <button
                        style={hoveredButton === 'email' ? buttonHoverStyle : buttonStyle}
                        onMouseEnter={() => setHoveredButton('email')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        Email
                    </button>

                    <button
                        style={hoveredButton === 'password' ? buttonHoverStyle : buttonStyle}
                        onMouseEnter={() => setHoveredButton('password')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        Password
                    </button>

                    <button
                        style={hoveredButton === 'delete' ? buttonHoverStyle : buttonStyle}
                        onMouseEnter={() => setHoveredButton('delete')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        Delete Account
                    </button>

                    <button
                        style={hoveredButton === '2fa' ? buttonHoverStyle : buttonStyle}
                        onMouseEnter={() => setHoveredButton('2fa')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        Reset 2FA
                    </button>

                    <div style={{ ...sectionHeaderStyle, marginTop: '20px' }}>
                        <div style={{ fontSize: '18px', fontWeight: 'medium' }}>Privacy</div>
                    </div>

                    <div style={rowStyle}>
                        <div style={pillBoxStyle}>
                            Profile Visibility
                        </div>
                        <span style={{ fontSize: '14px', color: colors.text, marginRight: '8px' }}>Private</span>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={isPublic}
                                onChange={() => setIsPublic(!isPublic)}
                            />
                            <span className="slider round"></span>
                        </label>
                        <span style={{ fontSize: '14px', color: colors.text, marginLeft: '8px' }}>Public</span>
                    </div>
                </div>
            </div>

            {/* CSS for the toggle switches and other interactive elements */}
            <style>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }
        
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: ${colors.mediumGray};
          transition: .4s;
          border-radius: 34px;
        }
        
        .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }
        
        input:checked + .slider {
          background-color: ${colors.primary};
        }
        
        input:checked + .slider:before {
          transform: translateX(26px);
        }
        
        .slider-input {
          -webkit-appearance: none;
          height: 10px;
          background: ${colors.lightGray};
          border-radius: 5px;
          outline: none;
        }
        
        .slider-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: ${colors.primary};
          cursor: pointer;
        }
        
        .slider-input::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: ${colors.primary};
          cursor: pointer;
        }
      `}</style>
        </div>
    );
};

export default SettingsPage;