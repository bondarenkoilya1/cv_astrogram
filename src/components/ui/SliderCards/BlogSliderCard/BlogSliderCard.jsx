import React from "react";
import PropTypes from "prop-types";

import {
  BlogSliderCardImageStyled,
  BlogSliderCardLinkStyled,
  BlogSliderCardStyled,
  BlogSliderCardTitleStyled
} from "./styled";

export const BlogSliderCard = ({ imageSrc, title, link }) => {
  return (
    <BlogSliderCardStyled>
      <BlogSliderCardLinkStyled to={link ? link : "/"}>
        <BlogSliderCardImageStyled src={imageSrc} alt={title} />
        <BlogSliderCardTitleStyled>{title}</BlogSliderCardTitleStyled>
      </BlogSliderCardLinkStyled>
    </BlogSliderCardStyled>
  );
};

BlogSliderCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string
};
