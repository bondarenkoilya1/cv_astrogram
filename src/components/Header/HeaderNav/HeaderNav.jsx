import { Link } from "react-router-dom";

import {
  HeaderNavListItemStyled,
  HeaderNavListStyled,
  HeaderNavStyled,
  NavLinkStyled
} from "./styled";

import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { headerNavPages } from "../../../data";

const renderNavList = (array) => {
  return (
    <HeaderNavListStyled>
      {array.map(({ url, name }) => (
        <HeaderNavListItemStyled key={crypto.randomUUID()}>
          <NavLinkStyled to={url} className={({ isActive }) => (isActive ? "active" : undefined)}>
            {name}
          </NavLinkStyled>
        </HeaderNavListItemStyled>
      ))}
    </HeaderNavListStyled>
  );
};

export const HeaderNav = () => {
  return (
    <HeaderNavStyled>
      <Link to="/">
        <Logo />
      </Link>
      {renderNavList(headerNavPages)}
    </HeaderNavStyled>
  );
};
