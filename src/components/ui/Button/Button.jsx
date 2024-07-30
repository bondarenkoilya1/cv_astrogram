import React from "react";
import PropTypes from "prop-types";

import { ButtonStyled } from "./styled";

export const Button = ({ type, children, ...attrs }) => {
  return (
    <ButtonStyled type={type} {...attrs}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"])
};

Button.defaultProps = {
  type: "button"
};
