import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import brandLogo from '../assets/Brandlogo.png';
import InputField from '../Components/InputField';
import InputTagBtn from '../Components/InputTagBtn';
import TagAbtn from '../Components/TagAbtn';
import { login } from '../api/auth';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErrorMessage('');

    if (!username) {
      setErrorMessage('아이디를 입력해주세요.');
      return;
    }
    if (!password) {
      setErrorMessage('비밀번호를 입력해주세요.');
      return;
    }

    try {
      const res = await login(username, password);
      localStorage.setItem('token', res.token);
      alert('로그인 성공!');
      // 이후 페이지 이동
      // navigate('/home'); 등으로 설정 가능
    } catch (err) {
      if (err.response?.status === 401) {
        setErrorMessage('등록된 계정이 아니거나 아이디 또는 비밀번호를 잘못 입력하셨습니다.');
      } else {
        setErrorMessage('일시적인 오류로 로그인 할 수 없습니다. 잠시 후 다시 이용해주세요.');
      }
    }
  };

  return (
    <section className="pl-[11.63vw] pr-[11.63vw]">
      {/* 🔷 로고 & 문구 */}
      <header>
        <div className="pt-[9.3vw]">
          <img className="mx-auto w-[18.6vw]" src={brandLogo} alt="Yangflix 로고" />
        </div>
        <p className="font-AppleSDGothicNeoR text-[6.51vw] text-white text-center pt-[4.65vw]">
          Yangflix에 로그인하기
        </p>
      </header>

      {/* 🔷 입력 폼 */}
      <section className="pt-[13.95vw]">
        <InputField
          name="아이디"
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          name="비밀번호"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </section>

      {/* 🔷 에러 메시지 */}
      {errorMessage && (
        <p className="text-[2.79vw] text-brandcolor pt-[2.33vw] font-AppleSDGothicNeoL">
          {errorMessage}
        </p>
      )}

      {/* 🔷 로그인 버튼 */}
      <section className="pt-[4.65vw]">
        <InputTagBtn
          value="로그인하기"
          className="bg-brandcolor text-white"
          onClick={handleLogin}
        />
      </section>

      {/* 🔷 비회원 로그인 */}
      <section className="pt-[2.33vw]">
        <TagAbtn href="#" name="비회원으로 시작하기" className="bg-white text-brandcolor" />
      </section>

      {/* 🔷 비밀번호 찾기 */}
      <section className="pt-[6.98vw]">
        <a
          href="#"
          className="block text-white text-center font-AppleSDGothicNeoL text-[2.79vw] underline"
        >
          비밀번호를 잊으셨나요?
        </a>
      </section>

      {/* 🔷 계정 없음 */}
      <section className="pt-[13.95vw]">
        <p className="text-center font-AppleSDGothicNeoL text-[2.79vw] text-[#808080]">
          계정이 없나요?
        </p>
      </section>

      {/* 🔷 회원가입 이동 */}
      <section className="pt-[2.33vw]">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/signup');
          }}
          className="block text-white text-center font-AppleSDGothicNeoL text-[2.79vw] underline"
        >
          yangflix에 가입하기
        </a>
      </section>

      {/* 🔷 약관 고지 */}
      <section className="pt-[44.19vw] pb-[9.3vw]">
        <p className="text-center font-AppleSDGothicNeoL text-[1.86vw] text-white">
          이 사이트는 Google 개인정보 처리방침과 서비스 약관이 적용됩니다.
        </p>
      </section>
    </section>
  );
}

export default Login;
