import styled from "@emotion/styled";

import quote from "../../../assets/images/quote-card/quote.svg";
import quoteReversed from "../../../assets/images/quote-card/quote-reversed.svg";
import rhombus from "../../../assets/images/quote-card/rhombus.svg";
import star from "../../../assets/images/quote-card/star.svg";

export const QuoteCardStyled = styled.li`
  padding: 188px 50px;
  border-radius: 60px;
  background:
    url(${quote}) top 10% left 7%,
    url(${star}) top 10% right 7%,
    url(${rhombus}) bottom 10% left 7%,
    url(${quoteReversed}) bottom 10% right 7%,
    linear-gradient(180deg, #3a2643 0%, #231e48 100%);
  background-repeat: no-repeat;

  @media screen and (max-width: 570px) {
    padding: 80px 50px;
    background:
      url(${quote}) top 5% left 7% / 45px,
      url(${star}) top 5% right 7% / 45px,
      url(${rhombus}) bottom 5% left 7% / 45px,
      url(${quoteReversed}) bottom 5% right 7% / 45px,
      linear-gradient(180deg, #3a2643 0%, #231e48 100%);
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 500px) {
    padding: 80px 30px;
  }
`;

export const QuoteCardTitleStyled = styled.h4`
  font-family: "SF Pro Text", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  max-width: 622px;

  @media screen and (max-width: 570px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (max-width: 360px) {
    font-size: 18px;
  }
`;

export const QuoteCardDescriptionListStyled = styled.ul`
  margin-top: 48px;
`;

export const QuoteCardDescriptionStyled = styled.li`
  margin-bottom: 30px;
  font-family: "SF Pro Text", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  max-width: 622px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 570px) {
    font-size: 16px;
    line-height: 22px;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;
