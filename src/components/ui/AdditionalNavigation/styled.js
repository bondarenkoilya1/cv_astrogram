import { Link } from "react-router-dom";

import styled from "@emotion/styled";

export const AdditionalNavigationStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AdditionalNavigationItemStyled = styled.li`
  margin-right: 10px;
  display: flex;
  align-items: center;

  &:last-child {
    margin-right: 0;
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
`;
