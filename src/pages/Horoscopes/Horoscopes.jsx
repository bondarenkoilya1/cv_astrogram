import React from "react";

import { ContainerStyled } from "../../styled";
import { HoroscopesContainerStyled } from "./styled";

import { HoroscopeContent, MainForm, PersonCard } from "../../components";
import { horoscopeContentList } from "../../data";

export const Horoscopes = () => {
  return (
    <ContainerStyled>
      <HoroscopesContainerStyled>
        <MainForm />
      </HoroscopesContainerStyled>
      <HoroscopeContent array={horoscopeContentList} style={{ marginTop: "120px" }} />
      <PersonCard
        title="Василиса Иванова"
        description="Профессиональный астролог"
        backgroundName="vasilisaIvanova"
        style={{ width: "50%" }}
      />
    </ContainerStyled>
  );
};
