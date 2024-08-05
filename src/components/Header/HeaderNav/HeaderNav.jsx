import { useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  HeaderNavButtonSpanStyled,
  HeaderNavCloseButtonStyled,
  HeaderNavContainerStyled,
  HeaderNavFunctionsContainerStyled,
  HeaderNavListItemStyled,
  HeaderNavListStyled,
  HeaderNavLoginButtonStyled,
  HeaderNavOpenButton,
  HeaderNavProfileButtonStyled,
  HeaderNavStyled,
  NavLinkStyled
} from "./styled";

import { ReactComponent as BurgerIcon } from "../../../assets/images/header/burger.svg";
import { ReactComponent as CrossIcon } from "../../../assets/images/header/cross.svg";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { headerNavPages } from "../../../data";

const renderNavList = (array, resetForm, toggleNav) => {
  const handleClick = () => {
    resetForm();
    toggleNav();
  };

  return (
    <HeaderNavListStyled>
      {array.map(({ url, name }) => (
        <HeaderNavListItemStyled key={crypto.randomUUID()}>
          <NavLinkStyled
            to={url}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={handleClick}>
            {name}
          </NavLinkStyled>
        </HeaderNavListItemStyled>
      ))}
      <HeaderNavCloseButtonStyled onClick={toggleNav}>
        <CrossIcon width={40} height={40} />
      </HeaderNavCloseButtonStyled>
    </HeaderNavListStyled>
  );
};

export const HeaderNav = ({ resetForm, stage }) => {
  const navRef = useRef();

  const toggleNav = () => navRef.current.classList.toggle("responsive");

  return (
    <HeaderNavContainerStyled>
      <Link to="/" onClick={resetForm}>
        <Logo />
      </Link>
      <HeaderNavStyled ref={navRef}>
        {renderNavList(headerNavPages, resetForm, toggleNav)}
      </HeaderNavStyled>
      <HeaderNavFunctionsContainerStyled>
        {stage === 5 ? (
          <HeaderNavProfileButtonStyled to="/">
            <HeaderNavButtonSpanStyled>Профиль</HeaderNavButtonSpanStyled>
          </HeaderNavProfileButtonStyled>
        ) : (
          <HeaderNavLoginButtonStyled to="/">
            <HeaderNavButtonSpanStyled>Войти</HeaderNavButtonSpanStyled>
          </HeaderNavLoginButtonStyled>
        )}
        <HeaderNavOpenButton onClick={toggleNav}>
          <BurgerIcon />
        </HeaderNavOpenButton>
      </HeaderNavFunctionsContainerStyled>
    </HeaderNavContainerStyled>
  );
};

HeaderNav.propTypes = {
  resetForm: PropTypes.func.isRequired,
  stage: PropTypes.number.isRequired
};
