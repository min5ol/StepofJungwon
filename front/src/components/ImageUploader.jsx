import { useRef } from "react";
import axios from "axios";
import convertToWebp from "../utils/convertToWebp";

export default function ImageUploader({ url, setUrl }) {
  const fileInputRef = useRef(null);

  const handleFileChange = async () => {
    const file = fileInputRef.current.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "yangflix-upload");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dxavift7v/image/upload",
        formData
      );
      const uploadedUrl = res.data.secure_url;
      setUrl(uploadedUrl);
    } catch (err) {
      alert("이미지 업로드 실패!");
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full flex flex-col items-center space-y-[4vw] mt-[6vw]">
      {/* 썸네일 미리보기 (WebP 변환된 프리뷰) */}
      {url && (
        <img
          src={convertToWebp(url)}
          alt="썸네일 미리보기"
          className="w-[60vw] max-w-[200px] rounded-[3vw] mb-[3vw] border border-gray-700"
        />
      )}

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      <button
        type="button"
        onClick={triggerFileSelect}
        className="bg-cyan-500 text-white px-[6vw] py-[2vw] rounded-full text-[4vw] font-AppleSDGothicNeoB"
      >
        이미지 업로드
      </button>
    </div>
  );
}
