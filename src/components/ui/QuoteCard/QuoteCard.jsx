import PropTypes from "prop-types";

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
            <QuoteCardDescriptionStyled key={crypto.randomUUID()}>
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
