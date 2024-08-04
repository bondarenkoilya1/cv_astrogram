import styled from "@emotion/styled";

export const RadioGroupStyled = styled.div``;

export const RadioGroupTitleStyled = styled.h4`
  font-size: ${({ isTitleUppercase }) => (isTitleUppercase ? "36px" : "16px")};
  font-weight: ${({ isTitleUppercase }) => (isTitleUppercase ? "500" : "700")};
  line-height: ${({ isTitleUppercase }) => (isTitleUppercase ? "44px" : "26px")};
  margin-bottom: 15px;
  text-transform: ${({ isTitleUppercase }) => (isTitleUppercase ? "uppercase" : "none")};
  font-family: ${({ isTitleUppercase }) =>
    isTitleUppercase ? `"Foglihten", serif` : `"Space Grotesk", sans-serif`};
`;

export const RadioGroupListStyled = styled.ul`
  display: flex;
  align-items: center;
`;
