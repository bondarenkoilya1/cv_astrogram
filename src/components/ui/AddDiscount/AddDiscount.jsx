import React from "react";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

import {
  AddDiscountContainerStyled,
  AddDiscountDescriptionStyled,
  AddDiscountImageStyled,
  AddDiscountOldPriceStyled,
  AddDiscountPriceContainer,
  AddDiscountPriceStyled,
  AddDiscountSeparator,
  AddDiscountStyled,
  AddDiscountTitleStyled
} from "./styled";

import discountImage from "../../../assets/images/add-discount/25-percents.png";
import { Checkbox } from "../Checkbox";

const renderPrice = (currentPrice, oldPrice) => {
  return (
    <AddDiscountPriceContainer>
      <AddDiscountPriceStyled>+{currentPrice} руб.</AddDiscountPriceStyled>
      <AddDiscountOldPriceStyled>{oldPrice} руб.</AddDiscountOldPriceStyled>
    </AddDiscountPriceContainer>
  );
};

export const AddDiscount = ({
  discount,
  currentPrice,
  oldPrice,
  control = {},
  checked,
  ...attrs
}) => {
  return (
    <AddDiscountStyled {...attrs}>
      <AddDiscountImageStyled src={discountImage} />
      <AddDiscountTitleStyled>Получите весь набор со скидкой {discount}%</AddDiscountTitleStyled>
      <AddDiscountDescriptionStyled>
        Получите все дополнительные блоки гороскопа со скидкой
      </AddDiscountDescriptionStyled>
      <AddDiscountContainerStyled>
        <Controller
          name="addDiscount"
          control={control}
          defaultValue={checked}
          render={({ field: { onChange, value } }) => (
            <Checkbox isChecked={value} onChange={() => onChange(!value)} type="outline">
              {value ? "Добавлено" : "Добавить к заказу"}
            </Checkbox>
          )}
        />
        <AddDiscountSeparator defaultMargin />
        {renderPrice(currentPrice, oldPrice)}
      </AddDiscountContainerStyled>
    </AddDiscountStyled>
  );
};

AddDiscount.propTypes = {
  discount: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
  control: PropTypes.object,
  checked: PropTypes.bool
};
