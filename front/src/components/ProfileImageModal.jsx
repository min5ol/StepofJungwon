import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import axios from "axios";

const images = [profile1, profile2, profile3, profile4];

export default function ProfileImageModal({ onClose, currentImage, onUpdate }) {
  const handleImageClick = async (img) => {
    try {
      await axios.patch(
        "http://localhost:8080/api/users/profile/image", // ✅ 경로 수정
        { profileImage: img },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token") || sessionStorage.getItem("token")}`,
          },
        }
      );

      onUpdate(img);  // 부모 상태 반영
      onClose();      // 모달 닫기
    } catch (err) {
      alert("이미지 변경 실패");
      console.error(err); // 에러 로깅 추가
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-[4vw] flex flex-col items-center">
        <h2 className="text-black text-[4vw] font-bold mb-[3vw]">프로필 이미지 선택</h2>
        <div className="grid grid-cols-2 gap-[3vw]">
          {images.map((img) => (
            <img
              key={img}
              src={img}
              onClick={() => handleImageClick(img)}
              className={`w-[20vw] h-[20vw] rounded-full border-4 cursor-pointer ${
                img === currentImage ? "border-[#E50914]" : "border-transparent"
              }`}
              alt="profile option"
            />
          ))}
        </div>
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
