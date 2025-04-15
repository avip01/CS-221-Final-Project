import React, { useState } from 'react';
import './settings.css';

const SettingsPage = () => {
    const [isDark, setIsDark] = useState(false);
    const [fontSizeValue, setFontSizeValue] = useState(50);
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [phoneNotifications, setPhoneNotifications] = useState(false);
    const [isPublic, setIsPublic] = useState(false);
    const [hoveredButton, setHoveredButton] = useState(null);

    return (

    );
};

export default SettingsPage;