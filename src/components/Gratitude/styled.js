import styled from "@emotion/styled";

import { Offer } from "../ui";

export const GratitudeOffersListStyled = styled.ul`
  margin-top: 100px;
  margin-bottom: 200px;

  @media screen and (max-width: 1130px) {
    margin-bottom: 120px;
  }
`;

export const GratitudeOfferStyled = styled(Offer)`
  margin-bottom: 120px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 730px) {
    margin-bottom: 80px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
