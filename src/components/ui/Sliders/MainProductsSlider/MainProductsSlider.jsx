import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

import { BasicSliderCard } from "../../SliderCards";

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 5
};

export const MainProductsSlider = ({ array, ...attrs }) => {
  return (
    <div className="slider-container" {...attrs}>
      <Slider {...defaultSettings}>
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
      </Slider>
    </div>
  );
};

MainProductsSlider.propTypes = {
  array: PropTypes.array.isRequired
};
