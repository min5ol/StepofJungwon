import { useEffect } from "react";

export default function AgreementModal({ onClose }) {
  // ✅ ESC 키로 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // ✅ 바깥 클릭 시 닫기
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg p-[4vw] w-[80vw] max-w-[500px] font-AppleSDGothicNeoM">
        <h2 className="text-[5vw] font-semibold mb-[2vw] text-black">
          개인정보 수집 및 활용 요약
        </h2>
        <ul className="text-[3.5vw] text-gray-800 list-disc pl-5 space-y-[1vw]">
          <li>서비스 제공을 위한 필수 정보(이메일 등)를 수집합니다.</li>
          <li>회원 식별 및 본인 확인에 사용됩니다.</li>
          <li>보관 기간: 회원 탈퇴 시까지 보관 후 파기합니다.</li>
        </ul>
        <a
          href="https://policies.google.com/privacy?hl=ko"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[#09E1DA] text-[3vw] mt-[3vw] underline"
        >
          Google 원문 보기
        </a>
        <button
          onClick={onClose}
          className="mt-[4vw] text-white bg-[#E50914] px-[6vw] py-[2vw] rounded-full text-[3.5vw]"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
