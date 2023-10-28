import React from 'react';
import { URL } from '../baseURL';

const LoginAPI = async (userInfo) => {
  try {
    const res = await fetch(`${URL}/members/login`, {
      method: 'POST',
      body: JSON.stringify({ ...userInfo }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('로그인 실패', error);
  }
};

export default LoginAPI;
