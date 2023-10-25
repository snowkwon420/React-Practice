import React, { useState } from 'react';
import { styled } from 'styled-components';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';
import { LayoutWrapper } from '../../../layout/Layout';

function Login() {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isIdValid, setIsIdValid] = useState(null);
  const [isPwValid, setIsPwValid] = useState(null);

  function idValidCheck(event) {
    setUserId(event.target.value);
    const testEmail = /^[A-Za-z0-9]{6,20}$/i.test(event.target.value);

    if (testEmail) {
      setIsIdValid(true);
    } else {
      setIsIdValid(false);
    }
  }

  function pwValidCheck(event) {
    setUserPassword(event.target.value);
    const testPassword = /^[A-Za-z0-9]{6,20}$/;
    if (userPassword !== '' && userPassword.match(testPassword)) {
      setIsPwValid(true);
    } else {
      setIsPwValid(false);
    }
  }

  return (
    <Wrapper>
      <Title>로그인</Title>
      <Input
        label='아이디'
        type='text'
        id='userId'
        name='userId'
        placeholder=''
        value={userId}
        onChange={idValidCheck}
      />
      <Input
        label='비밀번호'
        type='password'
        id='userPw'
        name='userPw'
        placeholder=''
        value={userPassword}
        onChange={pwValidCheck}
        isValid={false}
        errMsg='* 오류테스트'
      />
      <Button content='로그인' style={{ marginTop: '50px' }} />
      <Link
        to={'/join'}
        style={{
          width: '100px',
          height: '30px',
          textDecoration: 'none',
          textAlign: 'center',
          marginTop: '30px',
          color: 'inherit',
        }}
      >
        회원가입
      </Link>
    </Wrapper>
  );
}

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  color: var(--main-color);
  font-family: 'yg-jalnan';
`;

const Wrapper = styled(LayoutWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Login;
