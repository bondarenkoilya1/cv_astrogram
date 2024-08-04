import React from "react";
import PropTypes from "prop-types";

import { FilledButtonStyled, OutlineButtonStyled } from "./styled";

export const Button = ({
  type = "button",
  appearance = "outline",
  children,
  disabled = false,
  ...attrs
}) => {
  const ButtonTag = appearance === "outline" ? OutlineButtonStyled : FilledButtonStyled;

  return (
    <ButtonTag type={type} disabled={disabled} appearance={appearance} {...attrs}>
      {children}
    </ButtonTag>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  appearance: PropTypes.oneOf(["filled", "outline"]),
  disabled: PropTypes.bool
};
