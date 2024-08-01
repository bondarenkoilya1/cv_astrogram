import styled from "@emotion/styled";

import couple from "../../../assets/images/content-cards/couple.png";
import guide from "../../../assets/images/content-cards/guide.png";
import map from "../../../assets/images/content-cards/map.png";
import zodiacSigns from "../../../assets/images/content-cards/zodiac-signs.png";

export const ContentCardStyled = styled.li`
  padding: 256px 80px 40px 80px;
  border-radius: 20px;
  width: 48.5%;
  background-position: top center;
  background-size: 150%;
  background-repeat: no-repeat;
  ${(props) =>
    props.map &&
    `
    background-image: url(${map});
  `}${(props) =>
    props.guide &&
    `
    background-image: url(${guide});
  `}${(props) =>
    props.zodiacSigns &&
    `
    background-image: url(${zodiacSigns});
  `}${(props) =>
    props.couple &&
    `
    background-image: url(${couple});
  `}
`;

export const ContentCardTitleStyled = styled.h3`
  font-family: "Foglihten", serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
  margin: 0 auto;
  text-transform: uppercase;
`;

export const ContentCardDescriptionStyled = styled.p`
  text-align: center;
  margin: 15px auto 0;
  font-size: 16px;
  line-height: 22px;
`;
