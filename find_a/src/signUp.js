import "./signUp.css";
import "./background.css";
import { Link } from 'react-router-dom';

const SignUp = () => (
    <div className="main">
        <form method="get" encType="text/plain">
            <div id="sign-up-form">
                <h1>Create an account</h1>
                <div className="form-name">
                    <div className="first-name">
                        <input type="text" id="fName" name="fName" placeholder="First Name"/>
                    </div>
                    <div className="last-name">
                        <input type="text" id="lName" name="lName" placeholder="Last Name"/>
                    </div>
                </div>

                <div className="full-length-input">
                    <input type="text" id="username" name="username" placeholder="Username"/>
                </div>

                <div className="full-length-input">
                    <input type="email" id="email" name="email" placeholder="Email"/>
                </div>

                <div className="full-length-input">
                    <input type="password" id="password" name="password" placeholder="Password"/>
                </div>

                <b>Select your interests:</b>
                <div className="vehicle-grid">
                    {["Sports", "Music", "Hiking", "Art", "Food", "Thrill Seeking"].map((interest, index) => (
                        <div key={index}>
                            <input type="checkbox" id={`interest${index}`} name="interests" value={interest}/>
                            <label htmlFor={`interest${index}`}>{interest}</label>
                        </div>
                    ))}
                </div>

                <button type="submit">Sign Up!</button>
            </div>
        </form>
        <p id="login-page">
            Already have an account?<br/>
            <Link to="/login">Login</Link>
        </p>
    </div>
);

export default SignUp;