import PropTypes from "prop-types";

import { RadioGroupListStyled, RadioGroupStyled, RadioGroupTitleStyled } from "./styled";

import { RadioButton } from "../RadioButton";

export const RadioGroup = ({
  array,
  selectedValue,
  onChange,
  title = "",
  error,
  isTitleUppercase = false
}) => {
  return (
    <RadioGroupStyled>
      {title && (
        <RadioGroupTitleStyled isTitleUppercase={isTitleUppercase}>{title}</RadioGroupTitleStyled>
      )}
      <RadioGroupListStyled>
        {array &&
          array.map(({ name, text, value }) => (
            <RadioButton
              name={name}
              value={value}
              checked={selectedValue === value}
              onChange={() => onChange(value)}
              key={crypto.randomUUID()}
              error={error}
              style={{ marginRight: "10px" }}>
              {text}
            </RadioButton>
          ))}
      </RadioGroupListStyled>
    </RadioGroupStyled>
  );
};

RadioGroup.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  isTitleUppercase: PropTypes.bool,
  error: PropTypes.bool
};
