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
  }
`;

export const ContainerStyled = styled.div`
  max-width: 1520px;
  margin: 0 auto;
`;

export const VerticalLineStyled = styled.div`
  width: 1px;
  height: 20px;
  background-color: #fff;
  ${(props) =>
    props.smallMargin &&
    `
    margin-right: 20px;
    margin-left: 20px;
  `}${(props) =>
    props.defaultMargin &&
    `
    margin-right: 30px;
    margin-left: 30px;
  `}
`;
