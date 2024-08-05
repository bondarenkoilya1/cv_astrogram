import styled from "@emotion/styled";

export const TextWithIconStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
`;

export const OrderCardRecipientHeaderTextStyled = styled.p`
  font-size: 16px;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  line-height: 19px;
  margin-left: 10px;
  flex: 1;
  max-width: calc(100% - 20px);
  word-wrap: break-word;

  @media (max-width: 780px) {
    max-width: 100%;
  }
`;
