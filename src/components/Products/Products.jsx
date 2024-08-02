import React from "react";
import PropTypes from "prop-types";

import {
  ProductsButtonContainerStyled,
  ProductsButtonStyled,
  ProductsDescriptionStyled,
  ProductsStyled,
  ProductsTitleStyled
} from "./styled";

import { MainProductsSlider } from "../ui";

export const Products = ({ title, description, array, ...attrs }) => {
  return (
    <ProductsStyled {...attrs}>
      <ProductsTitleStyled>{title}</ProductsTitleStyled>
      <ProductsDescriptionStyled>{description}</ProductsDescriptionStyled>
      <MainProductsSlider array={array} style={{ marginTop: "40px" }} />
      <ProductsButtonContainerStyled>
        <ProductsButtonStyled to="/">Смотреть все</ProductsButtonStyled>
      </ProductsButtonContainerStyled>
    </ProductsStyled>
  );
};

Products.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  array: PropTypes.array.isRequired
};
