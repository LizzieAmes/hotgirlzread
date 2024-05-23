import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<SignIn />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
