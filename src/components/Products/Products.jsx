import React from "react";
import PropTypes from "prop-types";

import {
  ProductsButtonContainerStyled,
  ProductsDescriptionStyled,
  ProductsStyled,
  ProductsTitleStyled
} from "./styled";

import { BlogProductsSlider, Link, MainProductsSlider } from "../ui";

const renderSlider = (type, array) => {
  if (type === "blog") {
    return <BlogProductsSlider array={array} style={{ marginTop: "40px" }}></BlogProductsSlider>;
  }

  return <MainProductsSlider array={array} style={{ marginTop: "40px" }} />;
};

export const Products = ({ title, description, array, type, ...attrs }) => {
  return (
    <ProductsStyled {...attrs}>
      <ProductsTitleStyled>{title}</ProductsTitleStyled>
      <ProductsDescriptionStyled>{description}</ProductsDescriptionStyled>
      {renderSlider(type, array)}
      <ProductsButtonContainerStyled>
        <Link defaultpadding="true">Смотреть все</Link>
      </ProductsButtonContainerStyled>
    </ProductsStyled>
  );
};

Products.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  array: PropTypes.array.isRequired,
  type: PropTypes.string
};
