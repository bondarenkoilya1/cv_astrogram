import styled from "@emotion/styled";

import { Image } from "../../components";

export const HoroscopesContainerStyled = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

export const MainImageStyled = styled(Image)`
  margin-bottom: 60px;

  @media screen and (max-width: 900px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;
