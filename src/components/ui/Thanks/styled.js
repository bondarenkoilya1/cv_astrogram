import styled from "@emotion/styled";

import box from "../../../assets/images/thanks/box.png";
import { Link } from "../Link";

export const ThanksStyled = styled.section`
  height: 100vh;
  text-align: center;
  background: url(${box}), linear-gradient(180deg, #020107 55%, #3e115e 100%);
  background-repeat: no-repeat;
  background-size:
    80% 80%,
    100vw 100vh;
  background-position: center bottom;
  padding-top: 80px;
`;

export const ThanksTitleStyled = styled.h1`
  font-family: "Foglihten", serif;
  font-size: 54px;
  font-weight: 500;
  line-height: 54px;
  text-transform: uppercase;
`;

export const ThanksDescriptionStyled = styled.p`
  font-size: 16px;
  line-height: 26px;
  max-width: 520px;
  margin: 0 auto;
`;

export const ThanksTimerStyled = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  margin-top: 10px;
  color: #ff3981;
`;

export const ThanksLinkStyled = styled(Link)`
  margin-top: 60px;
`;
