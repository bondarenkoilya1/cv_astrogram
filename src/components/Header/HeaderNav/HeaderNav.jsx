import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  HeaderNavListItemStyled,
  HeaderNavListStyled,
  HeaderNavStyled,
  NavLinkStyled
} from "./styled";

import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { headerNavPages } from "../../../data";

const renderNavList = (array, onClick) => {
  return (
    <HeaderNavListStyled>
      {array.map(({ url, name }) => (
        <HeaderNavListItemStyled key={crypto.randomUUID()}>
          <NavLinkStyled
            to={url}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={onClick}>
            {name}
          </NavLinkStyled>
        </HeaderNavListItemStyled>
      ))}
    </HeaderNavListStyled>
  );
};

export const HeaderNav = ({ resetForm }) => {
  return (
    <HeaderNavStyled>
      <Link to="/" onClick={resetForm}>
        <Logo />
      </Link>
      {renderNavList(headerNavPages, resetForm)}
    </HeaderNavStyled>
  );
};

HeaderNav.propTypes = {
  resetForm: PropTypes.func.isRequired
};
