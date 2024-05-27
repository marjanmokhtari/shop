import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const Request = async <T>({
  method,
  data,
}: {
  method: "GET" | "POST" | "DELETE" | "PUT";
  data?: any;
}): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.request({
    method,
    data,
  });
  return response.data;
};

export default Request;
