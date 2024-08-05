import styled from "@emotion/styled";

import { RadioButton, TextField } from "../ui";

export const BirthFormStyled = styled.form`
  margin-top: 80px;

  @media screen and (max-width: 860px) {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 750px) {
    margin-top: 40px;
  }
`;

export const BirthFormTitleStyled = styled.h2`
  font-family: "Foglihten", serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  text-transform: uppercase;

  @media screen and (max-width: 500px) {
    font-size: 32px;
    line-height: 36px;
  }
`;

export const BirthFormContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 870px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }
`;

export const BirthFormBirthtimeContainerStyled = styled.div`
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 870px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BirthFormDescriptionStyled = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-top: 40px;
`;

export const BirthFormTextStyled = styled.span`
  display: block;
`;

export const BirthFormInputsStyled = styled.div`
  margin-top: 80px;
`;

export const BirthFormTextFieldStyled = styled(TextField)`
  width: 300px;

  @media screen and (max-width: 360px) {
    width: 100%;
  }
`;

export const BirthFormBirthtimeTextFieldStyled = styled(TextField)`
  width: 222px;
  margin-right: 10px;

  @media screen and (max-width: 500px) {
    margin-right: 0;
    width: 300px;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
  }
`;

export const BirthFormRadioButtonStyled = styled(RadioButton)`
  @media screen and (max-width: 500px) {
    margin-top: 20px;
    width: 300px;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
  }
`;
