// src/utils/getOptimizedUrl.js
export const getOptimizedUrl = (url) => {
  if (!url?.includes("res.cloudinary.com")) return url; // 클라우디너리 아닐 경우 그대로 반환
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
};
