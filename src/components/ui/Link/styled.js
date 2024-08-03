import { Link } from "react-router-dom";

import styled from "@emotion/styled";

export const LinkStyled = styled(Link)`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  border-radius: 100px;
  border: 1px solid #464168;
  ${(props) =>
    props.smallpadding &&
    `
      padding: 14px 30px;
    `}
  ${(props) =>
    props.defaultpadding &&
    `
      padding: 20px 30px;
    `}
  
  &:hover {
    background: linear-gradient(90deg, #5846fb 0%, #a000ba 100%);
    border-color: transparent;
  }
`;
