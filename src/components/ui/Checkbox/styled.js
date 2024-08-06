import styled from "@emotion/styled";

import Mark from "../../../assets/images/checkbox/mark.svg";
import MarkBlue from "../../../assets/images/checkbox/mark-blue.svg";

export const LabelStyled = styled.label`
  user-select: none;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  cursor: pointer;
  ${({ category }) =>
    category === "gift" &&
    `
    & input:checked + span {
      background: #fff url(${MarkBlue}) no-repeat center;
    }
  `}

  &[type="text"],
  &[type="squared"] {
    margin-left: 30px;
  }

  &[type="outline"] {
    border: 1px solid #fff;
    border-radius: 100px;
    padding: 14px 20px 14px 50px;
  }

  &[type="squared"] {
    align-items: center;
    font-weight: 400;
    color: ${(props) => (props.textColor === "white" ? "#fff" : "#b2add8")};
  }

  &[type="squared"] > span {
    border-radius: 5px;
  }

  &[type="outline"] > span {
    border-color: #fff;
  }

  &[type="outline"]:hover > input:checked + span {
    background: #fff url(${MarkBlue}) no-repeat center;
  }

  &[type="outline"]:hover {
    background: linear-gradient(90deg, #5846fb 0%, #a000ba 100%);
    border-color: transparent;
  }

  &[disabled] {
    color: #63616f;

    & > span {
      border-color: #747474;
    }
  }
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
  border-radius: 100%;
  margin-left: -30px;
  border: ${({ error }) => (error ? "1px solid #D81236" : "1px solid #50536a")};
`;
