import styled from "@emotion/styled";

import { Button, Checkbox, TextWithIcon } from "../ui";

export const OrderPlacementStyled = styled.form`
  max-width: 750px;
  margin: 80px auto 0 auto;

  @media screen and (max-width: 860px) {
    max-width: 90%;
  }
  @media screen and (max-width: 750px) {
    margin-top: 40px;
  }
`;

export const OrderPlacementTitleStyled = styled.h1`
  font-family: "Foglihten", serif;
  font-size: 54px;
  font-weight: 500;
  line-height: 64px;
  text-transform: uppercase;
  margin-bottom: 60px;

  @media screen and (max-width: 500px) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const OrderCardRecipientHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderCardRecipientHeaderTitleStyled = styled.h4`
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
`;

export const TextWithIconStyled = styled(TextWithIcon)`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const OrderCardRecipientContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const OrderCardRecipientListStyled = styled.ul``;

export const OrderCardButtonStyled = styled(Button)`
  &:hover {
    background: linear-gradient(90deg, #5846fb 0%, #ce66ff 100%);
  }

  @media screen and (max-width: 780px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const OrderCardInformationListStyled = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const OrderCardInformationCheckboxStyled = styled(Checkbox)`
  margin-bottom: 10px;
  cursor: default;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const OrderPlacementSeparator = styled.div`
  width: 100%;
  border: 1px solid #312d48;
  margin: 40px 0;
`;

export const OrderPlacementContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderPlacementResultTitleStyled = styled.h4`
  font-family: "Foglihten", serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 44px;
  text-transform: uppercase;

  @media screen and (max-width: 380px) {
    line-height: 44px;
  }
`;

export const OrderPlacementResultContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OrderPlacementPriceStyled = styled.p`
  font-size: 32px;
  font-weight: 700;
  line-height: 52px;

  @media screen and (max-width: 380px) {
    line-height: 32px;
  }
`;

export const OrderPlacementPriceDescriptionStyled = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #b2add8;
`;
