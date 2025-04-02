import React from "react";
import "./signUp.css";

const SignUp = () => (
    <div className="main">
        <h1>My Logo</h1>
        <form action="mailto:ntsander@uab.edu" method="get" encType="text/plain">
            <div id="sign-up-form">
                <div className="form-name">
                    <div>
                        First Name:<br />
                        <input type="text" name="fName" placeholder="Enter your first name" /><br />
                    </div>
                    <div>
                        Last Name:<br />
                        <input type="text" name="lName" placeholder="Enter your last name" /><br />
                    </div>
                </div>
                <div>
                    Username:<br />
                    <input type="text" name="username" placeholder="Enter a username" /><br />
                </div>
                <div>
                    Email:<br />
                    <input type="email" name="email" placeholder="Enter your email" /><br />
                </div>
                <div>
                    Password:<br />
                    <input type="password" name="password" placeholder="Enter a password" /><br />
                </div>
                <b>Select your interests:</b>
                <div className="vehicle-grid">
                    {["Bike", "Car", "Boat", "Plane", "Cow", "Ski"].map((interest, index) => (
                        <div key={index}>
                            <input type="checkbox" id={`vehicle${index + 1}`} name="interests" value={interest} />
                            <label htmlFor={`vehicle${index + 1}`}> I have a {interest.toLowerCase()}</label>
                        </div>
                    ))}
                </div>
                <div><button type="submit">Sign Up!</button></div>
            </div>
        </form>
    </div>
);

export default SignUp;
