// Global API file.
import axios from "axios";

axios.defaults.baseUrl = process.env.REACT_APP_DEV_API;

export const httpClient = axios.create({
  baseURL: axios.defaults.baseUrl,
  timeout: 60000,
});

const successResponse = (response) => {
  return response;
};

const errorResponse = (error) => {
  return Promise.reject(error);
};

const setHeaders = async (reqConfig) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    reqConfig.headers.Authorization = "Bearer " + accessToken;
  }

  return reqConfig;
};

httpClient.interceptors.response.use(successResponse, errorResponse);
httpClient.interceptors.request.use(setHeaders);
