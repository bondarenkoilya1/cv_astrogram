import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import {
  TextFieldContainerStyled,
  TextFieldLabelStyled,
  TextFieldMaskedContainerStyled,
  TextFieldMaskedFieldContainerStyled,
  TextFieldMaskedImageStyled,
  TextFieldMaskedStyled,
  TextFieldStyled
} from "./styled";

const TextField = forwardRef((props, ref) => {
  const {
    id,
    label,
    placeholder,
    type = "text",
    name,
    masked = false,
    imageAttrs = { src: "", alt: "", width: "", height: "" },
    ...attrs
  } = props;

  const { src, alt, width, height } = imageAttrs;

  if (masked)
    return (
      <TextFieldMaskedContainerStyled>
        <TextFieldLabelStyled>{label}</TextFieldLabelStyled>
        <TextFieldMaskedFieldContainerStyled>
          {src && <TextFieldMaskedImageStyled src={src} alt={alt} width={width} height={height} />}
          <TextFieldMaskedStyled
            ref={ref}
            name={name}
            id={id}
            placeholder={placeholder}
            autocomplete="off"
            {...attrs}
          />
        </TextFieldMaskedFieldContainerStyled>
      </TextFieldMaskedContainerStyled>
    );

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
  name: PropTypes.string.isRequired,
  masked: PropTypes.bool,
  imageAttrs: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string
  })
};

export { TextField };
