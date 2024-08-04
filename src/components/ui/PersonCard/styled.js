import styled from "@emotion/styled";

import vasilisaIvanova from "../../../assets/images/workers/vasilisa-ivanova.png";

const backgroundImages = {
  vasilisaIvanova
};

export const PersonCardStyled = styled.li`
  padding: 65px 50px 65px 65px;
  border-radius: 60px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${(props) =>
    props.backgroundName &&
    `
      background-image: url(${backgroundImages[props.backgroundName]});
    `};

  @media screen and (max-width: 500px) {
    padding-bottom: 40px;
  }

  @media screen and (max-width: 400px) {
    padding: 65px 20px 20px 20px;
  }
`;

export const PersonCardTitleStyled = styled.h4`
  font-family: "SF Pro Text", sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;

  @media screen and (max-width: 500px) {
    font-size: 24px;
    line-height: 28px;
  }

  @media screen and (max-width: 400px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const PersonCardDescriptionStyled = styled.p`
  margin-top: 5px;
  font-family: "SF Pro Text", sans-serif;
  font-size: 14px;
  line-height: 20px;
`;
