import { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import ImageUploader from "./ImageUploader";

export default function EpisodeForm() {
  const [contentId, setContentId] = useState("");
  const [title, setTitle] = useState("");
  const [episodeNumber, setEpisodeNumber] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!thumbnailUrl) return alert("이미지를 업로드해주세요!");

    try {
      await axios.post("http://localhost:8080/api/episodes", {
        contentId,
        title,
        episodeNumber,
        releaseDate,
        thumbnailUrl,
      });
      setMessage("✅ 에피소드가 성공적으로 등록되었습니다.");
      setContentId(""); setTitle(""); setEpisodeNumber(""); setReleaseDate(""); setThumbnailUrl("");
    } catch (err) {
      setMessage("❌ 등록에 실패했습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-[5vw]">
      <InputField label="콘텐츠 ID" value={contentId} onChange={(e) => setContentId(e.target.value)} />
      <InputField label="에피소드 제목" value={title} onChange={(e) => setTitle(e.target.value)} />
      <InputField label="에피소드 번호" value={episodeNumber} onChange={(e) => setEpisodeNumber(e.target.value)} />
      <InputField label="방영일 (YYYY-MM-DD)" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />

      <ImageUploader onUpload={(url) => setThumbnailUrl(url)} />

      <button
        type="submit"
        className="bg-[#E50914] text-white w-full py-[3vw] rounded-full text-[4vw] font-semibold hover:bg-[#ff2e2e] transition"
      >
        에피소드 등록
      </button>

      {message && <p className="text-[3.5vw] text-white pt-[2vw] text-center">{message}</p>}
    </form>
  );
}
