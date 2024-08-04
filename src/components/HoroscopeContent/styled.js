import styled from "@emotion/styled";

export const HoroscopeContentStyled = styled.ul`
  margin: 0 auto;
  max-width: 1006px;
`;

export const HoroscopeContentTitleStyled = styled.h2`
  font-family: "Foglihten", serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 700px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const HoroscopeContentListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 60px;

  @media screen and (max-width: 890px) {
    margin-top: 30px;
  }
`;
