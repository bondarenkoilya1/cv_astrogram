import { Link } from "react-router-dom";

import styled from "@emotion/styled";

export const ProductsStyled = styled.section``;

export const ProductsTitleStyled = styled.h2`
  font-family: "Foglihten", serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  text-transform: uppercase;
`;

export const ProductsDescriptionStyled = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-top: 20px;
`;

export const ProductsButtonContainerStyled = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

export const ProductsButtonStyled = styled(Link)`
  display: inline-block;
  background-color: transparent;
  border: 1px solid #464168;
  border-radius: 100px;
  padding: 20px 30px;

  &:hover {
    background: linear-gradient(90deg, #5846fb 0%, #a000ba 100%);
    border-color: transparent;
  }
`;
