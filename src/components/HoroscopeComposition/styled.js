import styled from "@emotion/styled";

export const HoroscopeCompositionStyled = styled.section``;

export const HoroscopeCompositionTitleStyled = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

export const HoroscopeCompositionListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;

  @media screen and (max-width: 580px) {
    margin-top: 20px;
  }
`;
