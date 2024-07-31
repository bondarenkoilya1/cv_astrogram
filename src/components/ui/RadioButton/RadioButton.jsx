import PropTypes from "prop-types";

import { LabelStyled, RadioButtonCustomStyled, RadioButtonSemanticStyled } from "./styled";

export const RadioButton = ({ children, name, value, selectedValue, onChange, key, ...attrs }) => {
  return (
    <LabelStyled key={key} {...attrs}>
      {/* hidden to be able to customize */}
      <RadioButtonSemanticStyled
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
      />
      <RadioButtonCustomStyled />
      {children}
    </LabelStyled>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  key: PropTypes.string.isRequired
};
