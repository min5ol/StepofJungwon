import { useState } from "react";
import InputField from "../components/InputField";
import Rounded from "../components/RoundedButton";
import brandLogo from "../assets/YANGFLIX.png";
import step2 from "../assets/step2.png";
import arrowRight from "../assets/arrow-right.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupStep3() {
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = async (e) => {
    e.preventDefault();
    setError("");

    if (!nickname) {
      setError("이름을 입력해주세요.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.get("http://localhost:8080/api/users/check-nickname", {
        params: { nickname },
        withCredentials: true, // ✅ 꼭 추가!
      });

      if (response.data === true) {
        setError("이미 사용 중인 닉네임입니다.");
      } else {
        console.log("닉네임 사용 가능:", nickname);
        navigate("/signup/step4");
      }
    } catch (err) {
      console.error("닉네임 중복 검사 오류:", err);
      setError("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
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
          <Rounded as="input" type="submit" variant="primary" disabled={loading}>
            {loading ? "확인 중..." : "다음"}
          </Rounded>
        </div>
      </form>

      <p className="pt-[44.19vw] pb-[9.3vw] text-white text-[1.86vw] font-AppleSDGothicNeoL">
        이 사이트는 Google 개인정보 처리방침과 서비스 약관이 적용됩니다.
      </p>
    </div>
  );
}
