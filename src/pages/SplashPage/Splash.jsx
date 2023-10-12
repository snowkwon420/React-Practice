import React from 'react';
import styled from 'styled-components';

function Splash() {
  return (
    <Section>
      <SplashContainer>
        <H1>한끼얼마</H1>
        <Animation />
      </SplashContainer>
    </Section>
  );
}

const Section = styled.section`
  background-color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SplashContainer = styled.div`
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 3rem;
  color: #ff7028;
`;

const Animation = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ff7028;
  border-radius: 50%;
  animation: moveText 2s infinite;

  @keyframes moveText {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(50px);
    }
    50% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(-50px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default Splash;
