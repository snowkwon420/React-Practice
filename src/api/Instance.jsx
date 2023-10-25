import axios from 'axios';
import { URL } from './Url';

const createAxiosInstence = (token) => {
  const instance = axios.create({
    baseURL: URL,
    headers: { 'Content-Type': 'application/json' },
  });

  const tokenInstance = axios.create({
    baseURL: URL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  return { instance, tokenInstance };
};

export default createAxiosInstence;
