import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

export const NavMenu = styled.ul.withConfig({
  shouldForwardProp: prop => prop !== 'click',
})`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 0;

  @media screen and (max-width: 767px) {
    padding: 40px 70px 219px 70px;
    top: 35px;
    height: 100vh;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    top: 49px;
    padding: 94px 0 700px 0;
    height: 100vh;
  }

  @media screen and (max-width: 1279px) {
    width: 100%;
    heigh: 100vh;
    position: absolute;
    left: 0;
    flex-direction: column-reverse;
    display: ${({ click }) => (click ? 'visible' : 'none')};

    text-align: center;
    transition: 0.1s all ease-in;
    background-color: ${theme.colors.bgColor};
  }

  @media screen and (min-width: 1280px) {
  margin-right: 140px;
  flex-direction: row-reverse;
  }
`;

export const NavMenuItem = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1279px) {
    text-align: center;

    &:not(:first-child) {
      height: 66px;
      margin-bottom: 60px;
    }
  }

  @media screen and (max-width: 767px) {
    text-align: center;

    &:not(:first-child) {
      height: 44px;
      margin-bottom: 20px;
    }
  }

  
`;

export const NavMenuItemLink = styled(Link)`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.l};
  text-decoration: none;
  margin-right: 40px;

  @media screen and (max-width: 1279px) {
    margin: 0;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
  }

  &:hover,
  :focus {
    color: ${theme.colors.yellow};
    transition: 0.2s ease-in;
  }
`;

export const AuthContainerMobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    display: visible;
  }
`;

export const UserNavContainerMobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 159px;
    display: visible;
  }
`;

export const LogoutButtnMobile = styled.div`
  position: absolute;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    display: visible;
    top: 50%;
    left: 10%;
  }
`;
