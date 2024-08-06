import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

import { BlogSliderCard } from "../../SliderCards";

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1770,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
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
