import React from "react";

import {
  GetAnswersDescriptionStyled,
  GetAnswersIconStyled,
  GetAnswersInformationStyled,
  GetAnswersListStyled,
  GetAnswersStyled,
  GetAnswersTitleStyled
} from "./styled";

import { quoteCardAstrology } from "../../data";
import { PersonCard, QuoteCard } from "../ui";

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
        <PersonCard
          title="Василиса Иванова"
          description="Профессиональный астролог"
          backgroundName="vasilisaIvanova"
          style={{ width: "50%" }}
        />
        <QuoteCard
          title="Астрология поможет раскрыть тайны личной жизни, проливая свет на ваш путь к любви."
          description={quoteCardAstrology}
          style={{ width: "50%" }}
        />
      </GetAnswersListStyled>
    </GetAnswersStyled>
  );
};
