import { css } from "@emotion/react";

import Forlihten from "./assets/fonts/Forlihten.woff2";
import SFProTextBold from "./assets/fonts/SFProTextBold.woff2";
import SFProTextRegular from "./assets/fonts/SFProTextRegular.woff2";
import SpaceGroteskBold from "./assets/fonts/SpaceGroteskBold.woff2";
import SpaceGroteskRegular from "./assets/fonts/SpaceGroteskRegular.woff2";

export const connectFonts = css`
  @font-face {
    font-family: "Forlihten";
    src:
      local("Forlihten"),
      url(${Forlihten}) format("woff2");
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "SF Pro Text";
    src:
      local("SF Pro Text"),
      url(${SFProTextBold}) format("woff2");
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "SF Pro Text";
    src:
      local("SF Pro Text"),
      url(${SFProTextRegular}) format("woff2");
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Space Grotesk";
    src:
      local("Space Grotesk"),
      url(${SpaceGroteskBold}) format("woff2");
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Space Grotesk";
    src:
      local("Space Grotesk"),
      url(${SpaceGroteskRegular}) format("woff2");
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
`;
