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

const renderCheckbox = (type, isChecked, handleProductCardClick) => {
  switch (type) {
    case "main":
      return (
        <Checkbox isChecked={isChecked} setIsChecked={handleProductCardClick} type="text">
          {isChecked ? "В составе" : "Добавить"}
        </Checkbox>
      );
    case "gift":
      return (
        <Checkbox isChecked={isChecked} setIsChecked={handleProductCardClick} type="text">
          {isChecked ? "В подарок " : "Добавить "}
        </Checkbox>
      );
    case "additional":
      return (
        <ProductCardContainerStyled>
          <Checkbox isChecked={isChecked} setIsChecked={handleProductCardClick} type="text">
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

export const ProductCard = ({ type, subtitle, title, key }) => {
  const initialCheckedState = type === "gift";
  const [isChecked, setIsChecked] = React.useState(initialCheckedState);

  const handleProductCardClick = () => setIsChecked((prevChecked) => !prevChecked);

  return (
    <ProductCardStyled onClick={handleProductCardClick} key={key}>
      <ProductCardContentStyled>
        <ProductCardSubtitleStyled>{subtitle}</ProductCardSubtitleStyled>
        <ProductCardTitleStyled>{title}</ProductCardTitleStyled>
      </ProductCardContentStyled>
      <ProductCardFooterStyled>
        {renderCheckbox(type, isChecked, handleProductCardClick)}
      </ProductCardFooterStyled>
    </ProductCardStyled>
  );
};

ProductCard.propTypes = {
  type: PropTypes.oneOf(["main", "additional", "gift"]).isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
};
