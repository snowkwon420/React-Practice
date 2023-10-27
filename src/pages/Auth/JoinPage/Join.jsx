import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Title } from '../LoginPage/Login';
import { LayoutWrapper } from '../../../layout/Layout';
import JoinAPI from '../../../api/Auth/JoinAPI';
import { useNavigate, useLocation } from 'react-router-dom';

function Join() {
  const [userId, setUserId] = useState('');
  const [userIdValid, setUserIdValid] = useState(true);
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordCheck, setUserPasswordCheck] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();
  const [emailValid, setEmailValid] = useState(true);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    email: '',
  });

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

  const onHandleSubmit = async () => {
    handleEmailValid();
    handlePasswordValid();

    if (passwordValid && emailValid) {
      const updateUserInfo = {
        ...userInfo,
        username: userId,
        password: userPassword,
        email: userEmail,
      };
      await setUserInfo(updateUserInfo);
      const res = await JoinAPI(updateUserInfo);
      if (res.message === '회원가입 성공') {
        alert('환영합니다!');
        navigate('/Login');
      }
    }
  };

  const handleEmailValid = () => {
    const testEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
        userEmail
      );
    if (!testEmail) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };

  const handlePasswordValid = () => {
    if (userPassword !== userPasswordCheck) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    onHandleSubmit();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
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
            isvalid={userIdValid}
            errmsg='이미 있는 아이디입니다.'
          />
          <Input
            label='비밀번호'
            type='password'
            id='userPw'
            name='userPw'
            placeholder=''
            value={userPassword}
            onChange={changeUserPw}
          />
          <Input
            label='비밀번호 확인'
            type='password'
            id='userPwCheck'
            name='userPwCheck'
            placeholder=''
            value={userPasswordCheck}
            onChange={changeUserPwCheck}
            isvalid={passwordValid}
            errmsg='* 비밀번호가 일치 하지 않습니다.'
          />
          <Input
            label='이메일'
            type='email'
            id='userEmail'
            name='userEmail'
            placeholder=''
            value={userEmail}
            onChange={changeUserEmail}
            isvalid={emailValid}
            errmsg='* 이메일 형식이 아닙니다.'
          />
          <Button
            type='submit'
            content='아이디 생성'
            style={{ marginTop: '50px' }}
          />
        </Wrapper>
      </form>
    </>
  );
}

const Wrapper = styled(LayoutWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Join;
