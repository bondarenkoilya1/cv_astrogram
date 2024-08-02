import React from "react";

import { ContainerStyled } from "../../styled";
import { HoroscopesContainerStyled } from "./styled";

import { HoroscopeContent, MainForm } from "../../components";
import { horoscopeContentList } from "../../data";

export const Horoscopes = () => {
  return (
    <ContainerStyled>
      <HoroscopesContainerStyled>
        <MainForm />
      </HoroscopesContainerStyled>
      <HoroscopeContent array={horoscopeContentList} style={{ marginTop: "120px" }} />
    </ContainerStyled>
  );
};
