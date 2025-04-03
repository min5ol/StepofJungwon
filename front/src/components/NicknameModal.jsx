// src/components/NicknameModal.jsx

import { useState } from "react";
import axios from "axios";

export default function NicknameModal({ currentNickname, onClose, onUpdate }) {
  const [nickname, setNickname] = useState(currentNickname);
  const [error, setError] = useState("");

  const handleSave = async () => {
    if (!nickname.trim()) {
      setError("닉네임을 입력해주세요.");
      return;
    }

    try {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");

      await axios.patch(
        "http://localhost:8080/api/users/nickname", // ✅ 수정된 경로
        { nickname },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onUpdate(nickname);
      onClose();
    } catch (err) {
      const message = err.response?.data?.message;
      if (message === "이미 사용 중인 닉네임입니다.") {
        setError("중복된 닉네임입니다.");
      } else {
        setError(message || "닉네임 변경 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-[5vw] w-[80vw] max-w-[400px] text-black text-[4vw]">
        <h2 className="font-bold mb-[4vw]">닉네임 변경</h2>
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full border border-gray-300 px-[3vw] py-[2vw] rounded-md mb-[2vw]"
          placeholder="새 닉네임 입력"
        />
        {error && <p className="text-red-500 text-[3.5vw] mb-[2vw]">{error}</p>}
        <div className="flex justify-end gap-[3vw] mt-[4vw]">
          <button onClick={onClose} className="text-gray-500">취소</button>
          <button onClick={handleSave} className="text-white bg-[#E50914] px-[4vw] py-[2vw] rounded-md">
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
