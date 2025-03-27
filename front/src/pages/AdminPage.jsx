import brandLogo from "../assets/YANGFLIX.png";
import { useState } from "react";
import ContentForm from "../components/ContentForm";
import EpisodeForm from "../components/EpisodeForm";

export default function AdminPage() {
  const [tab, setTab] = useState("content");

  return (
    <div className="bg-black min-h-[100dvh] text-white flex flex-col items-center px-[8vw] font-AppleSDGothicNeoR">
      <img src={brandLogo} className="pt-[6vw]" />
      <h1 className="text-[5vw] font-AppleSDGothicNeoB pt-[8vw] pb-[4vw]">관리자 전용 페이지</h1>

      <div className="flex space-x-[4vw] pb-[6vw]">
        <button
          onClick={() => setTab("content")}
          className={`px-[4vw] py-[2vw] rounded-[3vw] transition duration-300 shadow-md ${
            tab === "content" ? "bg-[#E50914] text-black" : "bg-[#222] text-white"
          }`}
        >
          콘텐츠 추가
        </button>
        <button
          onClick={() => setTab("episode")}
          className={`px-[4vw] py-[2vw] rounded-[3vw] transition duration-300 shadow-md ${
            tab === "episode" ? "bg-[#E50914] text-black" : "bg-[#222] text-white"
          }`}
        >
          에피소드 추가
        </button>
      </div>

      <div className="w-full max-w-[600px] bg-[#111] p-[5vw] rounded-[3vw] shadow-lg">
        {tab === "content" ? <ContentForm /> : <EpisodeForm />}
      </div>
    </div>
  );
}