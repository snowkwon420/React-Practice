import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaUtensils } from 'react-icons/fa';

const Splash = () => {
  return (
    <Section>
      <SplashContainer>
        <AnimatedLogo>한끼얼마</AnimatedLogo>
        <Animation>
          <ForkIcon />
        </Animation>
      </SplashContainer>
    </Section>
  );
};

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SplashContainer = styled.div`
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 3rem;
  color: #ff7028;
  margin-bottom: 1rem;
`;

const pulse = keyframes`
  0% {
    transform: scale(100);
  }
  60% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`;

const Animation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  animation: ${pulse} 2s 1;
`;

const ForkIcon = styled(FaUtensils)`
  color: #ff7028;
  font-size: 5rem;
`;

const fade = keyframes`
  0% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
`;

const AnimatedLogo = styled(Logo)`
  animation: ${fade} 3s ease 1s forwards;
  opacity: 0;
`;

export default Splash;
