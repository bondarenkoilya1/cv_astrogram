import React from "react";
import PropTypes from "prop-types";

import {
  BasicSliderCardButtonStyled,
  BasicSliderCardCategoryStyled,
  BasicSliderCardContainerStyled,
  BasicSliderCardContentStyled,
  BasicSliderCardCurrentPriceStyled,
  BasicSliderCardImageStyled,
  BasicSliderCardOldPriceStyled,
  BasicSliderCardPricesContainerStyled,
  BasicSliderCardStyled,
  BasicSliderCardTitleStyled
} from "./styled";

import { ReactComponent as ArrowIcon } from "../../../../assets/images/arrow.svg";

const renderPrice = (currentPrice, oldPrice) => {
  if (!currentPrice) {
    return (
      <BasicSliderCardPricesContainerStyled>
        <BasicSliderCardCurrentPriceStyled>Бесплатно</BasicSliderCardCurrentPriceStyled>
      </BasicSliderCardPricesContainerStyled>
    );
  }

  return (
    <BasicSliderCardPricesContainerStyled>
      {oldPrice && <BasicSliderCardOldPriceStyled>{oldPrice} руб.</BasicSliderCardOldPriceStyled>}
      <BasicSliderCardCurrentPriceStyled>{currentPrice} руб.</BasicSliderCardCurrentPriceStyled>
    </BasicSliderCardPricesContainerStyled>
  );
};

export const BasicSliderCard = ({ imageSrc, category, title, currentPrice, oldPrice, key }) => {
  return (
    <BasicSliderCardStyled key={key}>
      <BasicSliderCardImageStyled src={imageSrc} alt={title} />
      <BasicSliderCardContentStyled>
        <BasicSliderCardCategoryStyled>{category}</BasicSliderCardCategoryStyled>
        <BasicSliderCardTitleStyled>{title}</BasicSliderCardTitleStyled>
        <BasicSliderCardContainerStyled>
          {renderPrice(currentPrice, oldPrice)}
          <BasicSliderCardButtonStyled to="/">
            <ArrowIcon />
          </BasicSliderCardButtonStyled>
        </BasicSliderCardContainerStyled>
      </BasicSliderCardContentStyled>
    </BasicSliderCardStyled>
  );
};

BasicSliderCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currentPrice: PropTypes.number,
  oldPrice: PropTypes.number,
  key: PropTypes.string
};
