const SettingsPage = () => {
    const [isDark, setIsDark] = useState(false);
    const [fontSizeValue, setFontSizeValue] = useState(50);
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [phoneNotifications, setPhoneNotifications] = useState(false);
    const [isPublic, setIsPublic] = useState(false);
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <div className="settings-container">
            <h1 className="settings-heading">Settings ⚙️</h1>

            <div className="settings-flex-container">
                <div className="settings-column">
                    <div className="section-header">
                        <div className="section-title">Appearance</div>
                    </div>

                    <div className="settings-row">
                        <div className="pill-box">
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
                    <div className="settings-row">
                        <div className="pill-box">
                            Font Size
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={fontSizeValue}
                            onChange={(e) => setFontSizeValue(e.target.value)}
                            className="slider-input"
                        />
                    </div>

                    <div className="section-header">
                        <div className="section-title">Notifications</div>
                    </div>

                    <div className="settings-row">
                        <div className="pill-box">
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
                    <div className="settings-row">
                        <div className="pill-box">
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

                <div className="settings-column">
                    <div className="section-header">
                        <div className="section-title">Account Settings</div>
                    </div>

                    <button
                        className={`settings-button ${hoveredButton === 'email' ? 'button-hover' : ''}`}
                        onMouseEnter={() => setHoveredButton('email')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        Email
                    </button>

                    <button
                        className={`settings-button ${hoveredButton === 'password' ? 'button-hover' : ''}`}
                        onMouseEnter={() => setHoveredButton('password')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        Password
                    </button>

                    <button
                        className={`settings-button ${hoveredButton === 'delete' ? 'button-hover' : ''}`}
                        onMouseEnter={() => setHoveredButton('delete')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        Delete Account
                    </button>

                    <button
                        className={`settings-button ${hoveredButton === '2fa' ? 'button-hover' : ''}`}
                        onMouseEnter={() => setHoveredButton('2fa')}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        Reset 2FA
                    </button>
