import styled from "@emotion/styled";

import { ReactComponent as StarIcon } from "../../assets/images/star.svg";
import { PersonCard, QuoteCard } from "../ui";

export const GetAnswersStyled = styled.section``;

export const GetAnswersInformationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GetAnswersIconStyled = styled(StarIcon)``;

export const GetAnswersDescriptionStyled = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 20px;
  text-align: center;

  @media screen and (max-width: 910px) {
    font-size: 16px;
  }
  @media screen and (max-width: 500px) {
    max-width: 256px;
  }
`;

export const GetAnswersTitleStyled = styled.h2`
  font-family: "Foglihten", serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  max-width: 1006px;
  text-align: center;
  margin-top: 30px;

  @media screen and (max-width: 910px) {
    font-size: 30px;
    line-height: 36px;
    margin-top: 15px;
  }
`;

export const GetAnswersListStyled = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 60px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    margin-top: 30px;
  }
`;

export const PersonCardStyled = styled(PersonCard)`
  width: 50%;

  @media screen and (max-width: 1610px) {
    width: 40%;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: 1000px;
  }

  @media screen and (max-width: 800px) {
    height: 700px;
  }

  @media screen and (max-width: 500px) {
    height: 400px;
  }

  @media screen and (max-width: 360px) {
    height: 290px;
  }
`;

export const QuoteCardStyled = styled(QuoteCard)`
  width: 50%;

  @media screen and (max-width: 1610px) {
    width: 60%;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;
