import React from 'react';
import { URL } from '../baseURL';

const JoinAPI = async (userInfo) => {
  try {
    const res = await fetch(`${URL}/members/forms`, {
      method: 'POST',
      body: JSON.stringify({ ...userInfo }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('회원가입 요청 실패', error);
  }
};

export default JoinAPI;
