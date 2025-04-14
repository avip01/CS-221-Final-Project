import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './landing';
import Login from './login';
import SignUp from './signUp';
import Account from './account';
import AboutUs from './aboutUs';
import Settings from './settings';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/account" element={<Account />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
}

export default App;
