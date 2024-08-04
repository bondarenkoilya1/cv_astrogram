import React from "react";

import {
  GetAnswersDescriptionStyled,
  GetAnswersIconStyled,
  GetAnswersInformationStyled,
  GetAnswersListStyled,
  GetAnswersStyled,
  GetAnswersTitleStyled,
  PersonCardStyled,
  QuoteCardStyled
} from "./styled";

import { quoteCardAstrology } from "../../data";

export const GetAnswers = ({ ...attrs }) => {
  return (
    <GetAnswersStyled {...attrs}>
      <GetAnswersInformationStyled>
        <GetAnswersIconStyled />
        <GetAnswersDescriptionStyled>
          Получите ответы на свои вопросы в нашем гороскопе!
        </GetAnswersDescriptionStyled>
        <GetAnswersTitleStyled>
          почему любовь порой кажется такой запутанной и непредсказуемой?
        </GetAnswersTitleStyled>
      </GetAnswersInformationStyled>
      <GetAnswersListStyled>
        <PersonCardStyled
          title="Василиса Иванова"
          description="Профессиональный астролог"
          backgroundName="vasilisaIvanova"
        />
        <QuoteCardStyled
          title="Астрология поможет раскрыть тайны личной жизни, проливая свет на ваш путь к любви."
          description={quoteCardAstrology}
        />
      </GetAnswersListStyled>
    </GetAnswersStyled>
  );
};
