import { Link } from 'react-router-dom';

const Settings = () => (
    <div>
        <h1>Settings Page</h1>
        <nav>
            <Link to="/">Home</Link> |
            <Link to="/account">Account</Link> |
            <Link to="/about">About Me</Link>
        </nav>
    </div>
);

export default Settings;
