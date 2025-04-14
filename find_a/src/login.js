import { Link } from 'react-router-dom';

const Login = () => (
    <div>
        <h1>Login Page</h1>
        <nav>
            <Link to="/">Home</Link> | <Link to="/signup">Sign Up</Link> |
            <Link to="/login">Login</Link> | <Link to="/settings">Settings</Link> |
            <Link to="/about">About Us</Link> | <Link to="/account">Account</Link>
        </nav>
    </div>
);

export default Login;
