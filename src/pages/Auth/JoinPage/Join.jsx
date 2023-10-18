import React, { useState } from 'react';
import { styled } from 'styled-components';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Title } from '../LoginPage/Login';
import { LayoutWrapper } from '../../../layout/Layout';

function Join() {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordCheck, setUserPasswordCheck] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const changeUserId = (e) => {
    const newUserId = e.target.value;
    setUserId(newUserId);
  };

  const changeUserPw = (e) => {
    const newUserPw = e.target.value;
    setUserPassword(newUserPw);
  };

  const changeUserPwCheck = (e) => {
    const newUserPwCheck = e.target.value;
    setUserPasswordCheck(newUserPwCheck);
  };

  const changeUserEmail = (e) => {
    const newUserEmail = e.target.value;
    setUserEmail(newUserEmail);
  };

  return (
    <>
      <Wrapper>
        <Title>회원가입</Title>
        <Input
          label='아이디'
          type='text'
          id='userId'
          name='userId'
          placeholder=''
          value={userId}
          onChange={changeUserId}
        />
        <Input
          label='비밀번호'
          type='password'
          id='userPw'
          name='userPw'
          placeholder=''
          value={userPassword}
          onChange={changeUserPw}
          isValid={false}
          errMsg='* 오류테스트'
        />
        <Input
          label='비밀번호 확인'
          type='password'
          id='userPwCheck'
          name='userPwCheck'
          placeholder=''
          value={userPasswordCheck}
          onChange={changeUserPwCheck}
          isValid={false}
          errMsg='* 오류테스트'
        />
        <Input
          label='이메일'
          type='email'
          id='userEmail'
          name='userEmail'
          placeholder=''
          value={userEmail}
          onChange={changeUserEmail}
          isValid={false}
          errMsg='* 오류테스트'
        />
        <Button content='아이디 생성' style={{ marginTop: '50px' }} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled(LayoutWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Join;
