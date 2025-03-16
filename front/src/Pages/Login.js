import React from 'react';
import '../App.css';
import brandLogo from '../assets/Brandlogo.png';
import InputField from '../Components/InputField';

function Login() {
  return (
    // 메인 컨테이너
    <section className='pl-[11.63vw] pr-[11.63vw]'>
      <header>
        <div className="pt-[9.3vw]">
          <img className="mx-auto w-[18.6vw]" src={brandLogo}></img>
        </div>
        <p className="font-AppleSDGothicNeoR text-[6.51vw] text-white text-center pt-[4.65vw]">Yangflix에 로그인하기</p>
      </header>

      <section className="pt-[13.95vw]">
        <InputField name="아이디" type="text" placeholder="아이디" />
        <InputField name="비밀번호" type="password" placeholder="비밀번호" />
      </section>

    </section>
  );
}

export default Login;
