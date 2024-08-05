import { Link } from "react-router-dom";

import styled from "@emotion/styled";

export const AdditionalNavigationStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AdditionalNavigationItemStyled = styled.li`
  margin-right: 10px;
  display: flex;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 640px) {
    margin-right: 0;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const AdditionalNavigationLinkStyled = styled(Link)`
  margin-right: 10px;

  &:hover {
    color: #b2add8;
  }
`;

export const AdditionalNavigationSeparatorStyled = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 100%;
  background-color: #b2add8;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;
