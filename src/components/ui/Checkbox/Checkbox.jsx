import PropTypes from "prop-types";

import { CheckboxCustomStyled, CheckboxSemanticStyled, LabelStyled } from "./styled";

export const Checkbox = ({
  children,
  isChecked = false,
  onChange = () => {},
  type,
  textColor,
  disabled = false,
  ...attrs
}) => {
  return (
    <LabelStyled type={type} textColor={textColor} disabled={disabled} {...attrs}>
      {/* hidden to be able to customize */}
      <CheckboxSemanticStyled type="checkbox" checked={isChecked} onChange={onChange} />
      <CheckboxCustomStyled />
      {children}
    </LabelStyled>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(["outline", "text", "squared"]).isRequired,
  textColor: PropTypes.oneOf(["white", "default"]),
  disabled: PropTypes.bool
};
