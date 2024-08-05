import { Link, NavLink } from "react-router-dom";

import styled from "@emotion/styled";

import arrowIcon from "../../../assets/images/header/arrow.svg";
import userIcon from "../../../assets/images/header/user.svg";

export const HeaderNavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNavListStyled = styled.ul`
  display: flex;
  align-items: center;
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
