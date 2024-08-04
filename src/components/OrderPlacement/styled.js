import styled from "@emotion/styled";

import { TextWithIcon } from "../ui";

export const OrderPlacementStyled = styled.div`
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
