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
import Year from "./pages/Year";
import AdminPage from "./pages/AdminPage";
import YearPage2025 from "./pages/YearPage2025";
import YearPage2024 from "./pages/YearPage2024";
import YearPage2023 from "./pages/YearPage2023";
import YearPage2022 from "./pages/YearPage2022";
import YearPage2021 from "./pages/YearPage2021";
import YearPage2020 from "./pages/YearPage2020";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup/step1" element={<SignupStep1 />} />
          <Route path="/signup/step2" element={<SignupStep2 />} />
          <Route path="/signup/step3" element={<SignupStep3 />} />
          <Route path="/signup/step4" element={<SignupStep4 />} />
          <Route path="/signup/complete" element={<SignupComplete />} />
          <Route path="/year" element={<Year />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/2025" element={<YearPage2025 />} />
          <Route path="/2024" element={<YearPage2024 />} />
          <Route path="/2023" element={<YearPage2023 />} />
          <Route path="/2022" element={<YearPage2022 />} />
          <Route path="/2021" element={<YearPage2021 />} />
          <Route path="/2020" element={<YearPage2020 />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
