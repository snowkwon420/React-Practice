import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ProfileIcon } from '../../assets/img/icon-user.svg';

function NavBar(props) {
  return (
    <NavWrapper>
      {props.isLogin ? (
        <ul>
          <LeftLi>
            <StyledLink to='/'>Recipe</StyledLink>
          </LeftLi>
          <Profile>(아이디)</Profile>
        </ul>
      ) : (
        <ul>
          <LeftLi>
            <StyledLink to='/'>Recipe</StyledLink>
          </LeftLi>
          <RightLi>
            <StyledLink to='/Login'>Login</StyledLink>
            <StyledLink to='/Join'>Join</StyledLink>
          </RightLi>
        </ul>
      )}
    </NavWrapper>
  );
}

const Profile = styled.div`
  font-size: 18px;
  margin-right: 20px;
  color: white;
`;
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
