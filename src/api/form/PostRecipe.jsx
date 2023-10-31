import React from 'react';
import { URL } from '../baseURL';

const PostRecipeAPI = (data, accesstoken, csrfToken) => {
  const postRecipe = async () => {
    try {
      const res = await fetch(`${URL}/posts/forms`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${accesstoken}`,
          'X-CSRF-Token': `${csrfToken}`,
        },
        body: JSON.stringify(data),
      });
      const response = res.json();
      console.log(response);
      return response;
    } catch (error) {
      console.error('comment post 데이터 전송 실패', error);
    }
  };

  return postRecipe;
};

export default PostRecipeAPI;
