import axios, { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

interface ICreateAxios {
  baseURL: string;
}
export function createAxios({ baseURL = '/' }: ICreateAxios): AxiosInstance {
  const headers = {
    'Content-Type': 'application/json'
  };

  const newInstance = axios.create({
    baseURL,
    headers
  });

  newInstance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      toast.error(error.message);

      return Promise.reject(error);
    }
  );

  return newInstance;
}
