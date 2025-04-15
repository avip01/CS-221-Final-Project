import React from 'react';
import Header from './components/header';
import AboutUs from './aboutMe';
import Landing from './landing';
import './App.css';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
        <div className="App">
          <Header /> 

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