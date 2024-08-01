import PropTypes from "prop-types";

import { ContentCardDescriptionStyled, ContentCardStyled, ContentCardTitleStyled } from "./styled";

export const ContentCard = ({ title = "", description = "", ...attrs }) => {
  return (
    <ContentCardStyled {...attrs}>
      <ContentCardTitleStyled>{title}</ContentCardTitleStyled>
      <ContentCardDescriptionStyled>{description}</ContentCardDescriptionStyled>
    </ContentCardStyled>
  );
};

ContentCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
