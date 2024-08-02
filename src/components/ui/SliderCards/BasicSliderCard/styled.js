import { Link } from "react-router-dom";

import styled from "@emotion/styled";

export const BasicSliderCardStyled = styled.li`
  background-color: #1e1d29;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BasicSliderCardImageStyled = styled.img`
  margin-bottom: -27px;
`;

export const BasicSliderCardContentStyled = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px 20px 30px 20px;
`;

export const BasicSliderCardCategoryStyled = styled.h5`
  margin-top: 30px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: #ff3981;
`;

export const BasicSliderCardTitleStyled = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  margin-top: 5px;
  font-family: "SF Pro Text", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`;

export const BasicSliderCardContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const BasicSliderCardPricesContainerStyled = styled.div``;

export const BasicSliderCardOldPriceStyled = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #ada4e7;
  text-decoration: line-through;
`;

export const BasicSliderCardCurrentPriceStyled = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
`;

export const BasicSliderCardButtonStyled = styled(Link)`
  border: 1px solid #fff;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
