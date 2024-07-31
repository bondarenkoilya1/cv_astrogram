import PropTypes from "prop-types";

import { LabelStyled, RadioButtonCustomStyled, RadioButtonSemanticStyled } from "./styled";

export const RadioButton = ({ children, isChecked, setIsChecked, name, key, ...attrs }) => {
  return (
    <LabelStyled key={key} {...attrs}>
      {/* hidden to be able to customize */}
      <RadioButtonSemanticStyled
        type="radio"
        name={name}
        checked={isChecked}
        onChange={() => setIsChecked(true)}
      />
      <RadioButtonCustomStyled />
      {children}
    </LabelStyled>
  );
};

RadioButton.propTypes = {
  children: PropTypes.node.isRequired,
  isChecked: PropTypes.bool.isRequired,
  setIsChecked: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
};
