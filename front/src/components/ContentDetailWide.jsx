import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { convertToWebp } from "../utils/imageUtils";

export default function ContentDetailWide() {
  const { id } = useParams(); // /cover/:id
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/content/${id}`).then((res) => {
      setContent(res.data);
    });
    axios.get(`http://localhost:8080/api/content/${id}/episodes`).then((res) => {
      setEpisodes(res.data);
    });
  }, [id]);

  if (!content) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다!");
  };

  const handlePlay = () => {
    if (episodes.length > 0) {
      window.open(episodes[0].videoUrl, "_blank");
    }
  };

  const handleClose = () => {
    navigate(`/${content.releaseYear}`);
  };

  return (
    <div className="bg-black text-white font-AppleSDGothicNeoR min-h-[100dvh] pb-[10vw]">
      {/* 📌 상단 고정 썸네일 */}
      <div className="sticky top-0 z-20 bg-black flex flex-col items-center">
        <img src={convertToWebp(content.thumbnailUrl)} className="w-full max-w-[90vw] rounded-b-xl" />
        <div className="flex justify-between w-full max-w-[90vw] px-[4vw] pt-[2vw]">
          <button onClick={handleClose}>❌ 닫기</button>
          <div className="flex gap-[3vw]">
            <button onClick={handlePlay}>▶️ 재생</button>
            <button>💖 찜</button>
            <button onClick={handleShare}>🔗 공유</button>
          </div>
        </div>
      </div>

      {/* 📝 콘텐츠 설명 */}
      <div className="px-[5vw] pt-[5vw]">
        <h2 className="text-[5vw] font-bold">{content.title}</h2>
        <p className="text-[3.5vw] mt-[2vw]">{content.description}</p>
      </div>

      {/* 🎬 에피소드 목록 (16:9 썸네일) */}
      <div className="px-[5vw] mt-[6vw] space-y-[4vw]">
        {episodes.map((ep) => (
          <div key={ep.id} className="relative">
            <a href={ep.videoUrl} target="_blank" rel="noreferrer">
              <img
                src={convertToWebp(ep.thumbnailUrl)}
                className="rounded-lg w-full aspect-video object-cover"
              />
            </a>
            <div className="text-[3.5vw] mt-[1vw] flex justify-between">
              <span>{ep.title}</span>
              <button>➕</button> {/* 찜하기 에피소드용 */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
