import React from 'react';
import { URL } from '../baseURL';

const PostCommentAPI = (
  id,
  accesstoken,
  rfAccessToken,
  csrfToken,
  rfCsrfToken,
  comment
) => {
  const postComment = async () => {
    console.log(id, accesstoken, csrfToken, comment);
    try {
      const res = await fetch(`${URL}/posts/${id}/comments`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer access_token_cookie=${accesstoken};refresh_token_cookie=${rfAccessToken}`,
          'X-CSRF-Token': `${csrfToken}`,
          'X-CSRF-Refresh-Token': `${rfCsrfToken}`,
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
