// src/pages/SearchPage.jsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backIcon from "../assets/arrow-right.png";
import search from "../assets/search-icon.png";
import { convertToWebp } from "../utils/imageUtils"; // ✅ 유틸 함수 import

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (keyword.trim()) {
      axios
        .get(`http://localhost:8080/api/content/search?keyword=${encodeURIComponent(keyword)}`)
        .then((res) => setResults(res.data))
        .catch(() => setResults([]));
    } else {
      setResults([]);
    }
  }, [keyword]);

  return (
    <div className="bg-black text-white font-AppleSDGothicNeoR min-h-screen px-4 pt-5">
      {/* 검색창 */}
      <div className="flex items-center justify-between relative">
        <button onClick={() => navigate(-1)}>
          <img src={backIcon} alt="back" className="w-[1.86vw] h-[3.26vw]" />
        </button>
        <input
          type="text"
          placeholder="정원이의 발자국을 검색하세요."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-[88.93vw] pl-[8.7vw] pt-[1.51vw] pb-[1.51vw] bg-[rgba(128,128,128,0.3)] text-[#848484] rounded-[1.16vw]"
        />
        <img src={search} className="absolute left-[5vw] w-[5.12vw]" alt="search icon" />
      </div>

      {/* 결과 */}
      {keyword.trim() && (
        <>
          {results.length > 0 ? (
            <div className="mt-[2.33vw] grid grid-cols-3 gap-2">
              {results.map((item) => (
                <img
                  key={item.id}
                  src={convertToWebp(item.thumbnailUrl)} // ✅ WebP 적용
                  alt={item.title}
                  onClick={() => navigate(`/2025/${item.title.toLowerCase()}`)}
                  className="w-full cursor-pointer"
                />
              ))}
            </div>
          ) : (
            <p className="text-m mt-[2.33vw]">검색 결과가 없습니다.</p>
          )}
        </>
      )}
    </div>
  );
}
