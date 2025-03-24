export async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "yangflix-storage"); // 네 preset
  formData.append("folder", "yangflix"); // 저장될 폴더명 (선택)

  const res = await fetch("https://api.cloudinary.com/v1_1/dxavitf7v/image/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.secure_url; // 썸네일로 쓸 URL 반환
}
