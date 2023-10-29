import React from 'react';
import { URL } from '../baseURL';

const PostCommentAPI = (id, accesstoken, csrfToken, comment) => {
  const postComment = async () => {
    // const encodedComment = encodeURIComponent(comment);
    try {
      const res = await fetch(`${URL}/posts/${id}/comments`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${accesstoken}`,
          'X-CSRF-Token': `${csrfToken}`,
        },
        body: JSON.stringify({
          content: `${comment}`,
        }),
      });
      const data = res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('comment post 데이터 전송 실패', error);
    }
  };

  return postComment;
};

export default PostCommentAPI;
