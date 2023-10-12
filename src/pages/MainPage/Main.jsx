import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Splash from '../SplashPage/Splash';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import Home from '../Homepage/Home';
import Join from '../Auth/JoinPage/Join';
import Login from '../Auth/LoginPage/Login';

function Main() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <h1 style={titleStyle}>
            <Link to='/' style={linkStyle}>
              한끼얼마
            </Link>
          </h1>
        </Header>
        <Wrapper>
          <NavBar />
          <Routes>
            <Route path='/Splash' element={<Splash />} />
            <Route path='/' element={<Home />} />
            <Route path='/Join' element={<Join />} />
            <Route path='/Login' element={<Login />} />
          </Routes>
        </Wrapper>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const Header = styled.section`
  display: flex;
  flex-direction: column;
`;

const titleStyle = {
  textAlign: 'center',
  fontFamily: 'yg-jalnan',
  marginBottom: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#ff7028',
  fontSize: '52px',
};

const Wrapper = styled.section`
  max-width: 960px;
  min-height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Main;
