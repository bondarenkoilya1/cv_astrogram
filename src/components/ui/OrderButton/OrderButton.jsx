import React from "react";
import PropTypes from "prop-types";

import { OrderButtonContainerStyled, OrderButtonStyled } from "./styled";

import { ReactComponent as ArrowIcon } from "../../../assets/images/arrow-filled.svg";

export const OrderButton = ({ children, category, onClick, type, ...attrs }) => {
  if (category === "prev") {
    return (
      <OrderButtonContainerStyled onClick={onClick}>
        <ArrowIcon />
        <OrderButtonStyled category={category} {...attrs}>
          {children}
        </OrderButtonStyled>
      </OrderButtonContainerStyled>
    );
  }

  return (
    <OrderButtonStyled category={category} onClick={onClick} type={type} {...attrs}>
      {children}
    </OrderButtonStyled>
  );
};

OrderButton.propTypes = {
  children: PropTypes.node.isRequired,
  category: PropTypes.oneOf(["prev", "next"]).isRequired,
  type: PropTypes.oneOf(["submit", "button"]),
  onClick: PropTypes.func
};
