import { useState } from "react";
import InputField from "../components/InputField";
import Rounded from "../components/RoundedButton";
import brandLogo from "../assets/YANGFLIX.png";
import step2 from "../assets/step2.png";
import arrowRight from "../assets/arrow-right.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupStep3() {
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNext = async (e) => {
    e.preventDefault();
    setError("");

    if (!nickname) {
      setError("이름을 입력해주세요.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/signup/step3", { nickname });

      const existing = JSON.parse(localStorage.getItem("signupData")) || {};
      existing.nickname = nickname;
      localStorage.setItem("signupData", JSON.stringify(existing));

      navigate("/signup/step4");
    } catch (err) {
      setError(err.response?.data?.message || "일시적인 오류로 진행할 수 없습니다.");
    }
  };

  return (
    <div className="min-h-[100dvh] bg-black flex flex-col items-center">
      <img src={brandLogo} className="pt-[23.26vw]" />
      <img src={step2} className="pt-[5.4vw]" />
      <div className="flex items-center pt-[4.65vw] w-full px-[8.14vw] text-left">
        <img src={arrowRight} className="w-[2.67vw] h-[4.18vw] mr-[4.65vw]" />
        <div>
          <p className="text-[#808080] text-[2.79vw]">2 / 3 단계</p>
          <p className="text-white text-[2.79vw]">자신을 소개하세요.</p>
        </div>
      </div>

      <form onSubmit={handleNext} className="w-full flex flex-col items-center pt-[6.98vw]">
        <InputField label="이름" placeholder="이름" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <p className="w-full px-[11.63vw] text-[#808080] text-[2.33vw] px-[11.63vw] pt-[1.4vw]">이 이름이 프로필에 표시됩니다.</p>

        {error && (
          <p className="text-[#E50914] text-[2.79vw] px-[11.63vw] pt-[2.33vw]">{error}</p>
        )}
        <div className="pt-[6.98vw]">
          <Rounded as="input" type="submit" variant="primary">다음</Rounded>
        </div>
      </form>
    </div>
  );
}
