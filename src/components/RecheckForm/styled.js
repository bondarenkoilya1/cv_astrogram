import styled from "@emotion/styled";

export const RecheckFormStyled = styled.form`
  margin-top: 80px;

  @media screen and (max-width: 860px) {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 750px) {
    margin-top: 40px;
  }
`;

export const RecheckFormTitleStyled = styled.h2`
  font-family: "Foglihten", serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  text-transform: uppercase;

  @media screen and (max-width: 500px) {
    font-size: 32px;
    line-height: 36px;
  }
`;

export const RecheckFormContainerStyled = styled.div`
  margin-top: 60px;

  @media screen and (max-width: 860px) {
    margin-top: 30px;
  }
`;
