// src/utils/convertToWebpUrl.js
export default function convertToWebpUrl(url) {
  if (!url) return "";

  // Cloudinary URL인지 확인
  if (!url.includes("res.cloudinary.com")) return url;

  // PNG 또는 JPG를 WebP로 교체 (upload 뒤에 f_auto,q_auto 추가)
  const parts = url.split("/upload/");
  if (parts.length !== 2) return url;

  return `${parts[0]}/upload/f_auto,q_auto/${parts[1]}`;
}
