// src/pages/SignupStep2.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Rounded from "../components/RoundedButton";
import brandLogo from '../assets/YANGFLIX.png';
import step1 from "../assets/step1.png";
import arrowRight from "../assets/arrow-right.png";

export default function SignupStep2() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // 조건 검사
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumberOrSpecial = /[0-9!@#$%^&*]/.test(password);
  const isLongEnough = password.length >= 8;
  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  const handleNext = (e) => {
    e.preventDefault();
    setError('');

    if (!(hasLetter && hasNumberOrSpecial && isLongEnough)) {
      setError('비밀번호는 문자 1개, 숫자/특수문자 1개 이상 포함, 8자 이상이어야 합니다.');
      return;
    }

    if (!passwordsMatch) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    console.log('✅ 비밀번호 조건 충족:', password);
    navigate("/signup/step3"); // ✅ 다음 스텝으로 이동
  };

  const getTextColor = (condition) =>
    condition ? "text-[#09E1DA]" : "text-[#808080]";

  return (
    <div className="min-h-[100dvh] bg-black flex flex-col items-center">
      <img src={brandLogo} className="pt-[23.26vw]" />
      <img src={step1} className="pt-[5.4vw]" />

      <div className="flex items-center pt-[4.65vw] w-full text-left px-[8.14vw]">
        <img src={arrowRight} className="w-[2.67vw] h-[4.18vw] mr-[4.65vw]" />
        <div>
          <p className="font-AppleSDGothicNeoM text-[#808080] text-[2.79vw]">1 / 3 단계</p>
          <p className="font-AppleSDGothicNeoM text-white text-[2.79vw]">비밀번호를 만드세요.</p>
        </div>
      </div>

      <form onSubmit={handleNext} className="w-full flex flex-col items-center pt-[6.98vw]">
        <InputField
          label="비밀번호"
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ✅ 조건 안내 */}
        <div className="text-[2.79vw] pt-[2.33vw] w-full px-[11.63vw] font-AppleSDGothicNeoL space-y-[0.5vw]">
          <p className="text-white">비밀번호는 다음 문자가 반드시 포함되어야 합니다.</p>
          <p className={getTextColor(hasLetter)}>
            {hasLetter ? "● 문자 1개" : "○ 문자 1개"}
          </p>
          <p className={getTextColor(hasNumberOrSpecial)}>
            {hasNumberOrSpecial ? "● 숫자 또는 특수 문자 1개(예: ! @ #)" : "○ 숫자 또는 특수 문자 1개(예: ! @ #)"}
          </p>
          <p className={getTextColor(isLongEnough)}>
            {isLongEnough ? "● 8자 이상" : "○ 8자 이상"}
          </p>
        </div>

        {/* 확인 인풋 */}
        <div className="pt-[4.65vw] w-full flex flex-col items-center">
          <InputField
            label="비밀번호 확인"
            placeholder="비밀번호 확인"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p
            className={`pt-[2.33vw] text-[2.79vw] w-full px-[11.63vw] font-AppleSDGothicNeoR ${
              getTextColor(passwordsMatch)
            }`}
          >
            {passwordsMatch
              ? "● 비밀번호가 일치합니다."
              : "○ 비밀번호가 일치하지 않습니다."}
          </p>
        </div>

        {/* 에러 메시지 */}
        {error && (
          <p className="text-[#E50914] font-AppleSDGothicNeoR text-[2.79vw] pt-[2.33vw]">
            {error}
          </p>
        )}

        <div className="pt-[6.98vw] w-full flex justify-center">
          <Rounded as="input" type="submit" variant="primary">
            다음
          </Rounded>
        </div>
      </form>

      <p className="pt-[44.19vw] pb-[9.3vw] text-white text-[1.86vw] font-AppleSDGothicNeoL">
        이 사이트는 Google 개인정보 처리방침과 서비스 약관이 적용됩니다.
      </p>
    </div>
  );
}
