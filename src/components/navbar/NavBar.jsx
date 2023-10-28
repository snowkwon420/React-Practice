import React from 'react';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ProfileIcon } from '../../assets/img/icon-user.svg';
import { isLoginAtom, userNameAtom } from '../../atom/Atom';

function NavBar(props) {
  const isLogin = useRecoilValue(isLoginAtom);
  const userName = useRecoilValue(userNameAtom);

  return (
    <NavWrapper>
      {isLogin ? (
        <ul>
          <LeftLi>
            <StyledLink to='/postlist'>Recipe</StyledLink>
          </LeftLi>
          <Profile>{userName}</Profile>
        </ul>
      ) : (
        <ul>
          <LeftLi>
            <StyledLink to='/postlist'>Recipe</StyledLink>
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
