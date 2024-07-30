import emotionNormalize from "emotion-normalize";

import { css } from "@emotion/react";

import styled from "@emotion/styled";

export const GlobalStyle = css`
	${emotionNormalize}
	
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
}`;

export const ContainerStyled = styled.div`
  max-width: 1520px;
  margin: 0 auto;
`;
