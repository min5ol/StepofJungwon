import React from 'react';
import '../App.css';
import brandLogo from '../assets/Brandlogo.png';
import InputField from '../components/InputField';
import InputTagBtn from '../components/InputTagBtn';
import TagAbtn from '../components/TagAbtn';

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

      <section className="pt-[4.65vw]">
        <InputTagBtn value="로그인하기" bg="brandcolor" color="white" />
      </section>

      <section className="pt-[2.33vw]">
        <TagAbtn href="#" name="비회원으로 시작하기" bg="white" color="brandcolor" />
      </section>

    </section>
  );
}

export default Login;
