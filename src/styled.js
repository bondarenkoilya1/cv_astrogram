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
    font-family: "SF Pro Text", sans-serif;
    color: #fff;
  }
`;

export const ContainerStyled = styled.div`
  max-width: 1520px;
  margin: 0 auto;
`;
