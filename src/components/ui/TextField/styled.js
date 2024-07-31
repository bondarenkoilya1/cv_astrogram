import styled from "@emotion/styled";

export const TextFieldContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextFieldLabelStyled = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
`;

export const TextFieldStyled = styled.input`
  margin-top: 15px;
  border-radius: 100px;
  background-color: #1e1c2d;
  font-size: 16px;
  color: #fff;
  line-height: 26px;
  padding: 14px 30px;
  border: none;
  outline: none;

  &::placeholder {
    color: #b2add8;
  }
`;
