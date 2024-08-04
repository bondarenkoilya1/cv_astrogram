import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  padding: 14px 30px;
  border-radius: 100px;
  color: #fff;
  cursor: pointer;

  &[disabled] {
    opacity: 0.4;
    cursor: progress;
  }
`;

export const FilledButtonStyled = styled(ButtonStyled)`
  background: linear-gradient(90deg, #2c18e5 -3.25%, #5442f4 47.69%, #5442f5 105.41%);
`;

export const OutlineButtonStyled = styled(ButtonStyled)`
  background: transparent;
  border: 1px solid #464168;
`;
