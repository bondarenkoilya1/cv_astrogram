import emotionNormalize from "emotion-normalize";

import { css } from "@emotion/react";

import styled from "@emotion/styled";

import { connectFonts } from "./fonts";

export const GlobalStyle = css`
  ${emotionNormalize}
  ${connectFonts}
 
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

  .carousel {
    position: unset;
  }

  .carousel-dots {
    bottom: 8%;

    & li button {
      background: #ada4e7;
      border: none;
      width: 10px;
      height: 10px;
    }
  }

  .react-multi-carousel-dot--active > button {
    background-color: #5846fb !important;
  }
`;

export const ContainerStyled = styled.div`
  max-width: 1520px;
  margin: 0 auto;

  @media screen and (max-width: 1610px) {
    max-width: 90%;
  }
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
