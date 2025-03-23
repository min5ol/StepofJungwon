import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ 추가
import brandLogo from '../../assets/Brandlogo.png';
import InputField from '../../Components/InputField';
import InputTagBtn from '../../Components/InputTagBtn';

function Step1Username({ nextStep, formData, handleChange }) {
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate(); // ✅ 네비게이트 훅 선언

  const validateUsername = () => {
    const username = formData.username;

    if (!username) {
      setErrorMsg('아이디를 입력해주세요.');
    } else if (!/^[a-z0-9]{4,12}$/.test(username)) {
      setErrorMsg('영문자 또는 숫자 4~12자 이내로 입력해주세요.');
    } else {
      setErrorMsg('');
      nextStep(); // 다음 단계 이동
    }
  };

  return (
    <section className="pl-[11.63vw] pr-[11.63vw] pt-[9.3vw]">
      <img className="mx-auto w-[18.6vw]" src={brandLogo} alt="Yangflix 로고" />

      <p className="text-white text-[6vw] font-AppleSDGothicNeoR text-center pt-[4.65vw]">
        가입하고 원하는
      </p>
      <p className="text-white text-[6vw] font-AppleSDGothicNeoR text-center">
        정원이의 컨텐츠를 감상하세요.
      </p>

      <div className="pt-[13.95vw]">
        <InputField
          name="아이디"
          placeholder="영문자 또는 숫자 4~12자 이내"
          type="text"
          value={formData.username}
          onChange={(e) => {
            const val = e.target.value;
            handleChange('username', val);
          }}
        />

        {errorMsg && (
          <p className="text-brandcolor text-[2.79vw] mt-[1.5vw] font-AppleSDGothicNeoL">
            {errorMsg}
          </p>
        )}
      </div>

      <div className="pt-[6.98vw]">
        <InputTagBtn
          value="다음"
          className="bg-brandcolor text-white"
          onClick={validateUsername}
        />
      </div>

      <p className="text-center text-[#808080] text-[3.72vw] pt-[32.56vw] font-AppleSDGothicNeoL">
        이미 계정이 있나요?
      </p>

      {/* ✅ navigate를 통한 페이지 이동 */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate('/')}
          className="text-white text-[3.72vw] pt-[4.65vw] font-AppleSDGothicNeoL underline"
        >
          Yangflix로 로그인
        </button>
      </div>

    </section>
  );
}

export default Step1Username;
