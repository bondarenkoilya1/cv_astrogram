import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

import {
  AdditionalNavigationItemStyled,
  AdditionalNavigationLinkStyled,
  AdditionalNavigationStyled
} from "./styled";

import "swiper/css";

export const AdditionalNavigation = ({ array, ...attrs }) => {
  return (
    <Swiper
      breakpoints={{
        1330: {
          slidesPerView: 4
        },
        700: {
          slidesPerView: 1
        },
        280: {
          slidesPerView: 1
        },
        0: {
          slidesPerView: 0.7
        }
      }}>
      <AdditionalNavigationStyled {...attrs}>
        {array.map(({ text, url }) => (
          <AdditionalNavigationItemStyled key={uuidv4()}>
            <SwiperSlide className="slider-item" key={uuidv4()}>
              <AdditionalNavigationLinkStyled to={url}>{text}</AdditionalNavigationLinkStyled>
            </SwiperSlide>
          </AdditionalNavigationItemStyled>
        ))}
      </AdditionalNavigationStyled>
    </Swiper>
  );
};

AdditionalNavigation.propTypes = {
  array: PropTypes.array.isRequired
};
