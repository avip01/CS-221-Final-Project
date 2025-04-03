import "./signUp.css";

const SignUp = () => (
    <div className="main">
        <h1>Logo</h1>
        <form action="mailto:ntsander@uab.edu" method="get" encType="text/plain">
            <div id="sign-up-form">
                <div className="form-name">
                    <div className="first-name">
                        <label htmlFor="fName">First Name:</label>
                        <input type="text" id="fName" name="fName" placeholder="Enter your first name" />
                    </div>
                    <div className="last-name">
                        <label htmlFor="lName">Last Name:</label>
                        <input type="text" id="lName" name="lName" placeholder="Enter your last name" />
                    </div>
                </div>

                <div className="full-length-input">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Enter a username" />
                </div>

                <div className="full-length-input">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" />
                </div>

                <div className="full-length-input">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter a password" />
                </div>

                <b>Select your interests:</b>
                <div className="vehicle-grid">
                    {["Bike", "Car", "Boat", "Plane", "Cow", "Ski"].map((interest, index) => (
                        <div key={index}>
                            <input type="checkbox" id={`interest${index}`} name="interests" value={interest} />
                            <label htmlFor={`interest${index}`}> I have a {interest.toLowerCase()}</label>
                        </div>
                    ))}
                </div>

                <button type="submit">Sign Up!</button>
            </div>
        </form>
    </div>
);

export default SignUp;