import React from 'react';
import Navbar from './components/Navbar';
import AboutUs from './aboutMe';
import Landing from './landing';
import './App.css';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
        <div className="App">
          <Navbar /> 

          <main className="content">
            <Routes> {/* Define routes */}
              {/* Route for the landing page */}
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/landing" element={<Landing />} />
              // routes to othe pages go here
            </Routes>
          </main>
        </div>
  );
}

export default App;