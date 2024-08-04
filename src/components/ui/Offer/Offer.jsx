import PropTypes from "prop-types";

import {
  OfferDescriptionStyled,
  OfferLinkContainerStyled,
  OfferStyled,
  OfferTitleStyled
} from "./styled";

import { Image, Link } from "../index.js";

export const Offer = ({
  imageSrc,
  imageAlt,
  title,
  description,
  linkText,
  onLinkClick,
  ...attrs
}) => {
  return (
    <OfferStyled {...attrs}>
      <Image src={imageSrc} alt={imageAlt} height="560px" width="100%" />
      <OfferTitleStyled>{title}</OfferTitleStyled>
      <OfferDescriptionStyled>{description}</OfferDescriptionStyled>
      <OfferLinkContainerStyled>
        <Link smallpadding="true" onClick={onLinkClick}>
          {linkText}
        </Link>
      </OfferLinkContainerStyled>
    </OfferStyled>
  );
};

Offer.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func.isRequired
};
