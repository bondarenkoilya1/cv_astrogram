import PropTypes from "prop-types";

import { ContainerStyled } from "../../styled";
import { HeaderBorderStyled, HeaderStyled } from "./styled";

import { HeaderNav } from "./HeaderNav";

export const Header = ({ stage, resetForm }) => {
  return (
    <HeaderStyled style={stage === 5 ? { background: "#020107" } : null}>
      <ContainerStyled>
        <HeaderNav resetForm={resetForm} stage={stage} />
      </ContainerStyled>
      <HeaderBorderStyled />
    </HeaderStyled>
  );
};

Header.propTypes = {
  stage: PropTypes.number.isRequired,
  resetForm: PropTypes.func.isRequired
};
