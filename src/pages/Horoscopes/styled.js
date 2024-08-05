import { css } from "@emotion/react";

import styled from "@emotion/styled";

import { AdditionalNavigation, GetAnswers, HoroscopeContent, Image } from "../../components";

export const HoroscopesContainerStyled = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

export const MainImageStyled = styled(Image)`
  margin-bottom: 60px;
  margin-top: 20px;

  @media screen and (max-width: 900px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const sharedStyles = css`
  margin-top: 120px;

  @media screen and (max-width: 910px) {
    margin-top: 80px;
  }
`;

export const MainGetAnswersStyled = styled(GetAnswers)`
  ${sharedStyles};
`;

export const MainHoroscopeContentStyled = styled(HoroscopeContent)`
  ${sharedStyles};
`;

export const AdditionalNavigationStyled = styled(AdditionalNavigation)`
  margin-top: 20px;
`;
