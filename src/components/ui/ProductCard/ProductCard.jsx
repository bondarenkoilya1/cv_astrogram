import React from "react";
import PropTypes from "prop-types";

import { VerticalLineStyled } from "../../../styled";
import {
  ProductCardContainerStyled,
  ProductCardContentStyled,
  ProductCardFooterStyled,
  ProductCardPriceStyled,
  ProductCardStyled,
  ProductCardSubtitleStyled,
  ProductCardTitleStyled
} from "./styled";

import { Checkbox } from "../Checkbox";

const renderCheckbox = (type, isChecked) => {
  switch (type) {
    case "main":
      return (
        <Checkbox isChecked={isChecked} type="text">
          {isChecked ? "В составе" : "Добавить"}
        </Checkbox>
      );
    case "gift":
      return (
        <Checkbox isChecked={isChecked} type="text">
          {isChecked ? "В подарок " : "Добавить "}
        </Checkbox>
      );
    case "additional":
      return (
        <ProductCardContainerStyled>
          <Checkbox isChecked={isChecked} type="text">
            {isChecked ? "В составе" : "Добавить"}
          </Checkbox>
          <VerticalLineStyled smallMargin />
          <ProductCardPriceStyled>+150 руб</ProductCardPriceStyled>
        </ProductCardContainerStyled>
      );
    default:
      return null;
  }
};

export const ProductCard = ({ type, subtitle, title, isChecked, onChange, ...attrs }) => {
  const handleProductCardClick = () => {
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <ProductCardStyled {...attrs} onClick={handleProductCardClick}>
      <ProductCardContentStyled>
        <ProductCardSubtitleStyled>{subtitle}</ProductCardSubtitleStyled>
        <ProductCardTitleStyled>{title}</ProductCardTitleStyled>
      </ProductCardContentStyled>
      <ProductCardFooterStyled>{renderCheckbox(type, isChecked)}</ProductCardFooterStyled>
    </ProductCardStyled>
  );
};

ProductCard.propTypes = {
  type: PropTypes.oneOf(["main", "additional", "gift"]).isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func
};
