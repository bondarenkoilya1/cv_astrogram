import emotionNormalize from "emotion-normalize";

import { css } from "@emotion/react";

import styled from "@emotion/styled";

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
