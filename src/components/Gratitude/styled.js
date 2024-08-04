import styled from "@emotion/styled";

import { Offer } from "../ui";

export const GratitudeOffersStyled = styled.ul`
  margin-top: 100px;
  margin-bottom: 200px;
`;

export const GratitudeOfferStyled = styled(Offer)`
  margin-bottom: 120px;

  &:last-child {
    margin-bottom: 0;
  }
`;
