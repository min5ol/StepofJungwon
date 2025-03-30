// ContentDetailTabs.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import copy from "copy-to-clipboard";

export default function ContentDetailTabs({ content, episodes, similarContents }) {
  const [activeTab, setActiveTab] = useState("episodes");
  const navigate = useNavigate();

  const handlePlay = () => {
    if (episodes.length > 0) {
      window.open(episodes[0].link, "_blank");
    }
  };

  const handleShare = () => {
    copy(window.location.href);
    alert("링크가 복사되었습니다!");
  };

  return (
    <div className="bg-black text-white font-AppleSDGothicNeoR pb-20">
      {/* 상단 썸네일 */}
      <div className="sticky top-0 z-50 bg-black pb-4">
        <img src={content.thumbnailUrl} alt={content.title} className="w-full aspect-video object-cover" />
        <div className="flex justify-between items-center px-4 mt-2">
          <button onClick={() => navigate(`/year/${content.year}`)} className="text-white text-lg">✕</button>
          <div className="flex gap-3">
            <button onClick={handlePlay}>▶️ 재생</button>
            <button onClick={handleShare}>🔗 공유</button>
          </div>
        </div>
      </div>

      {/* 콘텐츠 정보 */}
      <div className="px-4 mt-4">
        <h1 className="text-2xl font-bold">{content.title}</h1>
        <p className="text-sm text-gray-300 mt-2">{content.description}</p>
        <div className="mt-2">
          <button className="bg-red-600 text-white px-4 py-1 rounded-full text-sm">❤️ 찜하기</button>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="flex justify-center mt-6 border-b border-white/20">
        <button
          className={`px-6 py-2 ${activeTab === "episodes" ? "border-b-2 border-white font-bold" : ""}`}
          onClick={() => setActiveTab("episodes")}
        >
          에피소드
        </button>
        <button
          className={`px-6 py-2 ${activeTab === "similar" ? "border-b-2 border-white font-bold" : ""}`}
          onClick={() => setActiveTab("similar")}
        >
          비슷한 콘텐츠
        </button>
      </div>

      {/* 탭 내용 */}
      <div className="px-4 mt-4 space-y-4">
        {activeTab === "episodes" ? (
          episodes.map((ep) => (
            <div key={ep.id} className="flex items-center gap-4">
              <img src={ep.thumbnailUrl} alt={ep.title} className="w-[40vw] rounded-md" />
              <div className="flex-1">
                <p className="text-lg">{ep.title}</p>
                <button
                  onClick={() => window.open(ep.link, "_blank")}
                  className="text-sm text-blue-400 underline"
                >
                  🔗 새창에서 보기
                </button>
              </div>
              <button className="text-lg">➕</button>
            </div>
          ))
        ) : (
          similarContents.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img src={item.thumbnailUrl} alt={item.title} className="w-[40vw] rounded-md" />
              <div>
                <p>{item.title}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 연도 이동 */}
      {content.availableYears?.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {content.availableYears.map((year) => (
            <button
              key={year}
              onClick={() => navigate(`/year/${year}`)}
              className={`px-4 py-1 border rounded-full ${
                year === content.year ? "bg-white text-black" : "text-white border-white"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
