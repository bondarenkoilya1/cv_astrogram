import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  padding-top: 30px;
`;

export const HeaderBorderStyled = styled.div`
  display: none;
  border: 1px solid #312d48;
  margin-top: 30px;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
