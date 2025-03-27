import { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import ImageUploader from "./ImageUploader";

export default function ContentForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!thumbnailUrl) return alert("이미지를 업로드해주세요!");

    try {
      await axios.post("http://localhost:8080/api/content", {
        title,
        description,
        genre,
        thumbnailUrl,
      });

      setMessage("✅ 콘텐츠가 성공적으로 등록되었습니다.");
      setTitle("");
      setDescription("");
      setGenre("");
      setThumbnailUrl("");
    } catch (err) {
      setMessage("❌ 등록에 실패했습니다.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center space-y-[4vw]"
    >
      <InputField label="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
      <InputField label="설명" value={description} onChange={(e) => setDescription(e.target.value)} />
      <InputField label="장르" value={genre} onChange={(e) => setGenre(e.target.value)} />

      <ImageUploader url={thumbnailUrl} setUrl={setThumbnailUrl} />

      <input
        type="submit"
        value="콘텐츠 등록"
        className="bg-[#E50914] text-white px-[6vw] py-[2.5vw] rounded-full text-[4vw] font-AppleSDGothicNeoB"
      />
      {message && <p className="text-[3.5vw] text-white pt-[2vw]">{message}</p>}
    </form>
  );
}
