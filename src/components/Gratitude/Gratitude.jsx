import PropTypes from "prop-types";

import { ContainerStyled } from "../../styled";
import { GratitudeOffersStyled, GratitudeOfferStyled } from "./styled";

import { gratitudeOffers } from "../../data";
import { Thanks } from "../ui";

export const Gratitude = ({ resetForm }) => {
  return (
    <>
      <Thanks resetForm={resetForm} />
      <ContainerStyled>
        <GratitudeOffersStyled>
          {gratitudeOffers.map(({ imageSrc, imageAlt, title, description, linkText }) => (
            <GratitudeOfferStyled
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              title={title}
              description={description}
              linkText={linkText}
              onLinkClick={resetForm}
              key={crypto.randomUUID()}
            />
          ))}
        </GratitudeOffersStyled>
      </ContainerStyled>
    </>
  );
};

Gratitude.propTypes = {
  resetForm: PropTypes.func.isRequired
};
