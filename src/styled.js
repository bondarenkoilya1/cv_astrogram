import emotionNormalize from "emotion-normalize";

import { css } from "@emotion/react";

import styled from "@emotion/styled";

import leftArrowIcon from "./assets/images/slider/left-arrow.svg";
import rightArrowIcon from "./assets/images/slider/right-arrow.svg";
import { connectFonts } from "./fonts";

export const sliderStyled = css`
  .slick-dots {
    bottom: -55px;
  }

  .slick-dots li button:before {
    color: #ada4e7;
    opacity: 1;
    font-size: 10px;
  }

  .slick-dots li.slick-active button:before {
    color: #5846fb;
  }

  .slick-arrow::before {
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 100%;
    padding: 13px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-prev {
    left: -60px;
  }

  .slick-next {
    right: -40px;
  }

  .slick-prev::before {
    background: url(${leftArrowIcon}), #2e2c41;
    background-repeat: no-repeat;
    background-position: center;
  }

  .slick-next::before {
    background: url(${rightArrowIcon}), #2e2c41;
    background-repeat: no-repeat;
    background-position: center;
  }

  .slick-prev:hover::before {
    background: url(${leftArrowIcon}), linear-gradient(90deg, #5846fb 0%, #a000ba 100%);
    background-repeat: no-repeat;
    background-position: center;
  }

  .slick-next:hover::before {
    background: url(${rightArrowIcon}), linear-gradient(90deg, #5846fb 0%, #a000ba 100%);
    background-repeat: no-repeat;
    background-position: center;
  }

  .slick-slider {
    margin-inline: -30px;
  }

  .slick-slide > div {
    margin-inline: 10px;
  }
`;

export const GlobalStyle = css`
  ${emotionNormalize}
  ${connectFonts}
  ${sliderStyled}
	
	html {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #111018;
  }

  li {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #root {
    font-family: "Space Grotesk", sans-serif;
    color: #fff;
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerStyled = styled.div`
  max-width: 1520px;
  margin: 0 auto;
`;

export const VerticalLineStyled = styled.div`
  width: 1px;
  height: 20px;
  ${(props) =>
    props.smallMargin &&
    `
    margin-right: 20px;
    margin-left: 20px;
    background-color: #50536A;
  `}${(props) =>
    props.defaultMargin &&
    `
    margin-right: 30px;
    margin-left: 30px;
    background-color: #fff;
  `}
`;
