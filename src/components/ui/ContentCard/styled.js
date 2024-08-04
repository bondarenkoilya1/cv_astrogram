import styled from "@emotion/styled";

import couple from "../../../assets/images/content-cards/couple.png";
import guide from "../../../assets/images/content-cards/guide.png";
import map from "../../../assets/images/content-cards/map.png";
import zodiacSigns from "../../../assets/images/content-cards/zodiac-signs.png";

const backgroundImages = {
  map,
  guide,
  zodiacSigns,
  couple
};

export const ContentCardStyled = styled.li`
  padding: 256px 80px 40px 80px;
  border-radius: 20px;
  width: 49%;
  background-position: top center;
  background-size: 140%;
  background-repeat: no-repeat;
  ${(props) =>
    props.backgroundName &&
    `
      background-image: url(${backgroundImages[props.backgroundName]});
    `}

  &:not(:nth-last-of-type(-n+2)) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1006px) {
    background-size: cover;
    padding-top: 200px;
  }

  @media screen and (max-width: 890px) {
    width: 100%;
    padding-top: 276px;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const ContentCardTitleStyled = styled.h3`
  font-family: "Foglihten", serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
  margin: 0 auto;
  text-transform: uppercase;

  @media screen and (max-width: 1006px) {
    font-size: 26px;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const ContentCardDescriptionStyled = styled.p`
  text-align: center;
  margin: 15px auto 0;
  font-size: 16px;
  line-height: 22px;

  @media screen and (max-width: 1006px) {
    font-size: 14px;
  }
`;
