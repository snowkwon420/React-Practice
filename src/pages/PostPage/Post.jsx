import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as LikeIcon } from '../../assets/img/icon-like.svg';
import { useLocation } from 'react-router-dom';
import PostDetailAPI from '../../api/posts/PostDetailAPI';
import { dateTrance } from './PostListContent';
import Loading from '../Loading/Loading';

function Post() {
  const [data, setData] = useState({ post: {} });
  const [commentData, setCommentData] = useState({ comments: {} });
  const location = useLocation();
  const postID = location.state.id;
  const getPostDetail = PostDetailAPI(postID);

  useEffect(() => {
    async function fetchData() {
      const res = await getPostDetail();
      setData(res.post);
      setCommentData(res.comments);
      console.log(res.comments);
    }
    fetchData();
  }, []);

  const time = dateTrance(data.create_date);

  return (
    <>
      <h2>{data.title}</h2>
      <SectionWrapper>
        {data.content}
        <StyledLike>
          <LikeIcon /> {data.like}
        </StyledLike>
        <StyledTime>{time}</StyledTime>
      </SectionWrapper>
      <StyledComment>comment : {commentData.length}</StyledComment>
      <CommentSection>
        {commentData.legnth > 0 ? (
          <Comments>
            <StyledId>{commentData.comment}</StyledId>
            <p>하하하</p>
          </Comments>
        ) : (
          <Loading />
        )}
      </CommentSection>
    </>
  );
}

const StyledId = styled.div`
  height: 10px;
  font-size: 10px;
  margin-bottom: 2px;
`;

const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 220px;
  border: 1px solid rgba(103, 103, 103, 0.3);
  border-radius: 10px;
`;

const CommentSection = styled.section``;

const Comments = styled.div`
  /* box-shadow: inset 0 0 10px red; */
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 2px solid rgba(103, 103, 103, 0.5);
  margin-top: 10px;
  border-radius: 5px;
`;

const StyledLike = styled.div`
  position: absolute;
  justify-content: center;
  margin-left: 20px;
  bottom: 10px;
`;

const StyledTime = styled(StyledLike)`
  bottom: 10px;
  right: 20px;
`;

const StyledComment = styled.div`
  width: 114px;
  height: 26px;
  color: #676767;
  border: 2px solid rgba(103, 103, 103, 1);
  text-align: center;
  line-height: 26px;
  border-radius: 5px;
`;

export default Post;
