import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import LivinWebsite from './pages/LivinWebsite';
import LoginPage from './pages/LoginPage';

// import TodoApp from './pages/TodoApp';

function App() {
  return (
    <Router>
      {/* <LivinWebsite /> */}
      <Routes>
        <Route path="/" element={<LivinWebsite />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
