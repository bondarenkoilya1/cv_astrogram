import PropTypes from "prop-types";

import { LabelStyled, RadioButtonCustomStyled, RadioButtonSemanticStyled } from "./styled";

export const RadioButton = ({ children, name, value, checked, onChange, ...attrs }) => {
  return (
    <LabelStyled {...attrs}>
      {/* hidden to be able to customize */}
      <RadioButtonSemanticStyled
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <RadioButtonCustomStyled />
      {children}
    </LabelStyled>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node
};
