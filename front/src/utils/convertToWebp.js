export default function convertToWebp(url) {
  if (!url.includes("res.cloudinary.com")) return url;

  return url.replace(/(\.png|\.jpg|\.jpeg)$/, ".webp");
}
