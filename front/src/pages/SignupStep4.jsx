// src/pages/SignupStep4.jsx
import { useState } from "react";
import InputField from "../components/InputField";
import Rounded from "../components/RoundedButton";
import brandLogo from "../assets/YANGFLIX.png";
import step3 from "../assets/step3.png";
import arrowRight from "../assets/arrow-right.png";
import AgreementModal from "../components/AgreementModal";

export default function SignupStep4() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      setError("약관에 동의해야 가입할 수 있습니다.");
      return;
    }
    // TODO: 이메일 유효성 검사 + 제출 로직
    console.log("회원가입 완료:", email);
  };

  return (
    <div className="min-h-[100dvh] bg-black flex flex-col items-center text-white relative">
      {showModal && <AgreementModal onClose={() => setShowModal(false)} />}

      <img src={brandLogo} className="pt-[23.26vw]" />
      <img src={step3} className="pt-[5.4vw]" />

      <div className="flex items-center pt-[4.65vw] w-full text-left px-[8.14vw]">
        <img src={arrowRight} className="w-[2.67vw] h-[4.18vw] mr-[4.65vw]" />
        <div>
          <p className="font-AppleSDGothicNeoM text-[#808080] text-[2.79vw]">3 / 3 단계</p>
          <p className="font-AppleSDGothicNeoM text-white text-[2.79vw]">이메일 및 약관 동의</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center pt-[6.98vw]">
        <InputField
          label="이메일"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* 약관 체크박스 */}
        <div className="w-full px-[11.63vw] pt-[4.65vw] text-[2.79vw] font-AppleSDGothicNeoR">
          <label className="flex items-start space-x-[2.33vw]">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mt-[0.5vw]"
            />
            <span>
              예, 저는 개인정보 처리방침에 따라 개인정보 수집 및 활용에 동의합니다.{" "}
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-[#09E1DA] underline"
              >
                (상세정보 보기)
              </button>
            </span>
          </label>
        </div>

        {error && (
          <p className="w-full px-[11.58vw] text-[#E50914] pt-[2.33vw] text-[2.79vw] font-AppleSDGothicNeoR">
            {error}
          </p>
        )}

        <div className="pt-[6.98vw] w-full flex justify-center">
          <Rounded
            as="input"
            type="submit"
            variant={agree ? "primary" : "disabled"}
            disabled={!agree}
          >
            가입하기
          </Rounded>
        </div>
      </form>

      <p className="pt-[90vw] pb-[9.3vw] text-white text-[1.86vw] font-AppleSDGothicNeoL">
        이 사이트는 Google 개인정보 처리방침과 서비스 약관이 적용됩니다.
      </p>
    </div>
  );
}
