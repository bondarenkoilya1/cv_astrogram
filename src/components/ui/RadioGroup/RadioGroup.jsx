import PropTypes from "prop-types";

import { RadioGroupListStyled, RadioGroupStyled, RadioGroupTitleStyled } from "./styled";

import { RadioButton } from "../RadioButton";

export const RadioGroup = ({ array, selectedValue, setSelectedValue, title }) => {
  return (
    <RadioGroupStyled>
      {title && <RadioGroupTitleStyled>{title}</RadioGroupTitleStyled>}
      <RadioGroupListStyled>
        {array &&
          array.map(({ name, text, value }) => (
            <RadioButton
              name={name}
              value={value}
              selectedValue={selectedValue}
              onChange={setSelectedValue}
              key={crypto.randomUUID()}
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
  setSelectedValue: PropTypes.func.isRequired,
  title: PropTypes.string
};

RadioGroup.defaultProps = {
  title: ""
};
