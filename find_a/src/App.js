
import React from 'react';
import Header from './components/header';
import Landing from './landing';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import AboutUs from './aboutUs';


function App() {
  return (
        <div className="App">
          <Header /> 

          <main className="content">
          <Routes>
          <Route path="/" element={<Landing />} />  
          <Route path="/about" element={<AboutUs />} />
          <Route path="/landing" element={<Landing />} /> 
          </Routes>

          </main>
        </div>
  );
}

export default App;