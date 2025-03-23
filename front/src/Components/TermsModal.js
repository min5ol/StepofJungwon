import React from 'react';

function TermsModal({ onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center">
      <div className="bg-white w-[85vw] max-h-[80vh] overflow-y-auto p-[5vw] rounded-xl text-black text-[3.5vw]">
        <h2 className="text-[4.5vw] font-bold mb-4">개인정보 수집 및 이용 약관</h2>
        <p className="mb-4 leading-relaxed text-[3.5vw] font-AppleSDGothicNeoM">
          yangflix는 Google의 개인정보처리방침에 따라 운영됩니다.
          다음과 같은 정보가 수집될 수 있으며, 이는 사용자 경험 향상 및 보안 강화를 위해 사용됩니다:
        </p>
        <ul className="list-disc ml-6 text-[3.2vw] mb-4 font-AppleSDGothicNeoM">
          <li>계정 정보: 이메일, 사용자명, 닉네임</li>
          <li>접속 로그, 기기 정보 등 자동 수집 정보</li>
          <li>서비스 이용 중 사용자가 직접 제공한 정보</li>
        </ul>
        <p className="mb-4 text-[3.2vw] font-AppleSDGothicNeoM">
          수집된 정보는 yangflix 서비스 제공, 보안 강화, 오류 분석, 맞춤형 콘텐츠 제공에 사용되며,
          제3자에게는 제공되지 않습니다.
        </p>
        <p className="text-[3vw] mb-2 font-AppleSDGothicNeoM">
          전체 약관은 아래 링크에서 확인하실 수 있습니다:
        </p>
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-600 text-[3vw] font-AppleSDGothicNeoM"
        >
          Google 약관 전체 보기 →
        </a>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 bg-brandcolor text-white rounded-full text-[3.5vw] font-AppleSDGothicNeoM"
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export default TermsModal;
