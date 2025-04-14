import { Link } from 'react-router-dom';

const Landing = () => (
    <div>
        <h1>Welcome to the Landing Page</h1>
        <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
    </div>
);

export default Landing;
