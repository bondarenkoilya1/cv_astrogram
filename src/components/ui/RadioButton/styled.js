import styled from "@emotion/styled";

import MarkBlue from "../../../assets/images/checkbox/mark-blue.svg";

export const LabelStyled = styled.label`
  user-select: none;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  cursor: pointer;

  border-radius: 100px;
  padding: 14px 20px 14px 50px;

  & > span {
    border-color: #fff;
  }

  &:hover > input:checked + span {
    background: #fff url(${MarkBlue}) no-repeat center;
  }

  &:hover {
    background: linear-gradient(90deg, #5846fb 0%, #a000ba 100%);
    border-color: transparent;
  }

  ${({ checked }) =>
    checked &&
    `
        background: linear-gradient(90deg, #5846fb 0%, #a000ba 100%);
        border: none
  `}

  border: ${({ error }) => (error ? "1px solid #D81236" : "1px solid #fff")};
`;

export const RadioButtonSemanticStyled = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  padding-left: 30px;

  &:checked + span {
    border: none;
    background: #fff url(${MarkBlue}) no-repeat center;
  }
`;

export const RadioButtonCustomStyled = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  margin-left: -30px;
  border: 1px solid #50536a;
`;
