import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

import { BlogSliderCard } from "../../SliderCards";

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4
};

export const BlogProductsSlider = ({ array, ...attrs }) => {
  return (
    <div className="slider-container" {...attrs}>
      <Slider {...defaultSettings}>
        {array.map(({ imageSrc, title }) => (
          <BlogSliderCard imageSrc={imageSrc} title={title} key={crypto.randomUUID()} />
        ))}
      </Slider>
    </div>
  );
};

BlogProductsSlider.propTypes = {
  array: PropTypes.array.isRequired
};
