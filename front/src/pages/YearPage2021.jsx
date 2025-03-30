import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import main2021 from "../assets/main2021.mp4";
import Top5Slider from "../components/Top5Slider";
import menu from "../assets/menu.png";
import search from "../assets/search.png";
import home from "../assets/home.png";
import kkulbbanxx from "../assets/kkulbbanxx.png";
import year from "../assets/year.png";

const GENRE_GROUPS = [
  {
    name: "Music",
    description: "정원이의 음악과 무대를 모아서",
    types: ["Album", "Music Video", "Trailer", "Fancam", "Broadcast"],
  },
  {
    name: "Contents",
    description: "정원이의 컨텐츠들이 궁금하다면?",
    types: ["Cover", "Dance Practice", "EN-O'CLOCK", "EN-EPISODE", "EN-TER Key", "EN-Core"],
  },
  {
    name: "Communication",
    description: "정원이랑 웃고 떠들고 싶은 양프 오세여의",
    types: ["Weverse Post", "정원 개인 라이브", "ENHYPEN 단체 라이브"],
  },
  {
    name: "TIKTOK",
    description: "숏폼이 대세! 쇼츠의 권위자를 만나고 싶을 때",
    types: ["ENHYPEN TIKTOK", "OTHER TIKTOK"],
  },
  {
    name: "Twitter",
    description: "X 아니고 Twitter",
    types: ["Twitter"],
  },
  {
    name: "Instagram",
    description: "인스타 감성인데여의",
    types: ["Instagram"],
  },
  {
    name: "Diary",
    description: "솔직 담백한 정원이 이야기",
    types: ["-note", "V-Log"],
  },
];

export default function YearPage2021() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/content").then((res) => {
      const sorted = [...res.data].sort((a, b) => {
        if (b.clickCount === a.clickCount) {
          return a.title.localeCompare(b.title);
        }
        return b.clickCount - a.clickCount;
      });
      setContents(sorted);
    });
  }, []);

  const sliderSettings = {
    slidesToShow: 3.2,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
  };

  return (
    <div className="bg-black text-white font-AppleSDGothicNeoR px-4 mb-20">
      {/* 유저 정보 + 아이콘 */}
      <div className="flex justify-between items-center mt-[4vw]">
        <h1 className="text-[5vw] font-bold">양정원 님</h1>
        <div className="flex gap-[4vw]">
          <a href="/search">
            <img src={search} className="w-[5.12vw]" />
          </a>
          <a href="/mypage">
            <img src={menu} className="w-[5.12vw]" />
          </a>
        </div>
      </div>

      {/* 🔗 소셜 버튼 */}
      <div className="flex flex-wrap gap-[2.33vw] mt-[4vw]">
        {[
          { label: "위버스", url: "https://weverse.io/enhypen/" },
          { label: "유튜브", url: "https://www.youtube.com/channel/UCArLZtok93cO5R9RI4_Y5Jw" },
          { label: "트위터", url: "https://www.twitter.com/ENHYPEN" },
          { label: "인스타그램", url: "https://www.instagram.com/enhypen" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="border border-white px-[4vw] py-[1.5vw] rounded-full text-[3.5vw]"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* 🎬 상단 영상 */}
      <div className="pt-6 flex justify-center">
        <video
          src={main2021}
          className="rounded-[3vw] w-[83.72svw]"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* 🏆 TOP 5 슬라이더 */}
      <Top5Slider items={contents.slice(0, 5)} />

      {/* 🎬 장르별 콘텐츠 */}
      {GENRE_GROUPS.map((group) => {
        const filtered = contents.filter((c) => group.types.includes(c.title));
        if (filtered.length === 0) return null;

        return (
          <div key={group.name} className="mt-[6vw]">
            <h3 className="text-[4.19vw] font-AppleSDGothicNeoM">{group.description}</h3>
            {filtered.length > 3 ? (
              <Slider {...sliderSettings} className="mt-[2.33vw]">
                {filtered.map((item) => (
                  <div key={item.id} className="px-1">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full max-w-[27.91vw] rounded-md"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="flex flex-wrap gap-[1.5vw] mt-[2.33vw]">
                {filtered.map((item) => (
                  <img
                    key={item.id}
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-[27.91vw] rounded-md"
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* ⛳ 푸터 */}
      <footer className="mt-[2.33vw] pt-[2.33vw] pb-[2.33vw] border-t border-white/10 flex justify-around items-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src={home} className="h-[8.84vw]"/></button>{" "}
        <a href="https://twitter.com/kkulbbanxx" target="_blank" rel="noreferrer"><img src={kkulbbanxx} className="h-[8.84vw]" /></a>{" "}
        <a href="/year"><img src={year} className="h-[8.84vw]" /></a>
      </footer>
    </div>
  );
}
