
import React from 'react';
import Header from './components/header';
import AboutUs from './aboutMe';
import Landing from './landing';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import AboutUs from './aboutUs';


function App() {
  return (
        <div className="App">
          <Header /> 

          <main className="content">
          <Routes>
          <Route path="/" element={<Landing />} />  A
          <Route path="/about" element={<AboutUs />} />
          <Route path="/landing" element={<Landing />} /> 
          </Routes>

          </main>
        </div>
  );
}

export default App;