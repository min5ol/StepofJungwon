import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Rounded from "../components/RoundedButton";
import brandLogo from '../assets/YANGFLIX.png';

export default function SignupStep1() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    setError("");

    const usernameRegex = /^[a-z0-9_-]{4,16}$/; // 영소문자 + 숫자 + 언더바

    if (!username) {
      setError("아이디를 입력해주세요.");
    } else if (!usernameRegex.test(username)) {
      setError("아이디는 영소문자 및 숫자를 포함하여야 합니다.");
    } else if (username === "kkulbbang") {
      setError("현재 아이디는 사용 중 입니다.");
    } else {
      try {
        console.log("다음 단계로:", username);
        navigate("/signup/step2");
      } catch (err) {
        setError("일시적인 오류로 로그인 할 수 없습니다. 잠시 후 다시 이용해주세요.");
      }
    }
  };

  return (
    <div className="min-h-[100dvh] bg-black flex flex-col items-center">
      <img src={brandLogo} className="pt-[23.26vw]" />
      <p className="pt-[3.02vw] text-white font-AppleSDGothicNeoR text-[6.51vw]">가입하고 원하는</p>
      <p className="text-white font-AppleSDGothicNeoR text-[6.51vw]">정원이의 컨텐츠를 감상하세요.</p>

      <form onSubmit={handleNext} className="w-full flex flex-col items-center">
        <div className="pt-[6.98vw] w-full flex flex-col items-center">
          <InputField
            label="아이디"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* 에러 메시지 */}
        {error && (
          <p className="text-[#E50914] text-[2.79vw] font-AppleSDGothicNeoR pt-[2.33vw] w-full text-left px-[11.63vw]">
            {error}
          </p>
        )}

        <div className="pt-[6.98vw]">
          <Rounded as="input" type="submit" variant="primary">
            다음
          </Rounded>
        </div>
      </form>

      <p className="pt-[32.56vw] text-[#808080] font-AppleSDGothicNeoL text-[3.72vw]">
        이미 계정이 있나요?
      </p>
      <a
        href="/login"
        className="pt-[4.65vw] underline font-AppleSDGothicNeoL text-[3.72vw] text-white"
      >
        여기에서 로그인하세요.
      </a>

      <p className="pt-[66.74vw] pb-[9.3vw] text-white text-[1.86vw] font-AppleSDGothicNeoL">
        이 사이트는 Google 개인정보 처리방침과 서비스 약관이 적용됩니다.
      </p>
    </div>
  );
}
