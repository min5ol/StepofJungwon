// src/pages/Year.jsx
import { useNavigate } from "react-router-dom";
import brandLogo from "../assets/YANGFLIX.png";
import brandImages from "../data/yearImages";

export default function Year() {
  const navigate = useNavigate();

  const handleYearClick = (year) => {
    navigate(`/contents/${year}`); // 연도별 콘텐츠 페이지로 이동
  };

  return (
    <div className="bg-black min-h-[100dvh] flex flex-col items-center text-white">
      <img src={brandLogo} className="pt-[23.26vw]" />
      <p className="pt-[4.65vw] pb-[20.88vw] text-[4.65vw] font-AppleSDGothicNeoM">
        정원이의 발자국을 확인할 연도를 선택하세요.
      </p>
      <div className="grid grid-cols-2 gap-[9vw]">
        {Object.entries(brandImages).map(([year, img]) => (
          <div
            key={year}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleYearClick(year)}
          >
            <img src={img} alt={year} className="w-[23.26vw] h-[23.26vw]" />
            <p className="pt-[2vw] text-[3.72vw] font-AppleSDGothicNeoR">{year}년</p>
          </div>
        ))}
      </div>
      <p className="pt-[20.88vw] pb-[9.3vw] text-[2.33vw] text-center font-AppleSDGothicNeoL text-white">
        copyright 2025 kkulbbannx All rights reserved.
      </p>
    </div>
  );
}
