import React from "react";
import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupStep1 from "./pages/SignupStep1";
import SignupStep2 from "./pages/SignupStep2";
import SignupStep3 from "./pages/SignupStep3";
import SignupStep4 from "./pages/SignupStep4";
import SignupComplete from "./pages/SignupComplete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/step1" element={<SignupStep1 />} />
        <Route path="/signup/step2" element={<SignupStep2 />} />
        <Route path="/signup/step3" element={<SignupStep3 />} />
        <Route path="/signup/step4" element={<SignupStep4 />} />
        <Route path="/signup/complete" element={<SignupComplete />} />
      </Routes>
    </Router>
  );
}

export default App;
