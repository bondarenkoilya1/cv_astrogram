import PropTypes from "prop-types";

import { CheckboxCustomStyled, CheckboxSemanticStyled, LabelStyled } from "./styled";

export const Checkbox = ({ children, isChecked, setIsChecked, type, ...attrs }) => {
  return (
    <LabelStyled type={type} {...attrs}>
      {/* hidden to be able to customize */}
      <CheckboxSemanticStyled
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <CheckboxCustomStyled />
      {children}
    </LabelStyled>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  isChecked: PropTypes.bool.isRequired,
  setIsChecked: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["outline", "text", "squared"]).isRequired
};
