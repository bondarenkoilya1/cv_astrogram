import styled from "@emotion/styled";

export const OfferStyled = styled.section``;

export const OfferTitleStyled = styled.h2`
  text-transform: uppercase;
  max-width: 941px;
  margin: 60px auto 0 auto;
  font-family: "Foglihten", serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  text-align: center;

  @media screen and (max-width: 1250px) {
    font-size: 30px;
    line-height: 36px;
  }

  @media screen and (max-width: 970px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 340px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

export const OfferDescriptionStyled = styled.p`
  max-width: 613px;
  margin: 20px auto 0 auto;
  text-align: center;
  font-size: 16px;
  line-height: 26px;
`;

export const OfferLinkContainerStyled = styled.div`
  margin-top: 44px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 580px) {
    margin-top: 30px;
  }
`;
