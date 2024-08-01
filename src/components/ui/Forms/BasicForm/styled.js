import { Link } from "react-router-dom";

import styled from "@emotion/styled";

export const BasicFormStyled = styled.div``;

export const BasicFormTitleStyled = styled.h2`
  font-family: "Foglihten", serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  text-transform: uppercase;
`;

export const BasicFormContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BasicFormLinkStyled = styled(Link)`
  text-decoration: underline;
`;

export const BasicFormFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BasicFormPriceInformationStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasicFormPriceStyled = styled.span`
  font-size: 32px;
  font-weight: 700;
  line-height: 52px;
`;

export const BasicFormPriceSubtitleStyled = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #b2add8;
`;
