import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import { Button } from "../../Button/index.js";
import { Checkbox } from "../../Checkbox/index.js";
import { TextField } from "../../TextField";

export const BasicFormStyled = styled.div``;

export const BasicFormTitleStyled = styled.h2`
  font-family: "Foglihten", serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  text-transform: uppercase;

  @media screen and (max-width: 490px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const BasicFormContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const BasicFormLinkStyled = styled(Link)`
  text-decoration: underline;
`;

export const BasicFormFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  @media screen and (max-width: 490px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

export const BasicFormTextFieldWithMarginRight = styled(TextField)`
  margin-right: 32px;

  @media screen and (max-width: 640px) {
    margin-right: 0;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 490px) {
    margin-bottom: 20px;
  }
`;

export const BasicFormBlockWithMarginTop = styled.div`
  margin-top: 30px;

  @media screen and (max-width: 490px) {
    margin-top: 20px;
  }
`;

export const BasicFormButtonStyled = styled(Button)`
  @media screen and (max-width: 490px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const BasicFormCheckboxStyled = styled(Checkbox)`
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }

  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
`;
