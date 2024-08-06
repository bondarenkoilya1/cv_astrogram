import React from "react";
import Carousel from "react-multi-carousel";
import PropTypes from "prop-types";

import { MainProductsSliderContainer } from "./styled.js";

import { BasicSliderCard } from "../../SliderCards";
import { CustomArrow } from "../CustomArrow";

import "react-multi-carousel/lib/styles.css";

export const MainProductsSlider = ({ array, ...attrs }) => {
  return (
    <MainProductsSliderContainer {...attrs}>
      <Carousel
        arrows
        customLeftArrow={<CustomArrow type="prev" />}
        customRightArrow={<CustomArrow type="next" />}
        showDots
        infinite={true}
        draggable
        slidesToSlide={5}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 5
          }
        }}
        className="carousel"
        dotListClass="carousel-dots">
        {array.map(({ imageSrc, category, title, currentPrice, oldPrice }) => (
          <BasicSliderCard
            imageSrc={imageSrc}
            category={category}
            title={title}
            currentPrice={currentPrice}
            oldPrice={oldPrice}
            key={crypto.randomUUID()}
          />
        ))}
      </Carousel>
    </MainProductsSliderContainer>
  );
};

MainProductsSlider.propTypes = {
  array: PropTypes.array.isRequired
};
