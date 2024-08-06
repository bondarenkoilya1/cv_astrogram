import React from "react";
import PropTypes from "prop-types";

import { ContainerStyled } from "../../styled";
import {
  AdditionalNavigationStyled,
  HoroscopesContainerStyled,
  MainGetAnswersStyled,
  MainHoroscopeContentStyled,
  MainImageStyled
} from "./styled";

import woman from "../../assets/images/woman.png";
import {
  BirthForm,
  Gratitude,
  MainForm,
  OrderPlacement,
  Products,
  RecheckForm
} from "../../components";
import {
  additionalNavigation,
  blogPostsList,
  horoscopeContentList,
  otherProductsList,
  productsList
} from "../../data";

const Main = ({ nextStep }) => {
  return (
    <ContainerStyled>
      <AdditionalNavigationStyled array={additionalNavigation} />
      <MainImageStyled src={woman} alt="Woman with a heart" width="100%" height="auto" />
      <HoroscopesContainerStyled>
        <MainForm nextStep={nextStep} />
      </HoroscopesContainerStyled>
      <MainHoroscopeContentStyled array={horoscopeContentList} />
      <MainGetAnswersStyled />
      <Products
        title="Погрузитесь в атмосферу настоящей астрологии"
        description="Ароматное  мыло и соль для ванны помогут подготовится  к новым романтическим открытиям"
        array={productsList}
        style={{ marginTop: "120px" }}
      />
      <Products
        title="Другие гороскопы"
        description="У нас есть ответы и на другие составляющие твоей жизни"
        array={otherProductsList}
        style={{ marginTop: "120px" }}
        type="additional"
      />
      <Products
        title="Блог"
        description="Читайте статьи о любовных гороскопах"
        array={blogPostsList}
        style={{ marginTop: "120px", marginBottom: "120px" }}
        type="blog"
      />
    </ContainerStyled>
  );
};

Main.propTypes = {
  nextStep: PropTypes.func.isRequired
};

export const Horoscopes = ({ stage, nextStep, prevStep, resetForm }) => {
  switch (stage) {
    case 1:
      return <Main nextStep={nextStep} />;
    case 2:
      return (
        <HoroscopesContainerStyled>
          <BirthForm prevStep={prevStep} nextStep={nextStep} />
        </HoroscopesContainerStyled>
      );
    case 3:
      return (
        <HoroscopesContainerStyled>
          <RecheckForm prevStep={prevStep} nextStep={nextStep} />
        </HoroscopesContainerStyled>
      );
    case 4:
      return <OrderPlacement prevStep={prevStep} nextStep={nextStep} />;
    case 5:
      return <Gratitude resetForm={resetForm} />;
    default:
      return null;
  }
};

Horoscopes.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  stage: PropTypes.number.isRequired,
  resetForm: PropTypes.func.isRequired
};
