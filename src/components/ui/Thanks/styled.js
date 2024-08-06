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
  padding: 80px 0;

  @media screen and (max-width: 1000px) {
    background: linear-gradient(180deg, #020107 55%, #3e115e 100%);
    height: auto;
  }

  @media screen and (max-width: 610px) {
    padding: 60px 0;
  }
`;

export const ThanksTitleStyled = styled.h1`
  font-family: "Foglihten", serif;
  font-size: 54px;
  font-weight: 500;
  line-height: 54px;
  text-transform: uppercase;
  max-width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 610px) {
    font-size: 36px;
    line-height: 44px;
  }
`;

export const ThanksDescriptionStyled = styled.p`
  font-size: 16px;
  line-height: 26px;
  max-width: 520px;
  margin: 0 auto;

  @media screen and (max-width: 610px) {
    max-width: 90%;
  }
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

  @media screen and (max-width: 610px) {
    margin-top: 50px;
  }
`;
