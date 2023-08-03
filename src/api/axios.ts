import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface ApiResponseData {
  message: string;
}

const API: AxiosInstance = axios.create({
  baseURL: 'http://15.165.74.54:3000/',
});

API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response: AxiosResponse<ApiResponseData>) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default API;
