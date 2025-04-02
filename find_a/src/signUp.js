import React, { useState } from "react";
import "./signUp.css"; // Ensure you have a CSS file for styling

const SignUp = () => {
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        username: "",
        email: "",
        password: "",
        interests: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                interests: checked
                    ? [...prev.interests, value]
                    : prev.interests.filter((interest) => interest !== value)
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    };

    return (
        <div className="signup-container">
            <header className="signup-header">My Logo</header>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <div className="input-field">
                        <label>First Name:</label>
                        <input type="text" name="fName" placeholder="Enter your first name" value={formData.fName} onChange={handleChange} />
                    </div>
                    <div className="input-field">
                        <label>Last Name:</label>
                        <input type="text" name="lName" placeholder="Enter your last name" value={formData.lName} onChange={handleChange} />
                    </div>
                </div>
                <div className="input-field">
                    <label>Username:</label>
                    <input type="text" name="username" placeholder="Enter a username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Enter a password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="interests-section">
                    <b>Select your interests:</b>
                    <div className="checkbox-grid">
                        {["Bike", "Car", "Boat", "Plane", "Cow", "Ski"].map((interest, index) => (
                            <div key={index} className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id={`interest${index}`}
                                    value={interest}
                                    checked={formData.interests.includes(interest)}
                                    onChange={handleChange}
                                />
                                <label htmlFor={`interest${index}`}>I have a {interest.toLowerCase()}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit" className="signup-button">Sign Up!</button>
            </form>
        </div>
    );
};

export default SignUp;
