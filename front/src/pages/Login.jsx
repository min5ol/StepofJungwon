// src/pages/Login.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import brandLogo from '../assets/YANGFLIX.png';
import InputField from "../components/InputField";
import Rounded from "../components/RoundedButton";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [autoLogin, setAutoLogin] = useState(false); // ✅ 자동 로그인 체크 여부
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!username && !password) {
      setError('아이디와 비밀번호를 입력해주세요.');
      return;
    } else if (!username) {
      setError('아이디를 입력해주세요.');
      return;
    } else if (!password) {
      setError('비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/api/login',
        { username, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const token = response.data.token;

      // ✅ 자동 로그인 여부에 따라 저장소 선택
      if (autoLogin) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }

      console.log('로그인 성공:', token);
      navigate("/year");
    } catch (err) {
      if (err.response?.status === 401) {
        setError('아이디 또는 비밀번호를 잘못 입력하셨습니다.');
      } else {
        setError('일시적인 오류로 로그인 할 수 없습니다. 잠시 후 다시 이용해주세요.');
      }
    }
  };

  return (
    <div className="min-h-[100dvh] bg-black flex flex-col items-center">
      <img className="mt-[23.26vw]" src={brandLogo} />
      <p className="font-AppleSDGothicNeoR text-[6.51vw] mt-[4.65vw] pb-[13.95vw] text-white">
        Yangflix에 로그인 하기
      </p>

      <form onSubmit={handleLogin} className="w-full flex flex-col items-center">
        <InputField
          label="아이디"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="pt-[3.72vw]">
          <InputField
            label="비밀번호"
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* ✅ 자동 로그인 체크박스 */}
        <div className="w-full px-[11.63vw] pt-[3vw] text-white text-[2.79vw] font-AppleSDGothicNeoL">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={autoLogin}
              onChange={() => setAutoLogin(!autoLogin)}
            />
            <span>자동 로그인</span>
          </label>
        </div>

        {error && (
          <p className="text-[#E50914] text-[2.79vw] font-AppleSDGothicNeoR pt-[2.33vw] w-full text-left px-[11.63vw]">
            {error}
          </p>
        )}

        <div className="pt-[4.65vw] w-full flex justify-center">
          <Rounded as="input" type="submit" variant="primary">
            로그인하기
          </Rounded>
        </div>
      </form>

      <div className="pt-[2.33vw]">
        <Rounded as="a" href="/year" variant="secondary">
          비회원으로 시작하기
        </Rounded>
      </div>

      <a href="/passwordFind" className="underline text-white font-AppleSDGothicNeoL text-[2.79vw] pt-[6.98vw]">
        비밀번호를 잊었나요?
      </a>

      <p className="font-AppleSDGothicNeoL text-[2.79vw] pt-[13.95vw] text-[#808080]">
        계정이 없나요?
      </p>

      <a href="/signup/step1" className="font-AppleSDGothicNeoL text-[2.79vw] text-white underline pt-[2.33vw]">
        Yangflix에 가입하기
      </a>

      <p className="font-AppleSDGothicNeoL text-white text-[1.86vw] pt-[44.19vw] pb-[9.3vw]">
        이 사이트는 Google 개인정보 처리방침과 서비스 약관이 적용됩니다.
      </p>
    </div>
  );
}
