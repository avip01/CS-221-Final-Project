
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SettingsPage from './settings';
import theme from "tailwindcss/defaultTheme";

function App() {
  return (
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/settings" element={<SettingsPage />} />
            {/* Add other routes as needed */}
          </Routes>
        </Router>
      </ChakraProvider>
  );
}

export default App;