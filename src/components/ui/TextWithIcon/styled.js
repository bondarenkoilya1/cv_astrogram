import styled from "@emotion/styled";

export const TextWithIconStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const OrderCardRecipientHeaderTextStyled = styled.p`
  font-size: 16px;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  line-height: 19px;
  margin-left: 10px;
`;
