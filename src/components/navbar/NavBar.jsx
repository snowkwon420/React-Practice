import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {
  return (
    <NavWrapper>
      <ul>
        <LeftLi>
          <StyledLink to='/'>Recipe</StyledLink>
        </LeftLi>
        <RightLi>
          <StyledLink to='/Join'>Join</StyledLink>
          <StyledLink to='/Login'>Login</StyledLink>
        </RightLi>
      </ul>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  width: 100%;
  height: 36px;
  background-color: var(--main-color);
  font-size: 24px;
  font-family: 'yg-jalnan';
  padding: 8px 0px;
  line-height: 36px;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const LeftLi = styled.li`
  margin-left: 20px;
`;

const RightLi = styled.li`
  font-size: 18px;
  margin-right: 20px;
  display: flex;
  gap: 30px;
`;
export default NavBar;
