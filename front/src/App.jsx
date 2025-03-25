import React from "react";
import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupStep1 from "./pages/SignupStep1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup/step1" element={<SignupStep1 />} />
      </Routes>
    </Router>
  );
}

export default App;
