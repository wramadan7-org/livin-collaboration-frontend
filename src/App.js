import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import LivinWebsite from './pages/LivinWebsite';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LivinWebsite />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
