import { Link } from 'react-router-dom';

const Account = () => (
    <div>
        <h1>Account Page</h1>
        <nav>
            <Link to="/">Home</Link> |
            <Link to="/settings">Settings</Link> |
            <Link to="/about">About Me</Link>
        </nav>
    </div>
);

export default Account;
