import { Link } from "react-router-dom";

import styled from "@emotion/styled";

export const BlogSliderCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BlogSliderCardLinkStyled = styled(Link)``;

export const BlogSliderCardImageStyled = styled.img``;

export const BlogSliderCardTitleStyled = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  margin-top: 30px;
  font-family: "SF Pro Text", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`;
