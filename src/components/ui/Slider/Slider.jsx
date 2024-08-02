import React from "react";
import SliderComponent from "react-slick";
import PropTypes from "prop-types";

import { BasicSliderCard } from "../SliderCards/BasicSliderCard/index.js";

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 5
};

export const Slider = ({ array, ...attrs }) => {
  return (
    <div className="slider-container" {...attrs}>
      <SliderComponent {...defaultSettings}>
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
      </SliderComponent>
    </div>
  );
};

Slider.propTypes = {
  array: PropTypes.array.isRequired
};
