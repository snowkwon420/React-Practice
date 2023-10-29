import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import axios from 'axios';
import Button from '../../components/button/Button';
import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { accessTokenAtom, csrfTokenAtom } from '../../atom/Atom';
import PostRecipeAPI from '../../api/posts/PostRecipe';

function FormIngredients() {
  const token = useRecoilValue(accessTokenAtom);
  const CsrfToken = useRecoilValue(csrfTokenAtom);
  const [formData, setFormData] = useState({
    post: {
      title: '',
      content: '',
    },
    ingredients: [
      {
        id: '',
        quantity: '',
        price: '',
        unit: '',
      },
    ],
  });
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state.title;
  const contents = location.state.contents;

  const postRecipe = PostRecipeAPI(formData, token, CsrfToken);

  const saveForm = async () => {
    // 게시글을 저장하는 로직을 추가
    // setFormdata(); 이거 사용헤서 로직 추가
    // form은 name으로 받아온 각 영역의 값을 뜻하는듯함
    postRecipe().then((res) => {
      alert('등록되었습니다');
      navigate('/postlist'); // 저장 후, 게시글 리스트 페이지로 이동(현재는 메인)
    });
  };

  // 서버 응답 확인??

  const prevPage = () => {
    navigate('/PostForm'); // 레시피 등록 페이지로 이동
  };

  return (
    <Wrapper>
      <div>요리 이름: {title}</div>
      <div>레시피 내용: {contents}</div>

      <h2>재료를 등록해주세요</h2>
      <div>
        품목: {} 수량: {}
        <button type='submit'>
          <MdAdd />
        </button>
        <br />
        <ButtonWrapper>
          <Button onClick={prevPage} content='이전' />
          <Button onClick={saveForm} content='저장' />
        </ButtonWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 50vh;
  position: relative;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 50px;
  bottom: 0;
  align-items: center;
`;

export default FormIngredients;
