import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputField from "../components/InputField";
import Rounded from "../components/RoundedButton";
import brandLogo from "../assets/YANGFLIX.png";

export default function SignupStep1() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNext = async (e) => {
    e.preventDefault();
    setError("");

    const usernameRegex = /^[a-z0-9_-]{4,16}$/;

    if (!username) {
      setError("아이디를 입력해주세요.");
      return;
    }

    if (!usernameRegex.test(username)) {
      setError("아이디는 영소문자 및 숫자를 포함하여야 합니다.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/signup/step1", { username });

      // localStorage 저장
      localStorage.setItem("signupData", JSON.stringify({ username }));
      navigate("/signup/step2");
    } catch (err) {
      setError(err.response?.data?.message || "일시적인 오류로 진행할 수 없습니다.");
    }
  };

  return (
    <div className="min-h-[100dvh] bg-black flex flex-col items-center">
      <img src={brandLogo} className="pt-[23.26vw]" />
      <p className="pt-[3.02vw] text-white text-[6.51vw]">가입하고 원하는</p>
      <p className="text-white text-[6.51vw]">정원이의 컨텐츠를 감상하세요.</p>

      <form onSubmit={handleNext} className="w-full flex flex-col items-center">
        <div className="pt-[6.98vw] w-full flex flex-col items-center">
          <InputField
            label="아이디"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-[#E50914] text-[2.79vw] pt-[2.33vw] w-full text-left px-[11.63vw]">
            {error}
          </p>
        )}

        <div className="pt-[6.98vw]">
          <Rounded as="input" type="submit" variant="primary">다음</Rounded>
        </div>
      </form>
    </div>
  );
}
