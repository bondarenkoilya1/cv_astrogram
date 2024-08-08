import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { BasicSliderCard } from "../../SliderCards";

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1770,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 1270,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    }
  ]
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
            key={uuidv4()}
          />
        ))}
      </Slider>
    </div>
  );
};

MainProductsSlider.propTypes = {
  array: PropTypes.array.isRequired
};
