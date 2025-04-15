import React from 'react';

const SettingsPage = () => {
    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Settings ⚙️</h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h2>Appearance</h2>
                    <div style={{ marginBottom: '15px' }}>
                        <label>
                            Dark Mode:
                            <input type="checkbox" style={{ marginLeft: '10px' }} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Font Size:
                            <input type="range" min="0" max="100" style={{ marginLeft: '10px' }} />
                        </label>
                    </div>

                    <h2 style={{ marginTop: '30px' }}>Notifications</h2>
                    <div style={{ marginBottom: '15px' }}>
                        <label>
                            Email Notifications:
                            <input type="checkbox" style={{ marginLeft: '10px' }} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Phone Notifications:
                            <input type="checkbox" style={{ marginLeft: '10px' }} />
                        </label>
                    </div>
                </div>

                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h2>Account Settings</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button style={{ width: '150px', padding: '8px', backgroundColor: '#5C6E58', color: 'white', border: 'none', borderRadius: '4px' }}>
                            Email
                        </button>
                        <button style={{ width: '150px', padding: '8px', backgroundColor: '#5C6E58', color: 'white', border: 'none', borderRadius: '4px' }}>
                            Password
                        </button>
                        <button style={{ width: '150px', padding: '8px', backgroundColor: '#5C6E58', color: 'white', border: 'none', borderRadius: '4px' }}>
                            Delete Account
                        </button>
                        <button style={{ width: '150px', padding: '8px', backgroundColor: '#5C6E58', color: 'white', border: 'none', borderRadius: '4px' }}>
                            Reset 2FA
                        </button>
                    </div>

                    <h2 style={{ marginTop: '30px' }}>Privacy</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>Private</span>
                        <input type="checkbox" />
                        <span>Public</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;