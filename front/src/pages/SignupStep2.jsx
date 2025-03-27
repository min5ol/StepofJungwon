import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputField from "../components/InputField";
import Rounded from "../components/RoundedButton";
import brandLogo from "../assets/YANGFLIX.png";
import step1 from "../assets/step1.png";
import arrowRight from "../assets/arrow-right.png";

export default function SignupStep2() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNext = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await axios.post("http://localhost:8080/api/signup/step2", {
        password, confirmPassword,
      });

      const existing = JSON.parse(localStorage.getItem("signupData")) || {};
      existing.password = password;
      localStorage.setItem("signupData", JSON.stringify(existing));
      navigate("/signup/step3");
    } catch (err) {
      setError(err.response?.data?.message || "일시적인 오류로 진행할 수 없습니다.");
    }
  };

  const getTextColor = (cond) => cond ? "text-[#09E1DA]" : "text-[#808080]";
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumOrSpecial = /[0-9!@#$%^&*]/.test(password);
  const isLong = password.length >= 8;
  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  return (
    <div className="min-h-[100dvh] bg-black flex flex-col items-center">
      <img src={brandLogo} className="pt-[23.26vw]" />
      <img src={step1} className="pt-[5.4vw]" />
      <div className="flex items-center pt-[4.65vw] w-full px-[8.14vw] text-left">
        <img src={arrowRight} className="w-[2.67vw] h-[4.18vw] mr-[4.65vw]" />
        <div>
          <p className="text-[#808080] text-[2.79vw]">1 / 3 단계</p>
          <p className="text-white text-[2.79vw]">비밀번호를 만드세요.</p>
        </div>
      </div>

      <form onSubmit={handleNext} className="w-full flex flex-col items-center pt-[6.98vw]">
        <InputField label="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="text-white text-[2.79vw] pt-[2.33vw] w-full px-[11.63vw]">
          <p className={getTextColor(hasLetter)}>{hasLetter ? "● 문자 1개" : "○ 문자 1개"}</p>
          <p className={getTextColor(hasNumOrSpecial)}>{hasNumOrSpecial ? "● 숫자/특수문자 1개" : "○ 숫자/특수문자 1개"}</p>
          <p className={getTextColor(isLong)}>{isLong ? "● 8자 이상" : "○ 8자 이상"}</p>
        </div>

        <div className="pt-[4.65vw] w-full px-[11.63vw]">
          <InputField label="비밀번호 확인" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <p className={`pt-[2.33vw] text-[2.79vw] ${getTextColor(passwordsMatch)}`}>
            {passwordsMatch ? "● 비밀번호가 일치합니다." : "○ 비밀번호가 일치하지 않습니다."}
          </p>
        </div>

        {error && (
          <p className="text-[#E50914] text-[2.79vw] pt-[2.33vw] px-[11.63vw]">{error}</p>
        )}
        <div className="pt-[6.98vw]">
          <Rounded as="input" type="submit" variant="primary">다음</Rounded>
        </div>
      </form>
    </div>
  );
}
