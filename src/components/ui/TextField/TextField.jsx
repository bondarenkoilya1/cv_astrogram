import { forwardRef } from "react";
import PropTypes from "prop-types";

import { TextFieldContainerStyled, TextFieldLabelStyled, TextFieldStyled } from "./styled";

const TextField = forwardRef(({ id, label, placeholder, type = "text", name, ...attrs }, ref) => {
  return (
    <TextFieldContainerStyled {...attrs}>
      <TextFieldLabelStyled htmlFor={id}>{label}</TextFieldLabelStyled>
      <TextFieldStyled id={id} placeholder={placeholder} type={type} ref={ref} name={name} />
    </TextFieldContainerStyled>
  );
});

TextField.displayName = "TextField";

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "email", "phone"]),
  name: PropTypes.string.isRequired
};

export { TextField };
