import PropTypes from "prop-types";

import {
  OfferDescriptionStyled,
  OfferLinkContainerStyled,
  OfferStyled,
  OfferTitleStyled
} from "./styled";

import { Image, Link } from "../ui";

export const Offer = ({ imageSrc, imageAlt, title, description, ...attrs }) => {
  return (
    <OfferStyled {...attrs}>
      <Image src={imageSrc} alt={imageAlt} height="560px" width="100%" />
      <OfferTitleStyled>{title}</OfferTitleStyled>
      <OfferDescriptionStyled>{description}</OfferDescriptionStyled>
      <OfferLinkContainerStyled>
        <Link smallPadding>Узнать совместимость</Link>
      </OfferLinkContainerStyled>
    </OfferStyled>
  );
};

Offer.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
