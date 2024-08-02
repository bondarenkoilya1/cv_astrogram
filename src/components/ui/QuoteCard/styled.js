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
`;

export const QuoteCardTitleStyled = styled.h4`
  font-family: "SF Pro Text", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  max-width: 622px;
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
`;
