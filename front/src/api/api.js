import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // 배포 후엔 실제 주소로 변경
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // 로그인 후 저장 예정
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
