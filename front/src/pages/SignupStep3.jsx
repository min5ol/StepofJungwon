// src/pages/SignupStep3.jsx
import { useState } from "react";
import InputField from "../components/InputField";
import Rounded from "../components/RoundedButton";
import brandLogo from '../assets/YANGFLIX.png';
import step2 from "../assets/step2.png";
import arrowRight from "../assets/arrow-right.png";

export default function SignupStep3() {
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    setError("");

    if (!nickname) {
      setError("이름을 입력해주세요.");
      return;
    }

    // ❗ 실제로는 여기서 백엔드 중복 확인 API 호출
    if (nickname === "정원이") {
      setError("이미 사용 중인 닉네임입니다.");
      return;
    }

    console.log("닉네임 통과:", nickname);
    // 다음 단계로 이동 로직 작성
  };

  return (
    <div className="min-h-[100dvh] bg-black flex flex-col items-center">
      <img src={brandLogo} className="pt-[23.26vw]" />
      <img src={step2} className="pt-[5.4vw]" />

      <div className="flex items-center pt-[4.65vw] w-full text-left px-[8.14vw]">
        <img src={arrowRight} className="w-[2.67vw] h-[4.18vw] mr-[4.65vw]" />
        <div>
          <p className="font-AppleSDGothicNeoM text-[#808080] text-[2.79vw]">2 / 3 단계</p>
          <p className="font-AppleSDGothicNeoM text-white text-[2.79vw]">자신을 소개하세요.</p>
        </div>
      </div>

      <form onSubmit={handleNext} className="w-full flex flex-col items-center pt-[6.98vw]">
        <InputField
          label="이름"
          placeholder="이름"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <p className="text-[#808080] font-AppleSDGothicNeoL text-[2.33vw] text-left w-full px-[11.63vw] pt-[1.4vw]">
          이 이름이 프로필에 표시됩니다.
        </p>

        {error && (
          <p className="text-[#E50914] font-AppleSDGothicNeoR text-[2.79vw] text-left w-full px-[11.63vw] pt-[2.33vw]">
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
