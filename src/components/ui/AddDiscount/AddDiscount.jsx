import React from "react";
import PropTypes from "prop-types";

import { VerticalLineStyled } from "../../../styled";
import {
  AddDiscountContainerStyled,
  AddDiscountDescriptionStyled,
  AddDiscountOldPriceStyled,
  AddDiscountPriceContainer,
  AddDiscountPriceStyled,
  AddDiscountStyled,
  AddDiscountTitleStyled
} from "./styled";

import { Checkbox } from "../Checkbox";

const renderPrice = (currentPrice, oldPrice) => {
  return (
    <AddDiscountPriceContainer>
      <AddDiscountPriceStyled>+{currentPrice} руб.</AddDiscountPriceStyled>
      <AddDiscountOldPriceStyled>{oldPrice} руб.</AddDiscountOldPriceStyled>
    </AddDiscountPriceContainer>
  );
};

export const AddDiscount = ({ discount, currentPrice, oldPrice }) => {
  const [data, setData] = React.useState(false);

  return (
    <AddDiscountStyled>
      <AddDiscountTitleStyled>Получите весь набор со скидкой {discount}%</AddDiscountTitleStyled>
      <AddDiscountDescriptionStyled>
        Получите все дополнительные блоки гороскопа со скидкой
      </AddDiscountDescriptionStyled>
      <AddDiscountContainerStyled>
        <Checkbox isChecked={data} setIsChecked={setData} type="outline">
          {data ? "Добавлено" : "Добавить к заказу"}
        </Checkbox>
        <VerticalLineStyled defaultMargin />
        {renderPrice(currentPrice, oldPrice)}
      </AddDiscountContainerStyled>
    </AddDiscountStyled>
  );
};

AddDiscount.propTypes = {
  discount: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired
};
