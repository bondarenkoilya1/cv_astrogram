import React from "react";

import { ContainerStyled } from "../../styled";
import { HoroscopesContainerStyled } from "./styled";

import { GetAnswers, HoroscopeContent, MainForm, Slider } from "../../components";
import { horoscopeContentList, productsList } from "../../data";

export const Horoscopes = () => {
  return (
    <ContainerStyled>
      <HoroscopesContainerStyled>
        <MainForm />
      </HoroscopesContainerStyled>
      <HoroscopeContent array={horoscopeContentList} style={{ marginTop: "120px" }} />
      <GetAnswers style={{ marginTop: "120px", marginBottom: "120px" }} />
      <Slider array={productsList} style={{ marginTop: "120px", marginBottom: "120px" }} />
    </ContainerStyled>
  );
};
