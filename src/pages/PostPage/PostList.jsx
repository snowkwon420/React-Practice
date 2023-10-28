import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';
import { LayoutWrapper } from '../../layout/Layout';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { ReactComponent as SearchIcon } from '../../assets/img/icon-search.svg';
import PagingCom from '../../components/paging/PagingCom';
import PostListContent from './PostListContent';
import PostListAPI from '../../api/posts/PostListAPI';
import Loading from '../Loading/Loading';

function PostList() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ posts: [] });
  const [totalDataLength, setTotalDataLength] = useState(0);
  const getPostList = PostListAPI(page);

  const postData = async () => {
    const newData = await getPostList();
    setData(newData);
    if (page === 1) {
      setTotalDataLength(newData.posts[0].id);
    }
  };

  useEffect(() => {
    postData();
  }, [page]);

  return (
    <LayoutWrapper>
      <HeadWrapper>
        <Button
          content='레시피 등록하기'
          backgroundcolor='white'
          color='var(--main-color)'
          style={{ border: '3px solid var(--main-color)' }}
        />
        <InputContainer>
          <Input width='250px' style={{ padding: '0' }} />
          <SearchIcon
            style={{ position: 'absolute', right: '0px', top: '30px' }}
          />
        </InputContainer>
      </HeadWrapper>
      <StyledTable>
        <ListHeadWrapper>
          <tr>
            <th
              style={{
                display: 'block',
                maxWidth: '50px',
                width: '50px',
                height: '40px',
                lineHeight: '40px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              번호
            </th>
            <th style={{ width: '50%' }}>요리이름</th>
            <th style={{ width: '25%' }}>공유자</th>
            <th style={{ width: '25%' }}>작성일</th>
          </tr>
        </ListHeadWrapper>
        <tbody>
          {data.posts.length > 0 ? (
            data.posts.map((res, i) => <PostListContent key={i} data={res} />)
          ) : (
            <Loading />
          )}
        </tbody>
      </StyledTable>
      <PagingCom
        totalItem={totalDataLength}
        page={page}
        setPage={setPage}
        style={{ width: '100%', display: 'inline', margin: '0 auto' }}
      />
    </LayoutWrapper>
  );
}

const StyledTable = styled.table`
  border: 0;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const HeadWrapper = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

export const ListHeadWrapper = styled.thead`
  background-color: var(--main-color);
  color: white;
  height: 40px;
  margin-top: 20px;
  padding: 0 15px;
  text-align: center;
`;

export default PostList;
