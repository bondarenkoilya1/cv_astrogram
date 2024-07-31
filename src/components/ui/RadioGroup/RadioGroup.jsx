import PropTypes from "prop-types";

import { RadioButton } from "../RadioButton";

export const RadioGroup = ({ array, isChecked, setIsChecked }) => {
  return (
    <ul>
      {array &&
        array.map(({ name, text }) => (
          <RadioButton
            name={name}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            key={crypto.randomUUID()}>
            {text}
          </RadioButton>
        ))}
    </ul>
  );
};

RadioGroup.propTypes = {
  array: PropTypes.array.isRequired,
  isChecked: PropTypes.bool.isRequired,
  setIsChecked: PropTypes.func.isRequired
};
