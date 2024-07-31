import PropTypes from "prop-types";

import { RadioGroupListStyled, RadioGroupStyled, RadioGroupTitleStyled } from "./styled";

import { RadioButton } from "../RadioButton";

export const RadioGroup = ({ array, isChecked, setIsChecked, title }) => {
  return (
    <RadioGroupStyled>
      {title && <RadioGroupTitleStyled>{title}</RadioGroupTitleStyled>}
      <RadioGroupListStyled>
        {array &&
          array.map(({ name, text }) => (
            <RadioButton
              name={name}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
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
  array: PropTypes.array.isRequired,
  isChecked: PropTypes.bool.isRequired,
  setIsChecked: PropTypes.func.isRequired,
  title: PropTypes.string
};

RadioGroup.defaultProps = {
  title: ""
};
