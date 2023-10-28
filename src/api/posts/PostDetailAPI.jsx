import React from 'react';
import { URL } from '../baseURL';

const PostDetailAPI = (id) => {
  const getPostDetail = async () => {
    try {
      const res = await fetch(`${URL}/posts/${id}`, {
        method: 'GET',
      });
      const data = res.json();
      console.log('요청성공', data);
      return data;
    } catch (error) {
      console.error('post detail 데이터 전송 실패', error);
    }
  };

  return getPostDetail;
};

export default PostDetailAPI;
