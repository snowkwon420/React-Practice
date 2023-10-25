import React from 'react';
import { URL } from '../baseURL';

const PostListAPI = (pageNo) => {
  const getPostList = async () => {
    try {
      const res = await fetch(`${URL}/posts?pageNo=${pageNo}&pageSize=10`, {
        method: 'GET',
      });
      const data = res.json();
      return data;
    } catch (error) {
      console.error('post 데이터 전송 실패', error);
    }
  };

  return getPostList;
};

export default PostListAPI;
