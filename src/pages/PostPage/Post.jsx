import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as LikeIcon } from '../../assets/img/icon-like.svg';
import { useLocation } from 'react-router-dom';
import PostDetailAPI from '../../api/posts/PostDetailAPI';
import { dateTrance } from './PostListContent';
import Loading from '../Loading/Loading';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { accessTokenAtom, csrfTokenAtom } from '../../atom/Atom';
import { useRecoilValue } from 'recoil';
import PostCommentAPI from '../../api/posts/PostCommentAPI';

function Post() {
  const [data, setData] = useState({ post: {} });
  const [commentData, setCommentData] = useState([]);
  const [comment, setComment] = useState('');
  const [newComment, setNewComment] = useState('');
  const location = useLocation();
  const postID = location.state.id;
  const getPostDetail = PostDetailAPI(postID);

  const token = useRecoilValue(accessTokenAtom);
  const csrfToken = useRecoilValue(csrfTokenAtom);

  const postComment = PostCommentAPI(postID, token, csrfToken, newComment);

  async function fetchData() {
    const res = await getPostDetail();
    setData(res.post);
    setCommentData(res.comments);
    console.log(res.comments);
    return res;
  }
  useEffect(() => {
    fetchData();
  }, []);

  const commentChange = (e) => {
    setNewComment(e.target.value);
  };

  const time = dateTrance(data.create_date);

  async function commentSubmitHandler(e) {
    e.preventDefault();
    await postComment();
    setNewComment('');
    const newRes = await fetchData();
    console.log(newRes);
    setCommentData(newRes.comments);
  }

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
      <CommentInput>
        <form onSubmit={commentSubmitHandler}>
          <Input
            width={'100%'}
            onChange={commentChange}
            type='text'
            id='comment'
            value={newComment}
          />
          <Button
            type='submit'
            height={'42px'}
            width={'82px'}
            content={'댓글 등록'}
            backgroundcolor={'white'}
            color={'var(--main-color)'}
            style={{
              position: 'absolute',
              right: '0px',
              top: '15px',
              border: '1px solid var(--main-color)',
            }}
          />
        </form>
      </CommentInput>
      <CommentSection>
        {commentData.length > 0 ? (
          commentData.map((comment, index) => (
            <Comments key={index}>
              <StyledId>
                {/* 여기 username으로 변경 */}
                {comment.user_id}
              </StyledId>
              <p>{comment.content}</p>
              <StyledTime style={{ top: '5px', bottom: '0', fontSize: '10px' }}>
                {dateTrance(comment.create_date)}
              </StyledTime>
            </Comments>
          ))
        ) : (
          <Loading />
        )}
      </CommentSection>
    </>
  );
}

const CommentInput = styled.div`
  position: relative;
`;
const StyledId = styled.div`
  height: 10px;
  font-size: 10px;
  margin-bottom: 2px;
`;

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 220px;
  border: 1px solid rgba(103, 103, 103, 0.3);
  border-radius: 10px;
`;

const CommentSection = styled.section``;

const Comments = styled.div`
  /* box-shadow: inset 0 0 10px red; */
  position: relative;
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
