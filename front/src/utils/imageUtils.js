export function convertToWebp(url) {
  if (!url) return "";
  if (!url.includes("cloudinary.com")) return url;

  const parts = url.split("/upload/");
  if (parts.length !== 2) return url;

  const [prefix, suffix] = parts;
  const webpSuffix = suffix.replace(/\.(png|jpg|jpeg)$/, ".webp");
  return `${prefix}/upload/f_webp/${webpSuffix}`;
}
