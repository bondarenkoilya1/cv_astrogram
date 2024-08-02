import React from "react";
import PropTypes from "prop-types";

import {
  BlogSliderCardImageStyled,
  BlogSliderCardStyled,
  BlogSliderCardTitleStyled
} from "./styled";

export const BlogSliderCard = ({ imageSrc, title }) => {
  return (
    <BlogSliderCardStyled>
      <BlogSliderCardImageStyled src={imageSrc} alt={title} />
      <BlogSliderCardTitleStyled>{title}</BlogSliderCardTitleStyled>
    </BlogSliderCardStyled>
  );
};

BlogSliderCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
