import PropTypes from "prop-types";

import { TextFieldContainerStyled, TextFieldLabelStyled, TextFieldStyled } from "./styled";

export const TextField = ({ id, label, placeholder, type, ...attrs }) => {
  return (
    <TextFieldContainerStyled {...attrs}>
      <TextFieldLabelStyled htmlFor={id}>{label}</TextFieldLabelStyled>
      <TextFieldStyled id={id} placeholder={placeholder} type={type} />
    </TextFieldContainerStyled>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "email", "phone"])
};

TextField.defaultProps = {
  type: "text"
};
