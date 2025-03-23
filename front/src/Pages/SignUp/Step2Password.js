// components/SignUp/Step2Password.js
import React, { useState } from 'react';
import brandLogo from '../../assets/Brandlogo.png';
import stepone from '../../assets/1step.png';
import arrowLeft from '../../assets/arrow-left.png';
import InputField from '../../Components/InputField';
import InputTagBtn from '../../Components/InputTagBtn';

function Step2Password({ prevStep, nextStep }) {
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const isValidPassword = (pw) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/.test(pw);
  };

  const handleNext = () => {
    if (!password || !confirmPwd) {
      setErrorMsg('비밀번호를 모두 입력해주세요.');
    } else if (!isValidPassword(password)) {
      setErrorMsg('8자 이상, 영문+숫자 포함이어야 합니다.');
    } else if (password !== confirmPwd) {
      setErrorMsg('비밀번호가 일치하지 않습니다.');
    } else {
      setErrorMsg('');
      nextStep(); // 다음 단계로
    }
  };

  return (
    <section className="pl-[11.63vw] pr-[11.63vw] pt-[9.3vw]">
      <img className="mx-auto w-[18.6vw]" src={brandLogo} alt="Yangflix 로고" />
      <img className="w-[83.72vw] h-[1.6vw] mt-[4.65vw]" src={stepone} />
      <div className="flex items-center pt-[3.02vw]"> 
        <img className="w-[2.67vw] h-[4.18vw]" src={arrowLeft} />
        <div>
          <p className="text-[#808080] text-[2.79vw] font-AppleSDGothicNeoM pl-[4.65vw]">1/3단계</p>
          <p className="text-white text-[2.79vw] font-AppleSDGothicNeoM pl-[4.65vw]">비밀번호를 만드세요</p>
        </div>
      </div>

      <div className="pt-[13.95vw]">
        <InputField
          name="비밀번호"
          type="password"
          placeholder="영문+숫자 포함, 8자 이상"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          name="비밀번호 확인"
          type="password"
          placeholder="다시 한번 입력해주세요"
          value={confirmPwd}
          onChange={(e) => setConfirmPwd(e.target.value)}
        />

        {errorMsg && (
          <p className="text-brandcolor text-[2.79vw] mt-[1.5vw] font-AppleSDGothicNeoL">
            {errorMsg}
          </p>
        )}
      </div>

      <div className="pt-[5.58vw]">
        <InputTagBtn value="다음" className="bg-brandcolor text-white" onClick={handleNext} />
      </div>

      <div className="pt-[44.19vw] flex justify-center">
        <button
          onClick={prevStep}
          className="text-white underline text-[2.79vw] block text-center font-AppleSDGothicNeoL"
        >
          이전으로 돌아가기
        </button>
      </div>
    </section>
  );
}

export default Step2Password;
