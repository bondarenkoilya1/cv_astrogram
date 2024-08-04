import React from "react";
import PropTypes from "prop-types";

import { OrderButtonGroupStyled } from "./styled";

import { OrderButton } from "../OrderButton";

export const OrderButtonGroup = ({ prevStep, nextStep, nextStepText = "Далее", ...attrs }) => {
  return (
    <OrderButtonGroupStyled {...attrs}>
      <OrderButton onClick={prevStep} category="prev">
        Назад
      </OrderButton>
      <OrderButton onClick={nextStep} category="next" type="submit">
        {nextStepText}
      </OrderButton>
    </OrderButtonGroupStyled>
  );
};

OrderButtonGroup.propTypes = {
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  nextStepText: PropTypes.string
};
