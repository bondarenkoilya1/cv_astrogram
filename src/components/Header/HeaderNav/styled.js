import { Link, NavLink } from "react-router-dom";

import styled from "@emotion/styled";

import arrowIcon from "../../../assets/images/header/arrow.svg";
import userIcon from "../../../assets/images/header/user.svg";

export const HeaderNavContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderNavStyled = styled.nav`
  @media screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 100px;
    transition: all 1s ease-in-out;
    transform: translateY(-100vh);
    background-color: #111018;
  }

  &.responsive {
    transform: none;
  }
`;

export const HeaderNavListStyled = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const HeaderNavListItemStyled = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 20px 30px;
  color: #fff;
  border-radius: 100px;
  border: 1px double transparent;
  background-image: linear-gradient(#111018, #111018), linear-gradient(#464168, #464168);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  display: inline-block;

  &:focus,
  &.active {
    outline: none;
    background-image: linear-gradient(#111018, #111018),
      linear-gradient(90deg, #5846fb 0%, #ce66ff 100%);
  }

  &:hover {
    background: linear-gradient(90deg, #5846fb 0%, #ce66ff 100%);
    border: 1px solid #5846fb;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }
`;

export const HeaderNavLoginButtonStyled = styled(Link)`
  background: #222030;
  padding: 20px 40px;
  border-radius: 100px;
  font-family: "SF Pro Text", sans-serif;
  font-size: 14px;
  line-height: 16px;

  &::after {
    content: "";
    background: url(${arrowIcon}) center no-repeat;
    width: 12px;
    height: 10px;
    display: inline-block;
    margin-left: 9px;
  }

  &:hover {
    background: linear-gradient(90deg, #5846fb, #ce66ff);
  }
`;

export const HeaderNavProfileButtonStyled = styled(Link)`
  background: #332550;
  padding: 20px 40px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  font-family: "SF Pro Text", sans-serif;
  font-size: 14px;
  line-height: 16px;

  &::before {
    content: "";
    background: url(${userIcon}) center no-repeat;
    width: 12px;
    height: 16px;
    display: inline-block;
    margin-right: 12px;
  }

  &:hover {
    background: linear-gradient(90deg, #5846fb, #ce66ff);
  }
`;

export const HeaderNavButtonSpanStyled = styled.span``;

export const HeaderNavOpenButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #332550;
  outline: none;
  border: none;
  padding: 12px;
  border-radius: 50%;
  visibility: hidden;
  opacity: 0;
  width: 45px;
  height: 45px;

  @media screen and (max-width: 1024px) {
    visibility: visible;
    opacity: 1;
  }
`;

export const HeaderNavCloseButtonStyled = styled.button`
  position: absolute;
  top: 10%;
  right: 10%;
  background: none;
  outline: none;
  border: none;

  visibility: hidden;
  opacity: 0;

  @media screen and (max-width: 1024px) {
    visibility: visible;
    opacity: 1;
  }
`;
