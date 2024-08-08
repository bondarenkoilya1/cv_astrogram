import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import {
  QuoteCardDescriptionListStyled,
  QuoteCardDescriptionStyled,
  QuoteCardStyled,
  QuoteCardTitleStyled
} from "./styled";

export const QuoteCard = ({ title, description = [], ...attrs }) => {
  return (
    <QuoteCardStyled {...attrs}>
      <QuoteCardTitleStyled>{title}</QuoteCardTitleStyled>
      <QuoteCardDescriptionListStyled>
        {description &&
          description.map((description) => (
            <QuoteCardDescriptionStyled key={uuidv4()}>
              {description}
            </QuoteCardDescriptionStyled>
          ))}
      </QuoteCardDescriptionListStyled>
    </QuoteCardStyled>
  );
};

QuoteCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired
};
