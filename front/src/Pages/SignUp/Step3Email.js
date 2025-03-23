// components/SignUp/Step3Email.js
import React, { useState } from 'react';
import brandLogo from '../../assets/Brandlogo.png';
import steptwo from '../../assets/2step.png';
import arrowLeft from '../../assets/arrow-left.png';
import InputField from '../../Components/InputField';
import InputTagBtn from '../../Components/InputTagBtn';

function Step3Email({ formData, handleChange, nextStep, prevStep }) {
  const [errorMsg, setErrorMsg] = useState('');

  const validateEmail = () => {
    console.log('[📧 입력된 이메일]', formData.email);

    if (!formData.email) {
      setErrorMsg('이메일을 입력해주세요.');
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      setErrorMsg('올바른 이메일 형식이 아닙니다.');
    } else {
      setErrorMsg('');
      console.log('[✅ 유효성 통과] 이메일 확인 완료');
      nextStep();
    }
  };

  return (
    <section className="pl-[11.63vw] pr-[11.63vw] pt-[9.3vw]">
      <img className="mx-auto w-[18.6vw]" src={brandLogo} alt="Yangflix 로고" />
      <img className="w-[83.72vw] h-[1.6vw] mt-[4.65vw]" src={steptwo} alt="진행 단계 표시" />
      <div className="flex items-center pt-[3.02vw]"> 
        <img className="w-[2.67vw] h-[4.18vw]" src={arrowLeft} alt="이전 단계 화살표" />
        <div>
          <p className="text-[#808080] text-[2.79vw] font-AppleSDGothicNeoM pl-[4.65vw]">2/3단계</p>
          <p className="text-white text-[2.79vw] font-AppleSDGothicNeoM pl-[4.65vw]">이메일을 입력하세요.</p>
        </div>
      </div>

      <div className="pt-[13.95vw]">
        <InputField
          name="이메일"
          type="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)} // ✅ 변경됨!
        />
        {errorMsg && (
          <p className="text-brandcolor text-[2.79vw] mt-[1.5vw] font-AppleSDGothicNeoL">
            {errorMsg}
          </p>
        )}
      </div>

      <div className="pt-[5.58vw]">
        <InputTagBtn value="다음" className="bg-brandcolor text-white" onClick={validateEmail} />
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

export default Step3Email;
