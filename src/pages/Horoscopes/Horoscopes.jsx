import React from "react";

import { ContainerStyled } from "../../styled";
import { HoroscopesContainerStyled } from "./styled";

import { GetAnswers, HoroscopeContent, MainForm, Products } from "../../components";
import { horoscopeContentList, productsList } from "../../data";

export const Horoscopes = () => {
  return (
    <ContainerStyled>
      <HoroscopesContainerStyled>
        <MainForm />
      </HoroscopesContainerStyled>
      <HoroscopeContent array={horoscopeContentList} style={{ marginTop: "120px" }} />
      <GetAnswers style={{ marginTop: "120px" }} />
      <Products
        title="Погрузитесь в атмосферу настоящей астрологии "
        description="Ароматное  мыло и соль для ванны помогут подготовится  к новым романтическим открытиям"
        array={productsList}
        style={{ marginTop: "120px", marginBottom: "120px" }}
      />
    </ContainerStyled>
  );
};
