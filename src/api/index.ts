import API from './axios';

export const API_URL = {
  getBooks: '/',
};

export const getBooks = async ({ pageParam = 1 }) => {
  const res = await API.get(API_URL.getBooks, { params: { page: pageParam } });
  return res.data;
};
