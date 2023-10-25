import React from 'react';
import { styled } from 'styled-components';
import { ReactComponent as LikeIcon } from '../../assets/img/icon-like.svg';

function Post() {
  return (
    <>
      <h2>테스트 요리</h2>
      <SectionWrapper>
        안녕하세요 제 레시피입니다 배승원엉덩이를 만들어볼꼐요{' '}
        <StyledLike>
          <LikeIcon /> 0
        </StyledLike>
      </SectionWrapper>
      <StyledComment></StyledComment>
    </>
  );
}

const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 220px;
  border: 1px solid rgba(103, 103, 103, 0.3);
  border-radius: 10px;
`;

const StyledLike = styled.div`
  position: absolute;
  justify-content: center;
  margin-left: 10px;
  bottom: 10px;
`;

const StyledComment = styled.div`
  width: 114px;
  height: 26px;
  color: #676767;
  border: 2px solid rgba(103, 103, 103, 1);
  text-align: center;
  line-height: 26px;
`;

export default Post;
