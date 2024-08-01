import React from "react";
import PropTypes from "prop-types";

import { ButtonStyled } from "./styled";

export const Button = ({ type = "button", children, disabled = false, ...attrs }) => {
  return (
    <ButtonStyled type={type} disabled={disabled} {...attrs}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool
};
