import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { ContainerStyled } from "../../styled";
import { GratitudeOffersListStyled, GratitudeOfferStyled } from "./styled";

import { gratitudeOffers } from "../../data";
import { Thanks } from "../ui";

export const Gratitude = ({ resetForm }) => {
  return (
    <>
      <Thanks resetForm={resetForm} />
      <ContainerStyled>
        <GratitudeOffersListStyled>
          {gratitudeOffers.map(({ imageSrc, imageAlt, title, description, linkText }) => (
            <GratitudeOfferStyled
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              title={title}
              description={description}
              linkText={linkText}
              onLinkClick={resetForm}
              key={uuidv4()}
            />
          ))}
        </GratitudeOffersListStyled>
      </ContainerStyled>
    </>
  );
};

Gratitude.propTypes = {
  resetForm: PropTypes.func.isRequired
};
