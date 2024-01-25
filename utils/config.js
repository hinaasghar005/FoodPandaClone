// import {store} from '@redux/store';

import axios, {AxiosInstance} from 'axios';
import { BASE_URL,store } from '../exporter';




const HTTP_CLIENT = axios.create({
  baseURL: BASE_URL,
});

const initialConfig = () => {
  setupAxios();
};

const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config) => {
      // Assuming 'store' is available globally, replace with your store access method
      const user = store.getState().root.user;

      if (user && user?.authToken && config.headers) {
        config.headers.Authorization = `Bearer ${user?.authToken}`;
      }

      return config;
    },
    (err) => {
      Promise.reject(err);
    }
  );
};

export { HTTP_CLIENT, initialConfig };
