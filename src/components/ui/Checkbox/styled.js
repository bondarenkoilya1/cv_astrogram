import styled from "@emotion/styled";

import Mark from "../../../assets/images/checkbox/mark.svg";

export const LabelStyled = styled.label`
  margin-left: 30px;
  user-select: none;
  display: inline-flex;
  align-items: center;
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  cursor: pointer;
`;

export const CheckboxSemanticStyled = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  padding-left: 30px;

  &:checked + span {
    border: none;
    background: #5846fb url(${Mark}) no-repeat center;
  }
`;

export const CheckboxCustomStyled = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid #50536a;
  border-radius: 100%;
  margin-left: -30px;
`;
