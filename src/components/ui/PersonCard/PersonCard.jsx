import PropTypes from "prop-types";

import { PersonCardDescriptionStyled, PersonCardStyled, PersonCardTitleStyled } from "./styled";

export const PersonCard = ({ title, description, backgroundName, ...attrs }) => {
  return (
    <PersonCardStyled backgroundName={backgroundName} {...attrs}>
      <PersonCardTitleStyled>{title}</PersonCardTitleStyled>
      <PersonCardDescriptionStyled>{description}</PersonCardDescriptionStyled>
    </PersonCardStyled>
  );
};

PersonCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  backgroundName: PropTypes.string.isRequired
};
