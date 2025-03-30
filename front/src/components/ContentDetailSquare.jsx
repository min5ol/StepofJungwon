// src/components/ContentDetailSquare.jsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ContentDetailSquare() {
  const { id } = useParams(); // 콘텐츠 ID
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/content/${id}`).then((res) => {
      setContent(res.data);
    });
    axios.get(`http://localhost:8080/api/episode/content/${id}`).then((res) => {
      setEpisodes(res.data);
    });
  }, [id]);

  if (!content) return null;

  const handleClose = () => {
    navigate(`/${content.releaseDate?.substring(0, 4)}`); // 연도 페이지로 이동
  };

  const handlePlay = () => {
    if (episodes.length > 0) {
      window.open(episodes[0].url, "_blank");
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("링크가 복사되었습니다.");
    } catch (e) {
      alert("복사 실패!");
    }
  };

  return (
    <div className="bg-black text-white font-AppleSDGothicNeoR">
      {/* 고정 썸네일 */}
      <div className="sticky top-0 bg-black z-10">
        <img src={content.thumbnailUrl} alt={content.title} className="w-full aspect-square object-cover" />
        <button onClick={handleClose} className="absolute top-[4vw] right-[4vw] text-white text-[6vw]">X</button>
      </div>

      {/* 콘텐츠 정보 */}
      <div className="p-[4vw]">
        <div className="text-red-500 font-bold">YANGFLIX</div>
        <div className="text-[4.5vw] font-bold mt-[1vw]">{content.title}</div>
        <div className="flex items-center gap-[2vw] text-[3.5vw] text-white/70 mt-[2vw]">
          <span>{content.releaseDate?.substring(0, 4)}</span>
          <span>에피소드 {episodes.length}개</span>
        </div>

        {/* 재생 버튼 */}
        <button onClick={handlePlay} className="mt-[3vw] w-full bg-white text-black py-[2vw] rounded-md text-[4vw] font-bold">▶ 재생</button>

        {/* 설명 */}
        <p className="mt-[4vw] text-[3.7vw] leading-[5vw] whitespace-pre-line">{content.description}</p>

        {/* 장르, 크레딧 등 */}
        <div className="text-[3.5vw] text-white/60 mt-[4vw]">{content.credits}</div>

        {/* 버튼들 */}
        <div className="flex justify-around mt-[6vw] text-[3.5vw]">
          <button>+ 내가 찜한 리스트</button>
          <button>평가</button>
          <button onClick={handleShare}>공유</button>
        </div>
      </div>

      {/* 회차 */}
      <div className="p-[4vw]">
        <h3 className="text-[4vw] font-bold mb-[3vw]">회차</h3>
        {episodes.map((ep, idx) => (
          <div key={ep.id} className="mb-[4vw]">
            <img
              src={ep.thumbnailUrl}
              alt={ep.title}
              className="w-full rounded-md mb-[1vw]"
              onClick={() => window.open(ep.url, "_blank")}
            />
            <div className="text-[3.5vw]">{`${idx + 1}. ${ep.title}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
