import PropTypes from "prop-types";

import { CheckboxCustomStyled, CheckboxSemanticStyled, LabelStyled } from "./styled";

export const Checkbox = ({ children, isChecked, setIsChecked }) => {
  return (
    <LabelStyled>
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

// type outline => label add some prop or smth to point on it and later customize in css

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  isChecked: PropTypes.bool.isRequired,
  setIsChecked: PropTypes.func.isRequired
};
