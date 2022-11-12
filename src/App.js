import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LivinWebsite from './pages/LivinWebsite';
import LoginPage from './pages/LoginPage';

// Import Store
import store from './reduxs/store';

function App() {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<LivinWebsite />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
