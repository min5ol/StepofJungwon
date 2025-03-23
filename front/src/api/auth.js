import api from './api';

export const login = async (username, password) => {
  const res = await api.post('/auth/login', null, {
    params: {
      username,
      password,
    },
  });
  return res.data;
};
