import Slider from "react-slick";
import top1 from "../assets/top1.png";
import top2 from "../assets/top2.png";
import top3 from "../assets/top3.png";
import top4 from "../assets/top4.png";
import top5 from "../assets/top5.png";

const TOP_IMAGES = [top1, top2, top3, top4, top5];

const sliderSettings = {
  slidesToShow: 2.4,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
};

export default function Top5Slider({ items }) {
  return (
    <div className="mt-10">
      <h2 className="text-[4.19vw] font-AppleSDGothicNeoM">오늘 정원이의 TOP 5 시리즈</h2>
      <Slider {...sliderSettings} className="mt-[2.33vw]">
        {items.map((item, idx) => (
          <div key={item.id} className="px-1 relative">
            {/* 썸네일 이미지 */}
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              className="w-full max-w-[27.91vw] relative z-10"
            />
            {/* 숫자 이미지 (뒤에 배치) */}
            <img
              src={TOP_IMAGES[idx]}
              alt={`top${idx + 1}`}
              className="absolute top-[11vw] right-[1vw] h-[27.91vw] z-0"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

