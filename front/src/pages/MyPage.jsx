import { useEffect, useState } from "react";
import axios from "axios";
import ProfileImageModal from "../components/ProfileImageModal";
import NicknameModal from "../components/NicknameModal";
import nicknameArrow from "../assets/arrow-bottom.png";

// Axios 인스턴스 설정
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token") || sessionStorage.getItem("token")}`,
  },
});

export default function MyPage() {
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [wishlistContents, setWishlistContents] = useState([]);
  const [wishlistEpisodes, setWishlistEpisodes] = useState([]);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showNicknameModal, setShowNicknameModal] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axiosInstance.get("/users/me");
        setNickname(res.data.nickname);
        setProfileImage(res.data.profileImg);
      } catch (err) {
        console.error("❌ 유저 정보 불러오기 실패:", err.response?.data || err.message);
      }
    };

    const fetchWishlistData = async () => {
      try {
        const [contentsRes, episodesRes] = await Promise.all([
          axiosInstance.get("/users/wishlist/contents"),
          axiosInstance.get("/users/wishlist/episodes"),
        ]);
        setWishlistContents(contentsRes.data);
        setWishlistEpisodes(episodesRes.data);
      } catch (err) {
        console.error("❌ 찜 목록 불러오기 실패:", err.response?.data || err.message);
      }
    };

    fetchUserInfo();
    fetchWishlistData();
  }, []);

  const handleImageUpdate = async (newImage) => {
    try {
      await axiosInstance.patch("/users/profile/image", {
        profileImage: newImage,
      });
      setProfileImage(newImage);
    } catch (err) {
      console.error("❌ 프로필 이미지 업데이트 실패:", err.response?.data || err.message);
    }
  };

  const handleNicknameUpdate = (newNickname) => {
    setNickname(newNickname); // 서버 요청은 NicknameModal 내부 처리
  };

  return (
    <div className="bg-black text-white min-h-[100dvh] px-6 py-10 font-AppleSDGothicNeoR">
      {showProfileModal && (
        <ProfileImageModal
          currentImage={profileImage}
          onClose={() => setShowProfileModal(false)}
          onUpdate={(newImage) => {
            handleImageUpdate(newImage);
            setShowProfileModal(false);
          }}
        />
      )}

      {showNicknameModal && (
        <NicknameModal
          currentNickname={nickname}
          onClose={() => setShowNicknameModal(false)}
          onUpdate={(newName) => {
            handleNicknameUpdate(newName);
            setShowNicknameModal(false);
          }}
        />
      )}

      {/* 프로필 영역 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src={profileImage || "https://res.cloudinary.com/dxavift7v/image/upload/v1742824631/profile-basic_k3dxhf.jpg"}
            alt="프로필 이미지"
            className="w-[20vw] h-[20vw] rounded-full border-2 border-white cursor-pointer object-cover"
            onClick={() => setShowProfileModal(true)}
          />
          <div>
            <p className="text-[5vw] font-bold flex items-center">
              {nickname}
              <img
                src={nicknameArrow}
                className="ml-2 w-[4vw] h-[2.5vw] cursor-pointer"
                onClick={() => setShowNicknameModal(true)}
              />
            </p>
          </div>
        </div>
      </div>

      {/* 찜한 콘텐츠 */}
      <section className="mt-8">
        <h2 className="text-[4.2vw] mb-4 font-AppleSDGothicNeoM">내가 찜한 콘텐츠</h2>
        <div className="overflow-x-auto flex gap-4">
          {wishlistContents.length === 0 ? (
            <p className="text-[#777] text-[3.5vw]">찜한 콘텐츠가 없습니다.</p>
          ) : (
            wishlistContents.map((item) => (
              <img
                key={item.id}
                src={item.thumbnailUrl}
                alt={item.title}
                className="w-[30vw] rounded-md cursor-pointer"
                onClick={() => (window.location.href = `/${item.releaseYear}/${item.slug}`)}
              />
            ))
          )}
        </div>
      </section>

      {/* 찜한 에피소드 */}
      <section className="mt-10">
        <h2 className="text-[4.2vw] mb-4 font-AppleSDGothicNeoM">내가 찜한 에피소드</h2>
        <div className="overflow-x-auto flex gap-4">
          {wishlistEpisodes.length === 0 ? (
            <p className="text-[#777] text-[3.5vw]">찜한 에피소드가 없습니다.</p>
          ) : (
            wishlistEpisodes.map((ep) => (
              <img
                key={ep.id}
                src={ep.thumbnailUrl}
                alt={ep.episodeTitle}
                className="w-[30vw] rounded-md cursor-pointer"
                onClick={() => window.open(ep.videoUrl, "_blank")}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
