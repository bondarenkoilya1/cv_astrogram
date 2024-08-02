import styled from "@emotion/styled";

import { ReactComponent as StarIcon } from "../../assets/images/star.svg";

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
`;

export const GetAnswersTitleStyled = styled.h2`
  font-family: "Foglihten", serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  max-width: 1006px;
  text-align: center;
  margin-top: 30px;
`;

export const GetAnswersListStyled = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 60px;
`;
