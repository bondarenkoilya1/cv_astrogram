import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";

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
