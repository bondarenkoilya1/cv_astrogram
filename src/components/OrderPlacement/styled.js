import styled from "@emotion/styled";

import { Checkbox, TextWithIcon } from "../ui";

export const OrderPlacementStyled = styled.form`
  max-width: 750px;
  margin: 80px auto 0 auto;
`;

export const OrderPlacementTitleStyled = styled.h1`
  font-family: "Foglihten", serif;
  font-size: 54px;
  font-weight: 500;
  line-height: 64px;
  text-transform: uppercase;
  margin-bottom: 60px;
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
`;

export const OrderCardRecipientListStyled = styled.ul``;

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
`;

export const OrderPlacementPriceDescriptionStyled = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #b2add8;
`;
