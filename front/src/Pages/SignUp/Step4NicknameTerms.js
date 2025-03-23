import React, { useState } from 'react';
import brandLogo from '../../assets/Brandlogo.png';
import stepthree from '../../assets/3step.png';
import arrowLeft from '../../assets/arrow-left.png';
import InputField from '../../Components/InputField';
import InputTagBtn from '../../Components/InputTagBtn';
import TermsModal from '../../Components/TermsModal';

function Step4NicknameTerms({ formData, handleChange, onSubmit, prevStep }) {
  const [agree, setAgree] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showTerms, setShowTerms] = useState(false);

  const handleSubmit = () => {

    if (!formData.nickname) {
      setErrorMsg('닉네임을 입력해주세요.');
    } else if (!agree) {
      setErrorMsg('약관에 동의해야 가입이 가능합니다.');
    } else {
      setErrorMsg('');
      onSubmit(); // 최종 제출
    }
  };

  return (
    <section className="pl-[11.63vw] pr-[11.63vw] pt-[9.3vw]">
      {/* 🔷 헤더 및 단계 안내 */}
      <img className="mx-auto w-[18.6vw]" src={brandLogo} alt="Yangflix 로고" />
      <img className="w-[83.72vw] h-[1.6vw] mt-[4.65vw]" src={stepthree} alt="3단계" />
      <div className="flex items-center pt-[3.02vw]">
        <img className="w-[2.67vw] h-[4.18vw]" src={arrowLeft} alt="뒤로가기" />
        <div>
          <p className="text-[#808080] text-[2.79vw] font-AppleSDGothicNeoM pl-[4.65vw]">3/3단계</p>
          <p className="text-white text-[2.79vw] font-AppleSDGothicNeoM pl-[4.65vw]">닉네임 및 약관 동의</p>
        </div>
      </div>

      {/* 🔷 닉네임 입력 */}
      <div className="pt-[13.95vw]">
        <InputField
          name="닉네임"
          placeholder="2~8자 사이, 한글 가능"
          type="text"
          value={formData.nickname}
          onChange={(e) => handleChange('nickname', e.target.value)}
        />

        {/* 🔷 약관 체크 */}
        <label className="flex items-center mt-[4.65vw] text-white text-[3.5vw] font-AppleSDGothicNeoM">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="w-[4.5vw] h-[4.5vw] mr-[2vw]"
          />
          <span>
            개인정보 수집 및 이용에 동의합니다.
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowTerms(true);
              }}
              className="underline text-[2.79vw] ml-[1vw] font-AppleSDGothicNeoM"
            >
              약관 보기
            </a>
          </span>
        </label>

        {/* 🔷 에러 메시지 */}
        {errorMsg && (
          <p className="text-brandcolor text-[2.79vw] mt-[1.5vw] font-AppleSDGothicNeoL">
            {errorMsg}
          </p>
        )}
      </div>

      {/* 🔷 가입 버튼 */}
      <div className="pt-[5.58vw]">
        <InputTagBtn
          value="가입하기"
          className={`${agree ? 'bg-brandcolor text-white' : 'bg-gray-400 text-white'}`}
          onClick={handleSubmit}
        />
      </div>

      {/* 🔷 이전 버튼 */}
      <div className="pt-[44.19vw] flex justify-center">
        <button
          onClick={prevStep}
          className="text-white underline text-[2.79vw] block text-center font-AppleSDGothicNeoL"
        >
          이전으로 돌아가기
        </button>
      </div>

      {/* 🔷 약관 모달 */}
      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
    </section>
  );
}

export default Step4NicknameTerms;
