import styled from "@emotion/styled";

import { HoroscopeComposition } from "../HoroscopeComposition";

export const MainFormStyled = styled.form`
  max-width: 750px;
  margin: 0 auto;
`;

export const MainFormTitleStyled = styled.h1`
  font-family: "Foglihten", serif;
  font-size: 54px;
  font-weight: 500;
  line-height: 64px;
  text-align: center;
  margin: 0 auto;
  max-width: 650px;

  @media screen and (max-width: 680px) {
    font-size: 40px;
    line-height: 48px;
    text-align: left;
  }

  @media screen and (max-width: 530px) {
    font-size: 36px;
    line-height: 38px;
  }
`;

export const MainFormDescriptionStyled = styled.p`
  text-align: center;
  margin: 20px auto 0;
  font-size: 16px;
  line-height: 26px;
  max-width: 580px;

  @media screen and (max-width: 680px) {
    text-align: left;
    margin: 20px 0 0 0;
  }
`;

export const MainFormHoroscopeCompositionStyled = styled(HoroscopeComposition)`
  margin-top: 60px;

  @media screen and (max-width: 680px) {
    margin-top: 40px;
  }
`;
