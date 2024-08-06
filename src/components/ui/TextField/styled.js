import MaskedInput from "react-text-mask";

import styled from "@emotion/styled";

import { Image } from "../Image";

export const TextFieldContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TextFieldLabelStyled = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 15px;
`;

export const TextFieldStyled = styled.input`
  border-radius: 100px;
  background-color: #1e1c2d;
  font-size: 16px;
  color: #fff;
  line-height: 26px;
  padding: 14px 30px;
  border: none;
  outline: none;
  border: ${({ error }) => (error ? "1px solid #D81236" : "none")};

  &::placeholder {
    color: #b2add8;
  }
`;

export const TextFieldMaskedContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextFieldMaskedFieldContainerStyled = styled.div`
  position: relative;
`;

export const TextFieldMaskedImageStyled = styled(Image)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;

export const TextFieldMaskedStyled = styled(MaskedInput)`
  padding: 14px 0;
  background-color: #1e1c2d;
  outline: none;
  border-radius: 100px;
  font-size: 16px;
  color: #fff;
  line-height: 26px;
  text-align: center;
  border: ${({ error }) => (error ? "1px solid #D81236" : "none")};

  &::placeholder {
    color: #b2add8;
  }
`;
